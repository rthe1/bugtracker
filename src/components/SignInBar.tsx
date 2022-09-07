import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, googleSignOut} = UserAuth();


  return (
    <div>
     <ul>
          <li>{user?.displayName ? <button onClick={googleSignOut}> SignOut </button> : <Link to='/SignIn'>SignIn</Link> }</li>
        </ul>
    </div>
  )
}

export default Navbar