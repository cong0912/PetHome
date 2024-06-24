import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "assets/icons/nav-menu-icons/HomeIcon";
import CalendarTodayIcon from "assets/icons/nav-menu-icons/CalendarTodayIcon";
import PawIcon from "assets/icons/nav-menu-icons/paw";
import CartIcon from "assets/icons/nav-menu-icons/CartIcon";
import LeftAngle from "assets/icons/nav-menu-icons/leftAngle";
const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="h-screen w-64 bg-matext-mainColer text-gray-400 ">
      <nav className="mt-1 p-3 flex justify-evenly flex-col">
        <div>
          <div className="p-2 flex items-center rounded transition duration-200 hover:bg-[#b0d8ff] hover:text-mainColer">
            <CalendarTodayIcon />
            <a className="py-2.5 px-4 w-full">Danh sách đặt chổ</a>
          </div>

          <div className="p-2 flex items-center rounded transition duration-200 hover:bg-[#b0d8ff] hover:text-mainColer">
            <HomeIcon />
            <a className="py-2.5 px-4 w-full">Danh sách dịch vụ</a>
          </div>

          <div className="p-2 flex items-center rounded transition duration-200 hover:bg-[#b0d8ff] hover:text-mainColer ">
            <PawIcon />
            <a className="py-2.5 px-4 w-full">Danh sách sản phẩm</a>
          </div>

          <Link to="/staff/list-order">
            <div className="p-2 flex items-center rounded transition duration-200 hover:bg-[#b0d8ff] hover:text-mainColer ">
              <CartIcon />
              <a className="py-2.5 px-4 w-full">Danh sách đơn hàng</a>
            </div>
          </Link>
        </div>
        {/* Logout button */}
        <div
          className="p-2 flex items-center rounded transition duration-200 hover:bg-[#b0d8ff] hover:text-mainColer cursor-pointer "
          onClick={handleLogout}
        >
          <LeftAngle />
          <span className="py-2.5 px-4 w-full">Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
