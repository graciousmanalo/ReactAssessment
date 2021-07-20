
import { createStore } from 'redux';
import contactReducer from '../reducer/index';

export default function store(initialContacts) {
  return createStore(contactReducer, initialContacts);
}


