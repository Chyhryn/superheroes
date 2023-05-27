import { useLocation } from "react-router-dom";
import { NavItem } from "./navigation.styled";

export const Navigation = () => {
  const location = useLocation();
  return (
    <nav>
      <NavItem to="/" state={{ from: location }}>
        Home
      </NavItem>
    </nav>
  );
};
