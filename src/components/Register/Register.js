import React from 'react';
import app from './firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// auth
const auth = getAuth(app);
// function
function Register() {
    // provider
    const googleProvider = new GoogleAuthProvider();

    // handle google sign in
    const handleGoogleSignIn = () => {
        // sign in with popup
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const data = result.user;

            const div = document.createElement('div');
            div.style.color = "white";
            div.innerHTML = `
              <img src="${data.photoURL}" height="100px">
              <h1>${data.displayName}</h1>
              <h4>${data.email}</h4>
            `;
            document.body.appendChild(div);
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Register Now</h1>
        
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}



export default Register;