import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Avatar from "@mui/material/Avatar";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import "./Header.css"
import Text from "../../Atomic Components/Atom/Text/Text";
function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }} className="header-container">
            <AppBar
                sx={{
                    zIndex: 3,
                }}
                className="header"
            >
                <Toolbar>
                    <div>
                        <div className="logo-container">
                            <img
                                src={"https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&"}
                                alt="logo"
                                className="header-logo"
                            />
                        </div>
                    </div>
                    <div className="header-info">
                        <div className="header-phone">
                            <LocalPhoneIcon fontSize="large" />
                            <Text
                                content={"09123678754"}
                            />
                        </div>
                        <div className="header-address">
                            <HomeIcon fontSize="large" />

                            <Text
                                content={"123 Nguyễn Trãi,P.Tân Phú,Q.3,TPHCM"}
                            />
                        </div>
                        <div className="header-cart">
                            <ShoppingCartIcon fontSize="large"/>
                        </div>
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
                                        className="!font-bold"
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
            </AppBar>
        </Box >
    )
}
export default Header