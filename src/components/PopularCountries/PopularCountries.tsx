import CountryCard from "../CountryCard/CountryCard";
import {
    CountriesGrid,
    SectionHeader,
    SectionTitle,
    ViewAllLink,
} from "../../styles/PopularCountries.styled";

function PopularCountries() {
    return (
        <section>
            <SectionHeader>
                <SectionTitle>Popular Countries</SectionTitle>

                <ViewAllLink to="/countries">
                    View all
                </ViewAllLink>
            </SectionHeader>

            <CountriesGrid>
                <CountryCard
                    name="Italy"
                    description="Historic cities, great food and beautiful coastlines."
                    flag="🇮🇹"
                />

                <CountryCard
                    name="France"
                    description="Art, culture, charming cities and unforgettable cuisine."
                    flag="🇫🇷"
                />

                <CountryCard
                    name="Spain"
                    description="Sunny beaches, vibrant cities and rich traditions."
                    flag="🇪🇸"
                />

                <CountryCard
                    name="Denmark"
                    description="Scandinavian design, cozy cities and beautiful nature."
                    flag="🇩🇰"
                />

                <CountryCard
                    name="Germany"
                    description="Historic landmarks, modern cities and stunning landscapes."
                    flag="🇩🇪"
                />
            </CountriesGrid>
        </section>
    );
}

export default PopularCountries;