import React from "react";
import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterStr = useSelector(selectNameFilter);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filterStr.toLowerCase().trim())
  );
  return (
    <ul className={s.container}>
      {filteredData.map((contact) => (
        <li className="s.li" key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            deleteContact={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}

      {/* {contactList.map((contactItem) => (
        <li className="s.li" key={contactItem.id}>
          <Contact name={contactItem.name} number={contactItem.number} />
        </li>
      ))} */}
    </ul>
  );
};

export default ContactList;
