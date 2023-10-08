import React from "react";
import Button from "../button/Button";
import './NavBar.scss';
import navItems from "../../routes/navItems";
import { Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='nav-anchor'>
            {navItems.map((item) => (
                <Button>
                    <p className='nav-text'>{item.name}</p>
                </Button>
            ))}

            <Outlet />
        </div>
    )
};

export default NavBar;
