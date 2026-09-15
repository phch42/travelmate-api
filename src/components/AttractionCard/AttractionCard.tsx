import { Heart } from "lucide-react";
import {
    AttractionCardWrapper,
    AttractionCategory,
    AttractionFavorite,
    AttractionImage,
    AttractionInfo,
    AttractionLocation,
    AttractionName,
} from "../../styles/AttractionCard.styled";

type AttractionCardProps = {
    name: string;
    city: string;
    category: string;
    categoryVariant: "yellow" | "purple" | "green" | "blue" | "red";
    image: string;
};

function AttractionCard({
    name,
    city,
    category,
    categoryVariant,
    image,
}: AttractionCardProps) {
    return (
        <AttractionCardWrapper>
            <AttractionImage
                src={image}
                alt={name}
            />

            <AttractionFavorite aria-hidden="true">
                <Heart size={14} />
            </AttractionFavorite>

            <AttractionInfo>
                <AttractionName>
                    {name}
                </AttractionName>

                <AttractionLocation>
                    {city}
                </AttractionLocation>

                <AttractionCategory $variant={categoryVariant}>
                    {category}
                </AttractionCategory>
            </AttractionInfo>
        </AttractionCardWrapper>
    );
}

export default AttractionCard;