import React from "react";

function Button({ title, type, textColor, className }) {
  // if (type === "submit" || type === "Submit") return setBackground === "#7765E3";
  return (
    <button
      className={`p-3 px-10 bg-main text-white shadow-sm font-medium rounded-xl ${className}  transition-all ease-in-out delay-75 duration-200`}
      type={type}
    >
      {title}
    </button>
  );
}

export default Button;
