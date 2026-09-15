import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
    LanguageOption,
    LanguageSelectorWrapper,
} from "../../styles/LanguageSelector.styled";

function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <LanguageSelectorWrapper>
            <Globe size={14} />

            <LanguageOption
                value={language}
                onChange={(event) =>
                    setLanguage(event.target.value as "en" | "da")
                }
            >
                <option value="en">EN</option>
                <option value="da">DA</option>
            </LanguageOption>

            <ChevronDown size={12} />
        </LanguageSelectorWrapper>
    );
}

export default LanguageSelector;