import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";
import { useFetch } from "../hooks/useFetch";
import type { Language as ApiLanguage } from "../types/travel";

type Language = "en" | "da";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    selectedLanguage: ApiLanguage | undefined;
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
    const [language, setLanguage] =
        useState<Language>("en");

    const { data: languages } = useFetch<ApiLanguage[]>(
        "http://localhost:4000/api/languages"
    );

    const selectedLanguage = languages?.find(
        (item) => item.code === language
    );

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                selectedLanguage,
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