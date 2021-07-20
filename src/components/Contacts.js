// import React, { useEffect, useState } from "react";
// import addContact from "./AddContact";


const initialContacts = [
  { id: 1, name: "Test 2", email: "test1@test.com", phone: 1349589374 },
  { id: 2, name: "Test 2", email: "test2@test.com", phone: 7927357894 },
  { id: 3, name: "Test 3", email: "test3@test.com", phone: 8276156378 },
  { id: 4, name: "Test 4", email: "test4@test.com", phone: 4844783942 },

];

export default initialContacts;


// const InitialContacts = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const response = await fetch("https://contact-list-app-d6235-default-rtdb.firebaseio.com/contacts.json");
//       const responseData = await response.json();

//       const loadedContacts = [];

//       for (const key in responseData) {
//         loadedContacts.push({
//           id: key,
//           name: responseData[key].name,
//           email: responseData[key].email,
//           phone: responseData[key].phone,
//         });
//       }

//       setContacts(loadedContacts);

//       fetchContacts();
//     }
//   }, []);

//   const contactsList = contacts.map((contact) => (
//       <addContact
//         key={contact.id}
//         id={contact.id}
//         name={contact.name}
//         email={contact.email}
//         phone={contact.phone}
//         />
//   ));

//   return (
//     <div>
//         <ul>{contactsList}</ul>
//     </div>
//   )

// }

// export default InitialContacts;