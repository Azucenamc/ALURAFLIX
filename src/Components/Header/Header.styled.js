import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  &.active button {
    background:rgba(87, 10, 76, 0.9);
    border: 0.125rem solidrgb(148, 156, 241);
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }
`;

export const Logo = styled.img`
  height: 3.125rem;
  margin-right: 2rem;
`;

export const Nav = styled.nav`
  box-shadow: 0px 0px 0.75rem 0.25remrgb(40, 54, 71);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
