import CityCard from "../CityCard/CityCard";
import {
    CitiesGrid,
    SectionHeader,
    SectionTitle,
    ViewAllLink,
} from "../../styles/PopularCities.styled";

function PopularCities() {
    return (
        <section>
            <SectionHeader>
                <SectionTitle>Popular Cities</SectionTitle>

                <ViewAllLink to="/cities">
                    View all
                </ViewAllLink>
            </SectionHeader>

            <CitiesGrid>
                <CityCard
                    name="Rome"
                    country="Italy"
                />

                <CityCard
                    name="Paris"
                    country="France"
                />

                <CityCard
                    name="Barcelona"
                    country="Spain"
                />

                <CityCard
                    name="Copenhagen"
                    country="Denmark"
                />

                <CityCard
                    name="Berlin"
                    country="Germany"
                />
            </CitiesGrid>
        </section>
    );
}

export default PopularCities;