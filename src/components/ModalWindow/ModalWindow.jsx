import css from "./ModalWindow.module.css";
import PropTypes from "prop-types";

const ModalWindow = ({ modalIsOpen, onConfirm, onCancel, children }) => {
  if (!modalIsOpen) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        {children}
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWindow;
