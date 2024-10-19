import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { nanoid } from "nanoid";
import { fetchContact } from "./redux/contactsOps.js";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/contactsSlice.js";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <h2>Loading...</h2>}
        {Error && <h2>Error...</h2>}
        <ContactList />
      </div>
    </>
  );
};

export default App;
