import React from "react";
import reactSelect from "react-select";
// import Select from "react-select/dist/declarations/src/Select";

export default function Select({ children, ...props }) {
  return (
    <div className="mt-5 space-y-2 ">
      <label htmlFor="">Masuk Sebagai</label>
      <div className=" p-3 w-full bg-stone-50 border-2 rounded-md  shadow-sm">
        <select
          {...props}
          className="w-full bg-transparent outline-none"
          // id={"role"}
        >
          {/* {children} */}
          <option value="">Select an option</option>
          <option value="admin">Admin</option>
          <option value="petugas">Petugas</option>
        </select>
      </div>
    </div>
  );
}

