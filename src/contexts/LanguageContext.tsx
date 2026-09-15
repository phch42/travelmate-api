import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "da";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<
    LanguageContextType | undefined
>(undefined);

type LanguageProviderProps = {
    children: ReactNode;
};

export function LanguageProvider({
    children,
}: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used within a LanguageProvider"
        );
    }

    return context;
}