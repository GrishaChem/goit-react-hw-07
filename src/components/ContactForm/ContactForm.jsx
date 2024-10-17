import { Field, Form, Formik } from "formik";
import React, { useId } from "react";
import s from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters")
      .required("Number is required"),
  });

  const handleSubmit = (valuess, options) => {
    dispatch(addContact(valuess));
    options.resetForm();
  };

  const id = useId();
  return (
    <div className={s.container}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label htmlFor="">
              <p>Name</p>
              <Field name="name" id={id}></Field>
              {errors.name && touched.name ? (
                <div className={s.error}>{errors.name}</div>
              ) : null}
            </label>
            <label htmlFor="">
              <p>Number</p>
              <Field name="number" id={id}></Field>
              {errors.number && touched.number ? (
                <div className={s.error}>{errors.number}</div>
              ) : null}
            </label>
            <button type="submit" className={s.button}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
