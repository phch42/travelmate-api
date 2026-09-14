import {
    CountryCardWrapper,
    CountryDescription,
    CountryFlag,
    CountryInfo,
    CountryName,
} from "../../styles/CountryCard.styled";

type CountryCardProps = {
    name: string;
    description: string;
    flag: string;
};

function CountryCard({
    name,
    description,
    flag,
}: CountryCardProps) {
    return (
        <CountryCardWrapper>
            <CountryFlag aria-label={`${name} flag`}>
                {flag}
            </CountryFlag>

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