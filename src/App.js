import { useEffect, useState } from "react";

import ContactView from "./ContactView";

import "./App.css";

function App() {
  const [contactList, setContactList] = useState([]);

  async function getContacts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();

    json.sort((a, b) => {
      let arrA = a.name.split(" ");
      let nameA = arrA[arrA.length - 1].toUpperCase();
      let arrB = b.name.split(" ");
      let nameB = arrB[arrB.length - 1].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setContactList(() => json);
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
      <article className="contact-container">
        <h1>Contacts</h1>
        {contactList.map((value, index) => (
          <ContactView detail={value} index={index} key={index} />
        ))}
      </article>
    </main>
  );
}

export default App;
