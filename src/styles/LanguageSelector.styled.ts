import styled from "styled-components";

export const LanguageSelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 5px 7px;

    color: ${({ theme }) => theme.colors.muted};

    font-size: 9px;
`;

export const LanguageOption = styled.select`
    padding: 0;

    border: none;
    outline: none;

    background: transparent;

    color: ${({ theme }) => theme.colors.text};
    font-family: inherit;
    font-size: 9px;
    font-weight: 600;

    appearance: none;
    cursor: pointer;

    option {
        background: ${({ theme }) => theme.colors.surface};
        color: ${({ theme }) => theme.colors.text};
    }
`;