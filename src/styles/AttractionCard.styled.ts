import styled from "styled-components";

export const AttractionCardWrapper = styled.article`
    position: relative;

    overflow: hidden;

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.medium};
    box-shadow: ${({ theme }) => theme.shadows.card};

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(20, 50, 80, 0.14);
    }
`;

export const AttractionImage = styled.img`
    display: block;

    width: 100%;
    height: 120px;

    object-fit: cover;
`;

export const AttractionFavorite = styled.span`
    position: absolute;
    top: 8px;
    right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    background: ${({ theme }) => theme.colors.surface};
    border-radius: 50%;

    color: ${({ theme }) => theme.colors.muted};
    box-shadow: 0 1px 4px rgba(20, 50, 80, 0.15);
`;

export const AttractionInfo = styled.div`
    padding: 10px;
`;

export const AttractionName = styled.h3`
    margin: 0 0 4px;

    color: ${({ theme }) => theme.colors.navy};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
`;

export const AttractionLocation = styled.p`
    margin: 0 0 7px;

    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
    line-height: 1.2;
`;

export const AttractionCategory = styled.span<{
    $variant: "yellow" | "purple" | "green" | "blue" | "red";
}>`
    display: inline-block;

    padding: 3px 6px;

    border-radius: 4px;

    font-size: 8px;
    font-weight: 600;
    line-height: 1;

    background: ${({ theme, $variant }) => {
        switch ($variant) {
            case "yellow":
                return theme.colors.yellow;

            case "purple":
                return theme.colors.purple;

            case "green":
                return theme.colors.green;

            case "blue":
                return theme.colors.lightBlue;

            case "red":
                return theme.colors.pink;
        }
    }};

    color: ${({ theme, $variant }) => {
        switch ($variant) {
            case "yellow":
                return "#9A6B00";

            case "purple":
                return "#6B46C1";

            case "green":
                return "#287A45";

            case "blue":
                return theme.colors.blue;

            case "red":
                return "#C53030";
        }
    }};
`;