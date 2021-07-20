import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddContact from "./AddContact";

const contactList = ({ contacts, deleteContact }) => {

  return (
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-light ">
          <AddContact />
        </Link>       
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
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>   
                      <Link  
                            to={`/view${contact.id}`}
                            className="btn btn-sm btn-success mr-1"
                      >
                        View
                      </Link>
                      <Link  
                            to={`/update${contact.id}`}
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
};

const mapStateToProps = (state) => ({
  contacts: state,
});


const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(contactList);
