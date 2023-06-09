import styled from "styled-components";
import { HiOutlinePlusSm, HiSearch } from "react-icons/hi";
import { CustomButton } from "../../global.styled";

export const HeroesBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeroesInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const HeroesInput = styled.input`
  height: 100%;
  margin-right: 5px;
  padding: 4px 5px 4px 22px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.s};

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(HiSearch)`
  position: absolute;
  top: 50%;
  left: 5px;

  transform: translateY(-50%);
  fill: ${(p) => p.theme.colors.border};
`;

export const HeroesAddBtn = styled(CustomButton)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const HeroesSearchBtn = styled(CustomButton)`
  // display: flex;
  // align-items: center;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const PlusIcon = styled(HiOutlinePlusSm)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: currentCollor;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-bottom: 25px;
`;

export const Notification = styled.p`
  text-align: center;
  padding: 20px 60px;
  font-size: 20px;
`;
