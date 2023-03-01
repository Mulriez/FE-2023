import React from "react";

const InputText = ({
  id,
  handleChange,
  value,
  type,
  name,
  label,
  placeholder,
}) => {

  return (
    <div className="space-y-2 flex flex-col mt-5">
      <label htmlFor="email" className="">
        {label}
      </label>
      <input
        className="border-2 p-3 rounded-md bg-stone-50 shadow-sm"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default InputText;