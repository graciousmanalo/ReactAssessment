// import initialContacts from "../components/Contacts";
// import axios from 'axios';


//   export const contactReducer = (state = initialContacts, action) => {
//     switch (action.type) {
//       case "ADD_CONTACT":
//         state = [...state, action.payload];
//         return state;
//       case "DELETE_CONTACT":
//         const contactFilter = state.filter((contact) =>
//           contact.id === action.payload ? null : contact
//         );
//         state = contactFilter;
//         return state;
//       case "VIEW_CONTACT":
//         const contactView = state.filter((contact) =>
//           contact.id === action.payload.id
//             ? Object.assign(contact, action.payload)
//             : contact
//         );
//         state = contactView;
//         return state;
//       case "UPDATE_CONTACT":
//         const contactUpdate = state.filter((contact) =>
//           contact.id === action.payload.id
//             ? Object.assign(contact, action.payload)
//             : contact
//         );
//         state = contactUpdate;
//         return state;
//       case "RESET_CONTACT":
//         state = [{ name: null, email: null, phone: null }];
//         return state;
//       default:
//         return state;
//     }
//   };
  
//   export default contactReducer;


  