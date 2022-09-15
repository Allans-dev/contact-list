import { useEffect, useState } from "react";

import ContactView from "./ContactView";

import "./App.css";

function App() {
  const [contactList, setContactList] = useState([]);

  async function getContacts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setContactList(json);
    return json;
  }

  useEffect(() => {
    try {
      getContacts();
    } catch {
      throw Error("error in obtaining contacts");
    }
  }, []);

  return (
    <main className="App">
      {contactList.map((value, index) => (
        <ContactView detail={value} index={index} key={index} />
      ))}
    </main>
  );
}

export default App;
