import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    margin: 16px auto 8px;
`;

export const SectionTitle = styled.h2`
    margin: 0;

    color: ${({ theme }) => theme.colors.navy};
    font-size: 14px;
    font-weight: 700;
`;

export const ViewAllLink = styled(Link)`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 10px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const CountriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;

    max-width: 1200px;
    margin: 0 auto;
`;