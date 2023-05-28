import { HiCamera } from "react-icons/hi";
import styled from "styled-components";
import { CustomButton } from "../../global.styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  font-size: ${(p) => p.theme.fontSizes.l};
`;

export const InfoSpan = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colors.additional};
`;
export const Alert = styled(InfoSpan)`
  color: #ba0606;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 4px 5px;

  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.s};

  transition: background ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    outline: none;
    background: ${(p) => p.theme.colors.border};
  }
`;

export const TextArea = styled.textarea`
  display: block;
  margin-top: 5px;
  padding: 4px 5px;
  height: 70px;

  resize: none;

  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.s};

  transition: background ${(p) => p.theme.transitions.normal};

  &:hover,
  &:focus {
    outline: none;
    background: ${(p) => p.theme.colors.border};
  }
`;

export const AddImgLabel = styled(Label)`
  position: relative;
  flex-direction: row;
  // width: 230px;
  margin: 0 auto 20px;
  padding: 10px;

  cursor: pointer;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.additional};

  transition: scale ${(p) => p.theme.transitions.normal};

  &:hover {
    scale: 1.05;
  }
`;

export const AddImgInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const AddImgIcon = styled(HiCamera)`
  width: 20px;
  height: 20px;
  margin-left: 5px;

  fill: ${(p) => p.theme.colors.additional};

  transition: scale ${(p) => p.theme.transitions.normal};

  ${AddImgLabel}:hover & {
    scale: 1.05;
  }
`;

export const AddHeroBtn = styled(CustomButton)`
  width: 100px;
  margin: 0 auto;
`;
