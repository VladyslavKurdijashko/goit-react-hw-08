import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}


ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
