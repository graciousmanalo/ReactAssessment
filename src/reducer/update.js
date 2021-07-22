// import axios from 'axios';

const UPDATE_CONTACT = 'UPDATE_CONTACT';

export default (state = {
    userList: []
}, action) => {
    switch (action.type) {
        case UPDATE_CONTACT:
            return state = {
                ...state,
                userList: [...state.userList, action.payload]
            }

        default:
            return state;
    }
}

//this is an action creator
const updateContactSuccess = (user) => ({
    type: UPDATE_CONTACT,
    payload: user
})

//this is a network request and dispatch the onSuccess callback
export const updateContacts = (updatedContact) => (dispatch) => {
    console.log(updatedContact, 'YYYYYYY');
    // axios.post('https://contact-list-app-d6235-default-rtdb.firebaseio.com/Contacts.json', newContact).then(response => {
    //     console.log(response);
    // })
}