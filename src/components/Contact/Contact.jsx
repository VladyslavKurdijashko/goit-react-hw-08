import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
    toast.success("Your contact deleted successfully", { duration: 1500 });
  };

  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfo}>
        <FaUser className={css.icon} />
        <h3 className={css.contactName}>{name}</h3>
      </div>
      <div className={css.contactInfo}>
        <FaPhoneAlt className={css.icon} />
        <p className={css.contactNumber}>{number}</p>
      </div>
      <button className={css.deleteBtn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
