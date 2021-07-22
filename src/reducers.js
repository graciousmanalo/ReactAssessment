import { combineReducers } from 'redux';
import contactsReducer from './reducer/list';
import addReducer from './reducer/new';
import updateReducer from './reducer/update';


const appReducer = combineReducers({
    contactsReducer,
    addReducer,
    updateReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;