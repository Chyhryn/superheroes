import { useLocation } from "react-router-dom";
import { Nav, NavItem } from "./navigation.styled";

export const Navigation = () => {
  const location = useLocation();
  return (
    <Nav>
      <NavItem to="/" state={{ from: location }}>
        Home
      </NavItem>
    </Nav>
  );
};
