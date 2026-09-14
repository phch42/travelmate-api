import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
import { Brand, StyledNavLink, HeaderWrapper, Nav } from "../styles/Header.styled";

function Header() {
    return (
        <HeaderWrapper>
            <Brand to="/">
                <Plane size={24} />
                <span>Travel<span>Mate</span></span>
            </Brand>

            <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/countries">Countries</StyledNavLink>
                <StyledNavLink to="/cities">Cities</StyledNavLink>
                <StyledNavLink to="/places">Places</StyledNavLink>
                <StyledNavLink to="/about">About</StyledNavLink>
            </Nav>
        </HeaderWrapper>
    );
}

export default Header;