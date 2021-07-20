import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import initialContacts from "./Contacts";
import ContactList from "./ContactList";


  const ViewContact = () => {
    const history = useHistory();

    const contactsList = initialContacts.map((contact) => (
      <ContactList
        id={contact.id}
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
      />  
    ));
 
  return (
    <div>
      <ul>
        {contactsList}
        {/* <li><h5>ID:</h5> {id}</li>
        <li><h5>Name:</h5> {name}</li>
        <li><h5>Email:</h5> {email}</li>
        <li><h5>Phone:</h5> {phone}</li> */}
      </ul>

      <button
          type="button"
          className="btn btn-primary mr-1"
          onClick={() => history.push("/")}
          >
            Back
          </button>
    </div>
  );
};

  const mapStateToProps = (state) => ({
    contact: state,
  });
    
  const mapDispatchToProps = (dispatch) => ({ viewContact: (id) => {
    dispatch({ type: "VIEW_CONTACT", payload: id });
    },
  });
    
  export default connect(mapStateToProps, mapDispatchToProps)(ViewContact);
