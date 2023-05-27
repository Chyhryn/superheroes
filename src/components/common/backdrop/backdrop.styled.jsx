import styled from "styled-components";

export const BackdropBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  opacity: 0.25;
  visibility: visible;

  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.black};

  transition: opacity ${(p) => p.theme.transitions.normal},
    visibility ${(p) => p.theme.transitions.normal};
`;
