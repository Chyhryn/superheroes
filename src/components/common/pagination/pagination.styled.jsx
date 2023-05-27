import styled from "styled-components";
import { CustomButton } from "../../global.styled";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(CustomButton)`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 5px;
  }

  text-align: center;
`;
