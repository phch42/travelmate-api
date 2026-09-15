import { ChevronRight, MapPin } from "lucide-react";
import {
    CityArrow,
    CityCardWrapper,
    CityImage,
    CityInfo,
    CityLocation,
    CityName,
} from "../../styles/CityCard.styled";

type CityCardProps = {
    name: string;
    country: string;
    image: string;
};

function CityCard({
    name,
    country,
    image,
}: CityCardProps) {
    return (
        <CityCardWrapper>
            <CityImage
                src={`http://localhost:4000${image}`}
                alt={name}
            />

            <CityInfo>
                <CityName>{name}</CityName>

                <CityLocation>
                    <MapPin size={10} />
                    {country}
                </CityLocation>
            </CityInfo>

            <CityArrow aria-hidden="true">
                <ChevronRight size={14} />
            </CityArrow>
        </CityCardWrapper>
    );
}

export default CityCard;