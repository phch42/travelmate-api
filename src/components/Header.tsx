import { Moon, Plane, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import {
    Brand,
    HeaderContent,
    HeaderWrapper,
    Nav,
    StyledNavLink,
    ThemeOption,
    ThemeToggle,
} from "../styles/Header.styled";

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <HeaderWrapper>
            <HeaderContent>
                <Brand to="/">
                    <Plane size={24} />
                    <span>
                        Travel<span>Mate</span>
                    </span>
                </Brand>

                <Nav>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/countries">Countries</StyledNavLink>
                    <StyledNavLink to="/cities">Cities</StyledNavLink>
                    <StyledNavLink to="/places">Places</StyledNavLink>
                    <StyledNavLink to="/about">About</StyledNavLink>
                </Nav>

                <ThemeToggle>
                    <ThemeOption
                        $active={theme === "light"}
                        onClick={() =>
                            theme !== "light" && toggleTheme()
                        }
                    >
                        <Sun size={14} />
                        Light
                    </ThemeOption>

                    <ThemeOption
                        $active={theme === "dark"}
                        onClick={() =>
                            theme !== "dark" && toggleTheme()
                        }
                    >
                        <Moon size={14} />
                        Dark
                    </ThemeOption>
                </ThemeToggle>
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default Header;