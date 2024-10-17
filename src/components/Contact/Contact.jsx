import React from "react";
import s from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ name, number, id, deleteContact }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.liI}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
