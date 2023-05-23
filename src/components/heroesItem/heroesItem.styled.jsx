import styled from "styled-components";

export const Item = styled.li`
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.m};
  box-shadow: ${(p) => p.theme.colors.border} 0px 6px 12px;

  transition: scale ${(p) => p.theme.transitions.normal};

  &:hover {
    scale: 1.05;
  }
`;

export const HeroImgWrapper = styled.div`
  width: 194px;
  height: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background: ${(p) => p.theme.colors.border};
`;

export const HeroTitle = styled.p`
  padding: 5px;
  text-align: center;
`;
