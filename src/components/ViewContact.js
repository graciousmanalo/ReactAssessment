import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";
import * as duck from '../reducer/list';


const ViewContact = (props) => {
  const history = useHistory();
  const selectedUserId = props.match.params.id;

  const { contact: { userList }, actions: { getAllUser } } = props;

  useEffect(() => {
    getAllUser();
  }, []);

  let newUserList = userList.filter(currentContact => currentContact.id === selectedUserId);

  return (
    <div class="container">
      {
        newUserList.map(contact => {
          return (
              <div class="row">
                <ul class="list-group">
                  <li class="list-group-item"><h5>ID:</h5> {contact.id}</li>
                  <li class="list-group-item"><h5>Name:</h5> {contact.name}</li>
                  <li class="list-group-item"><h5>Email:</h5> {contact.email}</li>
                  <li class="list-group-item"><h5>Phone:</h5> {contact.phone}</li>
                </ul>
              </div>
          )
        })
      }
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
  contact: state.contactsReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(duck, dispatch)
  }
}

// const mapDispatchToProps = (dispatch) => ({ viewContact: (id) => {
//   dispatch({ type: "VIEW_CONTACT", payload: id });
//   },
// });

export default connect(mapStateToProps, mapDispatchToProps)(ViewContact);
