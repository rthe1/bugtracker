import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, googleSignOut} = UserAuth();


  return (
    <div>
     <ul>

          <li><Link to='/'>Home</Link></li>
          <li><Link to='/group'>Group</Link></li>
          <li><Link to='/project'>Project</Link></li>
          <li><Link to='/bugs'>Bugs</Link></li>
          <li>{user?.displayName ? <button onClick={googleSignOut}> SignOut </button> : <Link to='/SignIn'>SignIn</Link> }</li>
        </ul>
    </div>
  )
}

export default Navbar