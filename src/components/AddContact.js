import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { toast } from "react-toastify";
import * as duck from "../reducer/new";

import "../style.css";

const AddContact = ({ contacts, addNewContacts, resetContact}) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const addContactHandler = (event) => {
    event.preventDefault();
    const checkContactNameExists = contacts.filter((contact) =>
      contact.name === name ? contact : null
    );
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone ? contact : null
    );

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactNameExists.length > 0) {
      return toast.error("This name already exists!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }

    const data = {
          id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
          email,
          name,
          phone,
    };

    addNewContacts(data);
    toast.success("Contact added successfully!!");
    setEmail("");
    setName("");
    setPhone("");


  };

  return (
    <div className="row">
      <div className="col-md-6 p-5 mx-auto ">
        <form onSubmit={addContactHandler}>
          <div class="mb-3">
            <h3 className="headings">Name</h3>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div class="mb-3">
            <h3 className="headings">Email</h3>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div class="mb-3">
            <h3 className="headings">Contact</h3>
            <input
              className="form-control"
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div>
            <input
              className="btn btn-block btn-dark mr-1"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.addReducer
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(duck, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddContact);



