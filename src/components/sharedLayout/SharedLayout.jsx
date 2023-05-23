import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Container, Section } from "../global.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
