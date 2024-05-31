import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Avatar from "@mui/material/Avatar";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import "./Header.css"
import Text from "../../Atom/Text/Text";


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [searchText, setSearchText] = useState('');

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

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} className="header-container">
                <div
                    className="header"
                >
                    <Toolbar>
                        <div>

                        </div>
                        <div className="header-info">
                            <div className="header-phone">
                                <LocalPhoneIcon fontSize="large" className={"header-color"} />
                                <Text
                                    content={"09123678754"}
                                    className={"header-color"}
                                />
                            </div>
                            <div className="header-address">
                                <HomeIcon fontSize="large" className={"header-color"} />
                                <Text
                                    content={"123 Nguyễn Trãi,P.Tân Phú,Q.3,TPHCM"}
                                    className={"header-color"}
                                />
                                {searchExpanded && (
                                    <div className="header-search">
                                        <input
                                            type="text"
                                            value={searchText}
                                            onChange={handleSearchChange}
                                            placeholder="Search..."
                                            className="header-search-input"
                                        />
                                    </div>
                                )}
                                <IconButton onClick={handleSearchClick} className={"header-color"}>
                                    <SearchIcon className={"header-color"} />
                                </IconButton>
                            </div>


                        </div>
                        <div className="header-cart">
                            <ShoppingCartIcon fontSize="large" className={"header-color"} />
                        </div>
                        <div>

                            <Stack
                                direction="row"
                                spacing={4}
                            >

                                <Stack
                                    direction="row"
                                    alignItems={" center "}
                                    spacing={1}
                                >
                                    <IconButton
                                        onClick={handleMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={"https://t4.ftcdn.net/jpg/04/22/57/65/360_F_422576509_8MxGhSGZ4otQPtV6FyqO2FPrgNRTlEXj.jpg"}
                                        />
                                    </IconButton>
                                    <Stack spacing={0}>
                                        <Typography
                                            variant="subtitle2"
                                            className="text-white"
                                        >
                                            {"pham trung hieu"}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: " top ",
                                    horizontal: " right ",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: " top ",
                                    horizontal: " right ",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Log Out</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </div>
            </Box >
        </div>
    )
}
export default Header