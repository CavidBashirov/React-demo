import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink , useNavigate } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <Navbar
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={require('../../assets/images/logo.png')}
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                    Reactstrap
                </NavbarBrand>
                <NavLink style={{color:"white"}} className="nav-link" to="/contact">Contact</NavLink>
                <NavLink style={{color:"white"}} className="nav-link" to="/about">About</NavLink>
                <NavLink style={{color:"white"}} className="nav-link" to="/employee">Employees</NavLink>
            </Navbar>
        </div>
    )
}

export default Navigation
