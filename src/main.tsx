import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <StyledThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StyledThemeProvider>
        </ThemeProvider>
    </StrictMode>,
);