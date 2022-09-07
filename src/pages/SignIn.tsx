import { signInWithPopup } from 'firebase/auth';
import React, { useEffect }from 'react';
import  GoogleButton  from "react-google-button";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

const { googleSignIn, user } = UserAuth();

const navigate = useNavigate();

const handleGoogleSignIn = async () => {
  try{
    await googleSignIn();
  } catch (err) {
    console.log(err)
  }

await googleSignIn()
.then
}

useEffect(() => {
  if(user != null){
    navigate('/dashboard');
  }
}, [user])



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