import { Backdrop } from "../common/backdrop/Backdrop";
import { CloseBtn, CloseBtnIcon, ModalWrapper } from "./modalWindow.styled";
import ReactDOM from "react-dom";

export const ModalWindow = ({ open, onClose, fieldName = null, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <ModalWrapper>
        {children}
        <CloseBtn onClick={onClose}>
          <CloseBtnIcon />
        </CloseBtn>
      </ModalWrapper>
    </>,
    document.getElementById("portal-modal")
  );
};
