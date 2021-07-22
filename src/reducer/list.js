/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const GET_ALL_USERS = 'GET_ALL_USERS';
const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';

export default (state = {
    userList: []
}, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return state = {
                ...state,
                userList: action.payload
            }

        case ADD_NEW_CONTACT:
            return state = {
                ...state,
                userList: [...state.userList, action.payload]
            }

        case UPDATE_CONTACT:
        return state = {
            ...state,
            userList: [...state.userList, action.payload]
        } 

        case DELETE_CONTACT: 
            return state = {
                ...state,
                userList: state.userList.filter(x => x.id !== action.payload)
        }


        default:
            return state;
    }
}

//this is an action creator
const getAllUserSuccess = (userList) => ({
    type: GET_ALL_USERS,
    payload: userList
})

const addNewContactSuccess = (user) => ({
    type: ADD_NEW_CONTACT,
    payload: user
})

const updateContactSuccess = (user) => ({
    type: UPDATE_CONTACT,
    payload: user
})

// const deleteContactSuccess = (key) => ({
//     type: DELETE_CONTACT,
//     payload: key
// })


//this is a network request and dispatch the onSuccess callback
export const getAllUser = () => (dispatch) => {
    axios.get('https://contact-list-app-d6235-default-rtdb.firebaseio.com/Contacts.json').then(response => {
        const data = [];

        // Object.keys(response.data).map((key) => {
        //     data.push({
        //         id: key,
        //         name: response.data[key].name,
        //         email: response.data[key].email,
        //         phone: response.data[key].phone,
        //     })
        // });

        if(response.data) {
            Object.keys(response.data).map((key) => {
            data.push({
                id:key,
                name:response.data[key].name,
                email:response.data[key].email,
                phone:response.data[key].phone,
            })
        });
    }
        dispatch(getAllUserSuccess(data))

    })
}


export const addNewContacts = (newContact) => (dispatch) => {
    console.log(newContact, 'XXXXXXXXXXXXXXXXX');
    axios.post('https://contact-list-app-d6235-default-rtdb.firebaseio.com/Contacts.json', newContact).then(response => {

        dispatch(addNewContactSuccess(newContact));
    })
}

export const updateContacts = (updatedContact) => (dispatch) => {
    console.log(updatedContact, 'YYYYYYY');
    axios.put('https://contact-list-app-d6235-default-rtdb.firebaseio.com/Contacts.json', updatedContact).then(response => {

        dispatch(updateContactSuccess(updatedContact));
    })
}

const deleteContactSuccess = (selectedId) => ({
    type: DELETE_CONTACT,
    payload: selectedId
})
export const deleteContact = (selectedId) => (dispatch) => {
    axios.delete(`https://contact-list-app-d6235-default-rtdb.firebaseio.com/Contacts/${selectedId}.json`)
    .then(response => {
        dispatch(deleteContactSuccess(selectedId));
        console.log(response.data);
    })
}

// export const deleteContact = (deletedContact) => (dispatch) => {
//     console.log(deletedContact, 'ZZZZZZZ');
//     axios.delete('https://contact-list-app-d6235-default-rtdb.firebaseio.com/Contacts.json', deletedContact).then(response => {
    
//         dispatch(deleteContactSuccess(deletedContact));
//     })
// }