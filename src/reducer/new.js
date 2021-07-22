/* eslint-disable import/no-anonymous-default-export */
// import axios from 'axios';

const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';

export default (state = {
    userList: []
}, action) => {
    switch (action.type) {
        case ADD_NEW_CONTACT:

            return state = {
                ...state,
                userList: [...state.userList, action.payload]
            }

        default:
            return state;
    }
}


const addNewContactSuccess = (user) => ({
    type: ADD_NEW_CONTACT,
    payload: user
})


export const addNewContacts = (newContact) => (dispatch) => {
    console.log(newContact, 'XXXXXXXXXXXXXXXXX');
    // axios.post('https://contact-list-app-d6235-default-rtdb.firebaseio.com/Contacts.json', newContact).then(response => {
    //     console.log(response);
    // })
}