import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 10px 0;
  color: ${(p) => p.theme.colors.white};

  transition: color ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;
