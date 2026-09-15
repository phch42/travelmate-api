import styled from "styled-components";

export const CityCardWrapper = styled.article`
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

export const CityImage = styled.img`
    display: block;

    width: 100%;
    height: 120px;

    object-fit: cover;
`;

export const CityInfo = styled.div`
    padding: 10px;
`;

export const CityName = styled.h3`
    margin: 0 0 4px;

    color: ${({ theme }) => theme.colors.navy};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
`;

export const CityLocation = styled.p`
    display: flex;
    align-items: center;
    gap: 4px;

    margin: 0;

    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
    line-height: 1.2;
`;

export const CityArrow = styled.span`
    position: absolute;
    right: 10px;
    bottom: 10px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.muted};
`;