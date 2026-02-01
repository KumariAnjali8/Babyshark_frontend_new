import React from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 h-[70px] z-[1000]
                      flex items-center justify-between
                      px-[50px]
                      bg-[#242424] border-b border-white">

        {/* LOGO */}
        <h2
          onClick={() => navigate("/")}
          className="m-0 text-white cursor-pointer select-none"
        >
          BabyShark 🚀
        </h2>

        {/* NAV BUTTONS */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate("/explore")}
            className={`
              text-white text-[15px] bg-transparent border-none
              px-[10px] py-[6px] cursor-pointer transition
              border-b-2
              ${
                isActive("/explore")
                  ? "border-white font-bold"
                  : "border-transparent"
              }
            `}
          >
            Explore
          </button>

          <button
            onClick={() => navigate("/")}
            className={`
              text-white text-[15px] bg-transparent border-none
              px-[10px] py-[6px] cursor-pointer transition
              border-b-2
              ${
                isActive("/")
                  ? "border-white font-bold"
                  : "border-transparent"
              }
            `}
          >
            Home
          </button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="pt-[80px]">
        <Outlet />
      </div>
    </div>
  );
}

