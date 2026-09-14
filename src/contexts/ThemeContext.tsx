import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, theme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [themeMode, setThemeMode] = useState<ThemeMode>("light");

    const toggleTheme = () => {
        setThemeMode((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    const currentTheme = themeMode === "dark" ? darkTheme : theme;

    return (
        <ThemeContext.Provider
            value={{
                theme: themeMode,
                toggleTheme,
            }}
        >
            <StyledThemeProvider theme={currentTheme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}