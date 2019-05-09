import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const loggedUser = {
    token: localStorage.getItem( 'token' ),
    // token: "token",
    user: JSON.parse( localStorage.getItem("user") )
    // user: {
    //     "username": localStorage.getItem("username"),
    //     "firstname": localStorage.getItem("firstname"),
    //     "lastname": localStorage.getItem("lastname"),
    //     "email": localStorage.getItem("email"),
    //     "role": JSON.parse(localStorage.getItem("role"))
        
    // }
    // user: {
    //     "username": "mpazarlis",
    //     "firstname": "Mike",
    //     "lastname": "lastname",
    //     "email": "email",
    //     "role": "role"
    //     }
}

ReactDOM.render(<App loggedUser = { loggedUser } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
