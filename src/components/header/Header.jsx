import { Logo } from "../common/logo/Logo.jsx";
import { Navigation } from "../common/navigation/Navigation.jsx";
import { HeaderContainer, HeaderSection } from "./header.styled.jsx";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </HeaderSection>
  );
};
