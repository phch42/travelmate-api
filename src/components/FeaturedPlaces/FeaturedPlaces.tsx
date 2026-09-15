import AttractionCard from "../AttractionCard/AttractionCard";
import { useFetch } from "../../hooks/useFetch";
import { useLanguage } from "../../contexts/LanguageContext";
import type {
    Attraction,
    AttractionListItem,
    City,
} from "../../types/travel";
import {
    PlacesGrid,
    SectionHeader,
    SectionTitle,
    ViewAllLink,
} from "../../styles/FeaturedPlaces.styled";

function FeaturedPlaces() {
    const { selectedLanguage } = useLanguage();

    const { data: attractions } = useFetch<AttractionListItem[]>(
        "http://localhost:4000/api/attractions"
    );

    const { data: cities } = useFetch<City[]>(
        "http://localhost:4000/api/cities"
    );

    const featuredAttractions = attractions?.slice(0, 5) ?? [];

    const attractionUrls = featuredAttractions.map(
        (attraction) =>
            `http://localhost:4000/api/attractions/${attraction.id}`
    );

    const { data: attractionDetails } =
        useFetch<Attraction>(attractionUrls);

    const categories = [
        {
            name: "Historical",
            variant: "yellow" as const,
        },
        {
            name: "Museum",
            variant: "purple" as const,
        },
        {
            name: "Park",
            variant: "green" as const,
        },
        {
            name: "Attraction",
            variant: "blue" as const,
        },
        {
            name: "Landmark",
            variant: "red" as const,
        },
    ];

    return (
        <section>
            <SectionHeader>
                <SectionTitle>Featured Places</SectionTitle>

                <ViewAllLink to="/places">
                    View all
                </ViewAllLink>
            </SectionHeader>

            <PlacesGrid>
                {featuredAttractions.map((attraction, index) => {
                    const details = attractionDetails?.[index];

                    const attractionInfo = details?.infos.find(
                        (info) =>
                            info.languageId ===
                            selectedLanguage?.id
                    );

                    const city = cities?.find(
                        (city) =>
                            city.id === attraction.cityId
                    );

                    const cityInfo = city?.infos.find(
                        (info) =>
                            info.languageId ===
                            selectedLanguage?.id
                    );

                    const category = categories[index];

                    return (
                        <AttractionCard
                            key={attraction.id}
                            name={
                                attractionInfo?.name ??
                                attraction.slug
                            }
                            city={cityInfo?.name ?? ""}
                            category={category.name}
                            categoryVariant={category.variant}
                            image={`http://localhost:4000${attraction.image}`}
                        />
                    );
                })}
            </PlacesGrid>
        </section>
    );
}

export default FeaturedPlaces;