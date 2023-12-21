import React from 'react';
import './css/style.css';
import app from './firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';
import Footer from '../Footer/Footer';

// auth
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const container = document.getElementById('profile');
    const div = document.createElement('div');
    container.innerHTML = `
      <img src="${user.photoURL}" height="50px" width="50px"><br>
      <h1>${user.displayName}</h1>
      <p>${user.email}</p>
    `;
    container.appendChild(div);


    console.log('user signed in')
    console.log(user)
  } 
  else {
    console.log("user isn't signed in")
  }
});


// handle sign out
const handleSignOut = () => {
  try {
    signOut(auth).then(() => {
      console.log("signout")
      window.location.reload();
    })
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

        <div className='p-5' id='profile'>
          User
        </div>
        
        <button onClick={handleGoogleSignIn} id='sign-in-btn'>Google Sign In</button>

        <button onClick={handleSignOut} id='sign-out-btn'>Sign Out</button>
        <Footer></Footer>
    </div>
  );
}




export default Register;