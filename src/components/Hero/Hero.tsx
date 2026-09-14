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
    return (
        <HeroSection>
            <HeroContent>
                <HeroTitle>
                    Explore the World
                    <br />
                    with TravelMate
                </HeroTitle>

                <HeroSubtitle>
                   Discover countries, cities and amazing places around the world.
                   <br />
                   Your next adventure is just a click away.
                </HeroSubtitle>

                <SearchForm>
                    <SearchInput
                        type="text"
                        placeholder="Search for countries, cities or places..."
                    />

                    <SearchButton type="submit">
                        Search
                    </SearchButton>
                </SearchForm>
            </HeroContent>

            <HeroDecoration>
                <span>Good places</span>
                <span>Brighter days</span>
            </HeroDecoration>
        </HeroSection>
    );
}

export default Hero;