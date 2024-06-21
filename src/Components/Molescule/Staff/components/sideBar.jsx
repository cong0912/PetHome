import React from "react";

import HomeIcon from "assets/icons/nav-menu-icons/HomeIcon";
import CalendarTodayIcon from "assets/icons/nav-menu-icons/CalendarTodayIcon";
import PawIcon from "assets/icons/nav-menu-icons/paw";
import CartIcoin from "assets/icons/nav-menu-icons/CartIcon";
const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-matext-mainColer text-gray-400">
      {/* <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div> */}
      <nav className="mt-1 p-3">
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
        <div className="p-2 flex items-center rounded transition duration-200 hover:bg-[#b0d8ff] hover:text-mainColer ">
          <CartIcoin />
          <a className="py-2.5 px-4 w-full">Danh sách đơn hàng</a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
