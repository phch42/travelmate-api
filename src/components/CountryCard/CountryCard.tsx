import {
    CountryCardWrapper,
    CountryDescription,
    CountryFlag,
    CountryImage,
    CountryInfo,
    CountryName,
} from "../../styles/CountryCard.styled";

type CountryCardProps = {
    name: string;
    description: string;
    image: string;
    code: string;
    flagCode?: string;
};

function CountryCard({
    name,
    description,
    image,
    code,
    flagCode,
}: CountryCardProps) {
    const shortDescription =
        description.length > 65
            ? `${description.slice(0, 65)}...`
            : description;

    return (
        <CountryCardWrapper>
            <CountryImage
                src={
                    image.startsWith("http")
                        ? image
                        : `http://localhost:4000${image}`
                }
                alt={name}
            />

            <CountryInfo>
                <CountryName>
                    <CountryFlag
                        src={`https://flagcdn.com/w40/${(
                            flagCode ?? code
                        ).toLowerCase()}.png`}
                        alt={`${name} flag`}
                    />
                    {name}
                </CountryName>

                <CountryDescription>
                    {shortDescription}
                </CountryDescription>
            </CountryInfo>
        </CountryCardWrapper>
    );
}

export default CountryCard;