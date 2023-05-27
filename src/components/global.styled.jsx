import styled from "styled-components";

export const Section = styled.section`
  padding: 30px 0;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const CustomButton = styled.button`
  padding: 5px 10px;
  border-radius: ${(p) => p.theme.radii.s};

  background: ${(p) => p.theme.gradients.main};
  color: ${(p) => p.theme.colors.white};

  transition: scale ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export const Title1 = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;