import React from "react";
import s from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

const Contact = ({ name, number, contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.liI}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => dispatch(deleteContact(contact))}>Delete</button>
    </div>
  );
};

export default Contact;
