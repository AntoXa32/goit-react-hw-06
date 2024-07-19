import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getFilteredContacts = (contacts, valueOfFilter) =>
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(valueOfFilter)
  );

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const valueOfFilter = useSelector(selectNameFilter);
  const filteredContacts = getFilteredContacts(contacts, valueOfFilter);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, number, name }) => (
        <li key={id}>
          <Contact id={id} number={number} name={name} />
        </li>
      ))}
    </ul>
  );
}
