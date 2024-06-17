import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  Badge
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderAfterLogin.scss";
import { CartContext } from "context/CartContext";

function HeaderAfterLogin() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { cartItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (searchText) {
        navigate(`/product/search?query=${searchText}`);
        setSearchExpanded(false);
      }
    }
  };

  // Calculate total items in the cart
  const totalCartItems = cartItem.reduce((acc, item) => acc + item.value, 0);

  return (
    <Box sx={{ flexGrow: 1 }} className="header-container">
      <AppBar position="static">
        <Toolbar className="header">
          <div className="header-info">
            <div className="header-phone">
              <LocalPhoneIcon fontSize="large" className={"header-color"} />
              <Typography className="header-color">09123678754</Typography>
            </div>
            <div className="header-address">
              <HomeIcon fontSize="large" className={"header-color"} />
              <Typography className="header-color">
                123 Nguyễn Trãi, P.Tân Phú, Q.3, TPHCM
              </Typography>
              {searchExpanded && (
                <div className="header-search">
                  <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    onKeyPress={handleSearchKeyPress}
                    placeholder="Search..."
                    className="header-search-input"
                  />
                </div>
              )}
              <IconButton
                onClick={handleSearchClick}
                className={"header-color"}
              >
                <SearchIcon className={"header-color"} />
              </IconButton>
            </div>
          </div>
          <Link to="/shopping-cart" className="header-cart">
            <Badge badgeContent={totalCartItems} color="secondary">
              <ShoppingCartIcon fontSize="large" className={"header-color"} />
            </Badge>
          </Link>
          <Stack direction="row" spacing={4}>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src={
                    "https://t4.ftcdn.net/jpg/04/22/57/65/360_F_422576509_8MxGhSGZ4otQPtV6FyqO2FPrgNRTlEXj.jpg"
                  }
                />
              </IconButton>
              <Typography variant="subtitle2" className="text-white">
                {"Pham Trung Hieu"}
              </Typography>
            </Stack>
          </Stack>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
            <MenuItem onClick={() => { /* Handle logout logic here */ }}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderAfterLogin;
