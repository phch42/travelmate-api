import styled from "styled-components";
import heroImage from "../assets/travelmate-hero.png";

export const HeroSection = styled.section`
    position: relative;

    min-height: 260px;

    display: flex;
    align-items: center;

    background-image:
        linear-gradient(
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.15)
        ),
        url(${heroImage});

    background-size: cover;
    background-position: center;

    overflow: hidden;
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0px;
`;

export const HeroTitle = styled.h1`
    margin: 0 0 6px;

    color: ${({ theme }) => theme.colors.navy};
    font-size: 30px;
    font-weight: 800;
    line-height: 1.05;
`;

export const HeroSubtitle = styled.p`
    margin: 0 0 14px;

    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
    line-height: 1.4;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;

    width: 370px;
    height: 31px;
`;

export const SearchInput = styled.input`
    flex: 1;

    height: 100%;
    padding: 0 10px;

    border: none;
    border-radius: 7px 0 0 7px;
    outline: none;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    font-family: inherit;
    font-size: 10px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.muted};
    }

    &:focus {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.blue};
    }
`;

export const SearchButton = styled.button`
    height: 100%;
    padding: 0 14px;

    border: none;
    border-radius: 0 7px 7px 0;

    background: ${({ theme }) => theme.colors.blue};
    color: #ffffff;

    font-family: inherit;
    font-size: 10px;
    font-weight: 600;

    cursor: pointer;

    transition: background-color 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.navy};
    }
`;

export const HeroDecoration = styled.div`
    position: absolute;
    right: calc((100% - 1200px) / 2);
    top: 50%;

    display: flex;
    flex-direction: column;

    color: #ffffff;
    font-size: 20px;
    font-style: italic;
    font-weight: 700;
    line-height: 1;
    text-align: right;

    transform: translateY(-50%) rotate(-6deg);
`;