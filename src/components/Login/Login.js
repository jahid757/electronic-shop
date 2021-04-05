import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handelGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="d-flex align-content-center flex-wrap align-items-center flex-column">
            <h2 className="mb-5 pb-5">Login</h2>
            <button onClick={handelGoogleSignIn} className="mt-3 btn btn-danger px-4 py-2 text-center align-self-center"><i className="fab fa-google"></i> Continue With Google</button>
        </div>
    );
};

export default Login;