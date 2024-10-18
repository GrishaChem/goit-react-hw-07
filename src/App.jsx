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

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContact());
  // }, [dispatch]);

  const [contactList, setContactList] = useState(() => {
    const savedData = window.localStorage.getItem("contactList");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          return parsedData;
        }
      } catch (error) {
        console.error("Failed to parse localStorage data:", error);
      }
    }
    // Default data if no valid data is found in localStorage
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  const [inputValue, setInputValue] = useState("");

  const filtredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const deleteContact = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };

  const addContact = ({ number, name, id }) => {
    const newContact = {
      id: id,
      name: name,
      number: number,
    };
    setContactList([...contactList, newContact]);
  };

  console.log(contactList);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox />
        {isLoading && <h2>Loading...</h2>}
        {Error && <h2>Error...</h2>}
        {filtredContacts.length > 0 && (
          <ContactList
            contacts={filtredContacts}
            deleteContact={deleteContact}
          />
        )}
      </div>
    </>
  );
};

export default App;
