import styled from "styled-components";
import { Container } from "../global.styled.jsx";

export const HeaderSection = styled.header`
  background: ${(p) => p.theme.gradients.main};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
