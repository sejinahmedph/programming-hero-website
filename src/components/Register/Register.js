import React from 'react';
import app from './firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';

// auth
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // document.getElementById('sign-in-btn').style.display = 'none';
    // document.getElementById('sign-out-btn').style.display = 'block';
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${user.photoURL}" height="50px" width="50px"><br>
      <h1>${user.displayName}</h1>
      <p>${user.email}</p>
    `;
    document.body.appendChild(div);
    console.log('user signed in')
    console.log(user)
  } 
  else {
    // document.getElementById('sign-in-btn').style.display = 'block';
    // document.getElementById('sign-out-btn').style.display = 'none';
    console.log("user isn't signed in")
  }
});


// handle sign out
const handleSignOut = () => {
  try {
    signOut(auth).then(() => console.log("signout"))
  } catch (error) {
    console.log('Error logging out: ', error)
  }
}


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

            console.log(data)
        })
        .catch(error => console.log(error.messege))
    }
  return (
    <div>
        <h1>Register Now</h1>
        
        <button onClick={handleGoogleSignIn} id='sign-in-btn'>Google Sign In</button>

        <button onClick={handleSignOut} id='sign-out-btn'>Sign Out</button>
    </div>
  );
}



export default Register;