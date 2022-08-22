import React from 'react'
import { UserAuth } from '../context/AuthContext';
const Dashboard = () => {

  const {user, googleSignOut} = UserAuth();

  return (
    <div>
    <div>Welcome, {user.displayName}</div>
    <button onClick={googleSignOut}> SignOut </button>
    </div>
  )
}

export default Dashboard