import { StyledNavLink, HeaderWrapper, Nav } from "../styles/Header.styled";

function Header() {
    return (
        <HeaderWrapper>
            <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/countries">Countries</StyledNavLink>
                <StyledNavLink to="/cities">Cities</StyledNavLink>
                <StyledNavLink to="/places">Places</StyledNavLink>
            </Nav>
        </HeaderWrapper>
    );
}

export default Header;