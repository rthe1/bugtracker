import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import  GoogleButton  from "react-google-button";
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
const { googleSignIn } = UserAuth();
const handleGoogleSignIn = async () => {
  try{
    await googleSignIn();
  } catch (err) {
    console.log(err)
  }

await googleSignIn()
.then
}

  return (
    <div>
      Sign-in
      <form>
        <label>
          <input type="text" />
        </label>
      </form>
      <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
  )
}

export default Signin