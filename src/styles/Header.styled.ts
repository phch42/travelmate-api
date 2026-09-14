import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
    height: 40px;
    background: ${({ theme }) => theme.colors.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    display: flex;
    align-items: center;
    justify-content: center;
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