import { useLanguage } from "../../contexts/LanguageContext";
import {
    HeroContent,
    HeroDecoration,
    HeroSection,
    HeroSubtitle,
    HeroTitle,
    SearchButton,
    SearchForm,
    SearchInput,
} from "../../styles/Hero.styled";

function Hero() {
    const { translations } = useLanguage();

    return (
        <HeroSection>
            <HeroContent>
                <HeroTitle>
                    {translations.hero.title}
                    <br />
                    {translations.hero.titleLineTwo}
                </HeroTitle>

                <HeroSubtitle>
                    {translations.hero.subtitle}
                    <br />
                    {translations.hero.subtitleLineTwo}
                </HeroSubtitle>

                <SearchForm>
                    <SearchInput
                        type="text"
                        placeholder={
                            translations.hero.searchPlaceholder
                        }
                    />

                    <SearchButton type="submit">
                        {translations.hero.searchButton}
                    </SearchButton>
                </SearchForm>
            </HeroContent>

            <HeroDecoration>
                <span>{translations.hero.decorationOne}</span>
                <span>{translations.hero.decorationTwo}</span>
            </HeroDecoration>
        </HeroSection>
    );
}

export default Hero;