import React from "react";
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
  return (
    <div className="text-4xl flex gap-1 items-center cursor-pointer"
    onClick={() => navigate("/")}>
      <svg
        className="text-gray-700 w-10 h-10 inline"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
          clipRule="evenodd"
        />
      </svg>
      <div>
        <span className="font-cinzel font-black text-darkcyan">Movie</span>
        <span className="text-myred font-thin">db</span>
      </div>
    </div>
  );
}

export default Logo;
