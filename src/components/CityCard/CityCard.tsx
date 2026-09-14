import { MapPin, ChevronRight } from "lucide-react";
import {
    CityCardWrapper,
    CityInfo,
    CityName,
    CityLocation,
    CityIcon,
    CityArrow,
} from "../../styles/CityCard.styled";

type CityCardProps = {
    name: string;
    country: string;
};

function CityCard({ name, country }: CityCardProps) {
    return (
        <CityCardWrapper>
            <CityInfo>
                <CityName>{name}</CityName>

                <CityLocation>
                    <CityIcon>
                        <MapPin size={10} />
                    </CityIcon>

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