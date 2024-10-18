import React, { useEffect } from "react";
import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";
import { selectFilter } from "../../redux/filtersSlice";
import { deleteContact, fetchContact } from "../../redux/contactsOps.js";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterStr = useSelector(selectFilter);
  const filteredData = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <ul className={s.container}>
      {filteredData.map((contact) => (
        <li className="s.li" key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            contact={contact}
            deleteContact={() => dispatch(deleteContact())}
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
