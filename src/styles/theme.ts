export const theme = {
    colors: {
        navy: "#12365A",
        blue: "#1769D5",
        lightBlue: "#EAF3FF",
        text: "#183A5C",
        muted: "#718096",
        background: "#F7FAFC",
        surface: "#FFFFFF",
        border: "#E4EBF2",
        green: "#DFF5E7",
        purple: "#EDE4FF",
        yellow: "#FFF2C7",
        pink: "#FFE3E5",
    },

    typography: {
        fontFamily: `
            Inter,
            Manrope,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif
        `,
    },

    radius: {
        small: "6px",
        medium: "8px",
    },

    shadows: {
        card: "0 2px 8px rgba(20, 50, 80, 0.10)",
    },
};

export const darkTheme = {
    ...theme,

    colors: {
        ...theme.colors,

        navy: "#E8F1F8",
        text: "#E8F1F8",
        muted: "#A8B6C4",
        background: "#101C2A",
        surface: "#172638",
        border: "#2A3B4D",
    },
};

export type Theme = typeof theme;