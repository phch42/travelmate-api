import { Moon, Plane, Sun } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import {
    Brand,
    HeaderActions,
    HeaderContent,
    HeaderWrapper,
    Nav,
    StyledNavLink,
    ThemeOption,
    ThemeToggle,
} from "../styles/Header.styled";

function Header() {
    const { theme, toggleTheme } = useTheme();
    const { translations } = useLanguage();

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
                    <StyledNavLink to="/">
                        {translations.navigation.home}
                    </StyledNavLink>

                    <StyledNavLink to="/countries">
                        {translations.navigation.countries}
                    </StyledNavLink>

                    <StyledNavLink to="/cities">
                        {translations.navigation.cities}
                    </StyledNavLink>

                    <StyledNavLink to="/places">
                        {translations.navigation.places}
                    </StyledNavLink>

                    <StyledNavLink to="/about">
                        {translations.navigation.about}
                    </StyledNavLink>
                </Nav>

                <HeaderActions>
                    <LanguageSelector />

                    <ThemeToggle>
                        <ThemeOption
                            $active={theme === "light"}
                            onClick={() =>
                                theme !== "light" &&
                                toggleTheme()
                            }
                        >
                            <Sun size={14} />
                            {translations.theme.light}
                        </ThemeOption>

                        <ThemeOption
                            $active={theme === "dark"}
                            onClick={() =>
                                theme !== "dark" &&
                                toggleTheme()
                            }
                        >
                            <Moon size={14} />
                            {translations.theme.dark}
                        </ThemeOption>
                    </ThemeToggle>
                </HeaderActions>
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default Header;