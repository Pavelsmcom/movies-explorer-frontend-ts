import successAuth from "../../images/success.png";
import failAuth from "../../images/fail.png";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

interface InfoTooltipProps {
  isOpen: boolean;
  onClose: () => void;
  serverResponseStatus: { status: boolean; text: string };
}

function InfoTooltip({ isOpen, onClose, serverResponseStatus }: InfoTooltipProps) {
  return (
    <PopupWithForm name="successAuth" isOpen={isOpen} onClose={onClose}>
      <img
        className="popup__image"
        src={serverResponseStatus.status ? successAuth : failAuth}
        alt="изображение ответа от сервера"
      />
      <p className="popup__text"> {serverResponseStatus.text}</p>
    </PopupWithForm>
  );
}

export default InfoTooltip;
