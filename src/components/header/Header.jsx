import { Container } from "../global.styled.jsx";
import { Logo } from "../logo/Logo.jsx";
import { HeaderSection } from "./header.styled.jsx";

export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Logo />
      </Container>
    </HeaderSection>
  );
};
