import React from "react";
import InputText from "../component/input";
import Select from "../component/select";
import Button from "../component/button";
import { useNavigate } from "react-router";

export default function Login() {
  let navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#434c55] flex justify-center items-center">
      <div className="w-[1200px] h-[630px] bg-[url('https://wallpaperaccess.com/full/383718.jpg')] rounded-2xl bg-cover shadow-2xl flex justify-end items-center">
        <p className="text-center uppercase text-white text-5xl font-bold w-1/2 h-1/3 ">
          Pembayaran spp berbasis web
        </p>
        <div className="w-[600px] h-[630px] bg-white rounded-2xl text-xl p-10">
          <p className="text-center uppercase text-3xl">Login Admin</p>
          <div className="p-10">
            <InputText placeholder={"username"} />
            <InputText placeholder={"password"} />
            <Select />
            <Button className={"bg-[#182433] mt-10 w-[100%]"} title={"Login"} />
            <div className="flex justify-center">
              <p className="mt-10 text-sm">masuk sebagai siswa?</p>
              <p
                onClick={() => {
                  return navigate("/login-siswa");
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
