import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ContactList.module.css";
import { toast } from "react-hot-toast";

function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteContact(id));
      toast.success("Contact deleted successfully!");
    } catch {
      toast.error("Failed to delete contact");
    }
  };

  return (
    <ul className={css.contactListWrapper}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={() => handleDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
