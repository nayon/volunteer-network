import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import googleIcon from '../../logos/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/register" } };

    // initializing firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // google sign in
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photo: photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    return (
        <div className="container text-center page-bg p-5">
            <Link to="/home"><img className='logo mx-5 pr-5' src={logo} alt="" /></Link>
            <div className="login-form border bg-white my-5 mx-auto d-flex justify-content-center align-items-center">
                <div>
                    <h3>Login With</h3>
                    <p onClick={handleGoogleSignIn} className='google-sign-in mt-5'><img src={googleIcon} alt="" /><span className='login-text'>Continue with Google</span></p>
                    <p>Don't have an account? <Link to='/home'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;