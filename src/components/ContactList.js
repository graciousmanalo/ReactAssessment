import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import AddContact from "./AddContact";
import * as duck from '../reducer/list';


function ContactList(props) {
  const { userList, actions: { getAllUser, addNewContacts, deleteContact } } = props;

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="row d-flex flex-column">
      <AddContact contacts={userList} addNewContacts={addNewContacts}/>   
      <div className="col-md-10 mx-auto my-4 text">
        <table className="table table-hover">
          <thead className="table-header bg-dark text-white">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 ? (
              userList.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Link
                      to={`/view/${contact.id}`}
                      className="btn btn-sm btn-success mr-1"
                    >
                      View
                    </Link>
                    <Link
                      to={`/update/${contact.id}`}
                      className="btn btn-sm btn-primary mr-1"
                    >
                      Update
                    </Link>

                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-sm btn-danger mr-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>No contacts found</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return state.contactsReducer
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(duck, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
