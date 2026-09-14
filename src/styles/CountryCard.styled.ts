import styled from "styled-components";

export const CountryCardWrapper = styled.article`
    display: flex;
    align-items: center;
    gap: 10px;

    min-height: 88px;
    padding: 10px;

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.medium};
    box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const CountryImage = styled.img`
    width: 58px;
    height: 58px;

    flex-shrink: 0;

    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.small};
`;

export const CountryInfo = styled.div`
    min-width: 0;
`;

export const CountryName = styled.h3`
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