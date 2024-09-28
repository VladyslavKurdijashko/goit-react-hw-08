import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { toast } from "react-hot-toast";

const UserMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleLogout() {
    try {
      await dispatch(apiLogout());
      toast.success("You have logged out successfully.");
    } catch (error) {
      toast.error(`An error occurred during logout: ${error.message}`);
    } finally {
      closeModal();
    }
  }

  return (
    <div className={css.wrapper}>
      <div className={css.userInfo}>
        <h3 className={css.userName}>{user.name}</h3>
        <p className={css.userEmail}>{user.email}</p>
      </div>

      <button className={css.logoutButton} type="button" onClick={openModal}>
        Log Out
      </button>

      <ModalWindow
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        onConfirm={handleLogout}
        onCancel={closeModal}
      >
        <p>Are you sure you want to log out?</p>
      </ModalWindow>
    </div>
  );
};

export default UserMenu;
