import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { AddContact } from "./components/AddContact";
import ContactList from "./components/Contactlist";
import { uuid } from "uuidv4";

function App() {
  const LOCAL_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuid(),...contact}]);
    console.log(contact);
  };

  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (retrieveContact) {
      setContacts(retrieveContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id)=>{
    const  newContactList = contacts.filter(contact=> contact.id !==id);
    setContacts(newContactList)

  }


  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
