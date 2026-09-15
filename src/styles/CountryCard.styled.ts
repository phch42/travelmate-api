import styled from "styled-components";

export const CountryCardWrapper = styled.article`
    overflow: hidden;

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.medium};
    box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const CountryImage = styled.img`
    display: block;

    width: 100%;
    height: 120px;

    object-fit: cover;
`;

export const CountryInfo = styled.div`
    padding: 10px;
`;

export const CountryName = styled.h3`
    display: flex;
    align-items: center;
    gap: 6px;

    margin: 0 0 4px;

    color: ${({ theme }) => theme.colors.navy};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
`;

export const CountryDescription = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
    line-height: 1.35;
`;

export const CountryFlag = styled.img`
    width: 20px;
    height: 14px;

    object-fit: cover;
    border-radius: 2px;
`;