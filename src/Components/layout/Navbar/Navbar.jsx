import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDichVuOpen, setIsDichVuOpen] = useState(false);
  const [isCuaHangOpen, setIsCuaHangOpen] = useState(false);
  const [isSpaOpen, setIsSpaOpen] = useState(false);
  const [isDichVuTaiNhaOpen, setIsDichVuTaiNhaOpen] = useState(false);
  const [isDanhChoChoOpen, setIsDanhChoChoOpen] = useState(false);
  const [isDanhChoMeoOpen, setIsDanhChoMeoOpen] = useState(false);

  return (
    <div className="navbar-header">
      <img
        className="logo"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&"
      />

      <ul>
        <li>Trang Chủ</li>
        <li>
          {" "}
          <Link to="/introduction"> Giới Thiệu </Link>{" "}
        </li>
        <li
          onMouseEnter={() => setIsDichVuOpen(true)}
          onMouseLeave={() => setIsDichVuOpen(false)}
        >
          <div className="dropdown-icon">
            Dịch Vụ <ArrowDropDownIcon />
          </div>

          {isDichVuOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setIsSpaOpen(true)}
                onMouseLeave={() => setIsSpaOpen(false)}
              >
                <div className="dropdown-icon">
                  {" "}
                  Spa Thú Cưng <ArrowDropDownIcon />
                </div>
                {isSpaOpen && (
                  <ul className="dropdown">
                    <li>Tắm, gội, vệ sinh</li>
                    <li>Cắt, tỉa</li>
                    <li>Tắm, vệ sinh, cạo</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setIsDichVuTaiNhaOpen(true)}
                onMouseLeave={() => setIsDichVuTaiNhaOpen(false)}
              >
                <div className="dropdown-icon">
                  Dịch Vụ Tại Nhà <ArrowDropDownIcon />
                </div>

                {isDichVuTaiNhaOpen && (
                  <ul className="dropdown">
                    <li>Tắm tại nhà</li>
                    <li>Cắt, tỉa tại nhà</li>
                  </ul>
                )}
              </li>
              <li>Khách sạn thú cưng</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => setIsCuaHangOpen(true)}
          onMouseLeave={() => setIsCuaHangOpen(false)}
        >
          <div className="dropdown-icon">
            Cửa Hàng <ArrowDropDownIcon />
          </div>

          {isCuaHangOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setIsDanhChoChoOpen(true)}
                onMouseLeave={() => setIsDanhChoChoOpen(false)}
              >
                <div className="dropdown-icon">
                  Dành cho chó <ArrowDropDownIcon />
                </div>

                {isDanhChoChoOpen && (
                  <ul className="dropdown">
                    <li>Thức ăn cho chó</li>
                    <li>Phụ kiện cho chó</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setIsDanhChoMeoOpen(true)}
                onMouseLeave={() => setIsDanhChoMeoOpen(false)}
              >
                <div className="dropdown-icon">
                  {" "}
                  Dành cho mèo <ArrowDropDownIcon />
                </div>

                {isDanhChoMeoOpen && (
                  <ul className="dropdown">
                    <li>Thức ăn cho mèo</li>
                    <li>Phụ kiện cho mèo</li>
                  </ul>
                )}
              </li>
              <li>Chăm sóc sức khỏe</li>
            </ul>
          )}
        </li>
        <li>Liên Hệ</li>
      </ul>
      <div className="navbar-booking">
        <p>ONLINE BOOKING</p>
        <SendIcon />
      </div>
    </div>
  );
}

export default Navbar;
