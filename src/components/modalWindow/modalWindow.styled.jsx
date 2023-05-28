import styled from "styled-components";
import { HiX } from "react-icons/hi";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  opacity: 1;
  visibility: visible;
  overflow-y: scroll;

  max-height: 96%;

  padding: 30px 20px;
  border-radius: ${(p) => p.theme.radii.m};
  transform: translate(-50%, -50%) scale(1);

  background: ${(p) => p.theme.colors.white};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color ${(p) => p.theme.transitions.normal};
  color: ${(p) => p.theme.colors.black};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.additional};
  }
`;

export const CloseBtnIcon = styled(HiX)`
  width: 18px;
  height: 18px;
  fill: currentColor;
`;
