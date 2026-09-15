import CountryCard from "../CountryCard/CountryCard";
import { useFetch } from "../../hooks/useFetch";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Country } from "../../types/travel";
import {
    CountriesGrid,
    SectionHeader,
    SectionTitle,
    ViewAllLink,
} from "../../styles/PopularCountries.styled";

function PopularCountries() {
    const { selectedLanguage, translations } =
        useLanguage();

    const { data: countries } = useFetch<Country[]>(
        "http://localhost:4000/api/countries"
    );

    return (
        <section>
            <SectionHeader>
                <SectionTitle>
                    {translations.sections.popularCountries}
                </SectionTitle>

                <ViewAllLink to="/countries">
                    {translations.sections.viewAll}
                </ViewAllLink>
            </SectionHeader>

            <CountriesGrid>
                {countries?.slice(0, 5).map((country) => {
                    const info = country.infos.find(
                        (info) =>
                            info.languageId ===
                            selectedLanguage?.id
                    );

                    return (
                        <CountryCard
                            key={country.id}
                            name={info?.name ?? ""}
                            description={
                                info?.description ?? ""
                            }
                            image={country.image}
                            code={country.code}
                        />
                    );
                })}
            </CountriesGrid>
        </section>
    );
}

export default PopularCountries;