import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const HeroesBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeroesInputContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;

export const HeroesInput = styled.input`
  padding: 4px 5px 4px 22px;
  height: 100%;
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

export const AddBtn = styled.button`
  // display: block;
  // margin-left: auto;
  padding: 5px 10px;
  border-radius: ${(p) => p.theme.radii.s};

  background: ${(p) => p.theme.gradients.main};
  color: ${(p) => p.theme.colors.white};

  transition: color ${(p) => p.theme.transitions.normal},
    scale ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    scale: 1.05;
    color: ${(p) => p.theme.colors.accent};
  }
`;
