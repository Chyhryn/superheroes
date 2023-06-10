import styled from "styled-components";

export const Item = styled.li`
  padding: 10px;
  border-radius: ${(p) => p.theme.radii.m};
  box-shadow: ${(p) => p.theme.colors.border} 0px 2px 12px;
  cursor: pointer;

  transition: scale ${(p) => p.theme.transitions.normal};

  &:hover {
    scale: 1.05;
  }
`;

export const HeroImgWrapper = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const HeroImg = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

export const HeroTitle = styled.p`
  padding: 5px;
  text-align: center;
`;
