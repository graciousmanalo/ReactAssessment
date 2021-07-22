import React from "react";
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import ViewContact from './components/ViewContact';
import UpdateContact from './components/UpdateContact';
import ContactList from './components/ContactList';
import PageNotFound from './components/PageNotFound';
import firebase from "firebase";


const App = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC0wwYxAS3ak_jQTNXWEHUJwSgkYyD1ZbU",
    authDomain: "contact-list-app-d6235.firebaseapp.com",
    databaseURL: "https://contact-list-app-d6235-default-rtdb.firebaseio.com/",
    projectId: "contact-list-app-d6235",
    storageBucket: "contact-list-app-d6235.appspot.com",
    messagingSenderId: "348207919093",
    appId: "1:348207919093:web:071a7f306c1b4881523abc",
    measurementId: "G-WX05XNL1NH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
           <ContactList />
        </Route>
        <Route exact path="/view/:id?" component={ViewContact} />
        <Route exact path="/update/:id?" component={EditContact} />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};
export default App;

