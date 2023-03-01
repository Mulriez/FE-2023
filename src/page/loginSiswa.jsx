import React from "react";
import InputText from "../component/input";
import Button from "../component/button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authLogin } from "../redux/action/authAction";
import Swal from "sweetalert2";

export default function Login2() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
    name: "",
    status: "",
    jenisKelamin: "",
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (payload.email === "" || payload.password === "") {
      setForm("Form masih kosong");
    }
    if (payload.email === "") {
      setEmail("Email harus diisi");
    }
    if (payload.password === "") {
      setPassword("Password harus diisi");
    }
    try {
      setLoading(true);
      const response = await dispatch(authLogin(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response?.msg,
        });
        return navigate("/dashboard", { replace: true });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: response?.response?.data?.msg,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    console.log("jalan", payload);
  };

  return (
    <div className="w-full h-screen bg-[#434c55] flex justify-center items-center">
      <div className="w-[1200px] h-[630px] bg-[url('https://wallpaperaccess.com/full/383718.jpg')] rounded-2xl bg-cover shadow-2xl flex justify-end items-center">
        <p className="text-center uppercase text-white text-5xl font-bold w-1/2 h-1/3 ">
          Pembayaran spp berbasis web
        </p>
        <div className="w-[600px] h-[630px] bg-white rounded-2xl text-xl p-10">
          <p className="text-center uppercase text-3xl">Login Siswa</p>
          <div className="p-10">
            <InputText placeholder={"NISN"} />
            <InputText placeholder={"NIS"} />
            <Button className={"bg-[#182433] mt-10 w-[100%]"} title={"Login"} />
            <div className="flex justify-center">
              <p className="mt-10 text-sm">masuk sebagai Admin?</p>
              <p
                onClick={() => {
                  return navigate("/login-admin");
                }}
                className="mt-10 text-sm text-green-500 cursor-pointer"
              >
                Klik disini
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
