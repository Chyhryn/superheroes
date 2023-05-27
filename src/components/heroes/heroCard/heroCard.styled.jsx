import styled from "styled-components";
import { CustomButton, Title1 } from "../../global.styled";
import { HiTrash, HiX, HiPencil } from "react-icons/hi";
import { AddImgIcon } from "../heroForm/heroForm.styled";

export const HeroContainer = styled.div`
  display: flex;
`;

export const HeroImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;
export const HeroImgBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  height: 392px;
`;

export const AddHeroImgBtn = styled(CustomButton)`
  display: flex;
  align-items: center;
  width: 118px;
  margin-left: 23%;
`;

export const AddHeroImgIcon = styled(AddImgIcon)`
  fill: currentColor;
`;

export const HeroActiveImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 392px;
  margin-right: 15px;

  overflow: hidden;
  border-radius: ${(p) => p.theme.radii.m};
`;

export const HeroActiveImg = styled.img`
  object-fit: contain;
  cursor: pointer;
`;

export const HeroImgList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  overflow-y: auto;
  width: 110px;
`;

export const HeroImgItem = styled.li`
  position: relative;
  width: 110px;
  height: 110px;

  overflow: hidden;
  border-radius: ${(p) => p.theme.radii.m};
`;

export const HeroImg = styled.img`
  object-fit: contain;
  cursor: pointer;
`;

export const HeroInfoWrapper = styled.div`
  position: relative;
  width: 700px;
`;

export const HeroTitle = styled(Title1)`
  display: flex;
  align-items: center;
  text-align: left;
`;

export const HeroParagraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const HeroSpan = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: ${(p) => p.theme.fontWeights.m};
`;

export const HeroEditBtn = styled(CustomButton)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 6px;
  right: 0;
  z-index: 10;
`;

export const HeroBtnRihtSpan = styled.span`
  margin-left: 5px;
`;

export const IconBtn = styled(CustomButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  padding: 3px;
  width: 20px;
  height: 20px;

  border-radius: 50%;
  color: ${(p) => p.theme.colors.white};
`;

export const DelHeroBtn = styled(CustomButton)`
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.gradients.red};
`;

export const DelImgBtn = styled(CustomButton)`
  position: absolute;
  top: 15px;
  right: 3px;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  padding: 3px;

  border-radius: 50%;

  background: ${(p) => p.theme.colors.additional};

  color: ${(p) => p.theme.colors.white};

  transform: translateY(-50%);
`;

export const DelIcon = styled(HiTrash)`
  width: 18px;
  height: 18px;

  fill: currentColor;
`;

export const HeroEditIcon = styled(HiPencil)`
  width: 18px;
  height: 18px;

  fill: currentColor;
`;

export const HeroCloseEditIcon = styled(HiX)`
  width: 18px;
  height: 18px;

  fill: currentColor;
`;

export const SuperpowersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const SuperpowersItem = styled.li`
  padding: 4px 8px;
  margin: 5px;

  border-radius: 10px;

  background: ${(p) => p.theme.colors.additional};
  color: ${(p) => p.theme.colors.white};
`;
