import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrappepr className="navbar nav-bar-expand-sm navbar-dark">
                <Link>
                    <img src={logo} alt='store' className="navbar-brand" />
                </Link>
            </NavWrappepr>
        )
    }
}

const NavWrappepr = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;