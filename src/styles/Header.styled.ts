import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
    height: 40px;
    background: ${({ theme }) => theme.colors.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
`;

export const Brand = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.colors.navy};
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;

    svg {
        color: ${({ theme }) => theme.colors.navy};
    }

    span span {
        color: ${({ theme }) => theme.colors.blue};
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 7px 13px;
    border-radius: ${({ theme }) => theme.radius.small};

    color: ${({ theme }) => theme.colors.navy};
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;

    transition:
        background-color 0.2s ease,
        color 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.blue};
    }

    &.active {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.blue};
    }
`;

export const ThemeToggle = styled.div`
    display: flex;
    align-items: center;

    padding: 2px;
    gap: 2px;

    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.small};
`;

export const ThemeOption = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 4px 7px;
    border: none;
    border-radius: 4px;

    background: ${({ theme, $active }) =>
        $active ? theme.colors.surface : "transparent"};

    color: ${({ theme, $active }) =>
        $active ? theme.colors.blue : theme.colors.muted};

    font-family: inherit;
    font-size: 9px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background-color 0.2s ease,
        color 0.2s ease;
`;