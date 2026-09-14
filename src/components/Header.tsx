import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/countries">Countries</NavLink>
                <NavLink to="/cities">Cities</NavLink>
                <NavLink to="/places">Places</NavLink>
            </nav>
        </header>
    )
}

export default Header;