import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

  const UpdateContact = ({ contacts, updateContact }) => {
    const { id } = useParams();
    const history = useHistory();
    const currentContact = contacts.find(
      (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact);
    setEmail(currentContact);
    setPhone(currentContact);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const updateContactHandler = (event) => {
    event.preventDefault();
    const checkContactNameExists = contacts.filter((contact) =>
      contact.name === name && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone && contact.id !== currentContact.id
        ? contact
        : null
    );

     if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!");
    }
    if (checkContactNameExists.length > 0) {
      return toast.error("This name already exists!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!");
    }

      const data = {
      id: currentContact.id,
        name,
        email,
        phone,
    };

    updateContact(data);
    history.push("/");
    toast.success("Contact updated successfully!");
  }

return (
  <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={updateContactHandler}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Email"}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(UpdateContact);

