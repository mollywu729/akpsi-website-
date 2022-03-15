import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/firestore";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Navigate } from 'react-router';

// FirebaseUI config
const firebaseUIConfig = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,  //login with email
      requireDisplayName: true
    },
    GoogleAuthProvider.PROVIDER_ID,  //login with google
  ],
  credentialHelper: 'none',
  signInFlow: 'popup',
  callbacks: {
    // avoid redirects after sign-in
    signInSuccessWithAuthResult: () => false,
  }
};

//set up the log in for users in order to submit event form
export function Login (props) {
  const auth = getAuth();
  const email = props.email;
  const password = props.password;

  // handle user creation upon login
  const handleLogin = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      let user = userCredential.user; //access the newly created user
      console.log('User created: '+user.uid);
      //...
  })
  .catch((error) => { //report any errors
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
  });
  }

  // conditional redirect
  if(props.user === undefined) {
    return null;
  }
  if(props.user) {
    alert('You are currently logged in!');
    return <Navigate to="/events"/>
  }

  return (
      <section className="login-form"> 
          <div className="Login">
              <div className="login-form-title">
                  <h2 classame ='form-title'><strong>Sign In</strong></h2>
                  <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} onClick={handleLogin}/>
              </div>
          </div>
          </section>
  );
}