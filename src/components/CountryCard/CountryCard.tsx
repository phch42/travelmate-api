import {
    CountryCardWrapper,
    CountryDescription,
    CountryImage,
    CountryInfo,
    CountryName,
} from "../../styles/CountryCard.styled";

type CountryCardProps = {
    name: string;
    description: string;
    image: string;
};

function CountryCard({
    name,
    description,
    image,
}: CountryCardProps) {
    return (
        <CountryCardWrapper>
            <CountryImage
                src={`http://localhost:4000${image}`}
                alt={`${name} flag`}
            />

            <CountryInfo>
                <CountryName>{name}</CountryName>

                <CountryDescription>
                    {description}
                </CountryDescription>
            </CountryInfo>
        </CountryCardWrapper>
    );
}

export default CountryCard;