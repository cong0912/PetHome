import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Avatar from "@mui/material/Avatar";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import "./Header.scss"
import Text from "../../Atom/Text/Text";
import MyAxios from "../../../setup/configAxios";


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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
        const text = event.target.value;
        setSearchText(text);
        if (text) {
            MyAxios.get(`http://localhost:5000/api/v1/products/search?name=${text}`)
                .then(response => {
                    setSearchResults(response.data);
                })
                .catch(error => {
                    console.error("Error fetching search results", error);
                    setSearchResults([]);
                });
        } else {
            setSearchResults([]);
        }
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
                                        {searchResults.length > 0 && (

                                            <div className="search-results">
                                                {searchResults.map(result => (
                                                    <div key={result.id} className="search-result-item">
                                                        <a href={`/product/${result._id}`}>
                                                            <div className="flex gap-5">
                                                                <img src={result.image} className="w-[40px]"/>
                                                                {result.name}
                                                            </div>

                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

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