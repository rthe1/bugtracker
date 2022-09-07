import React from 'react'
import { UserAuth } from '../context/AuthContext';
import Main from '../Main';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Group from '../components/Group';
import Bugs from '../components/Bugs';

const Dashboard = () => {

  const { user, googleSignOut } = UserAuth();

  return (
    <div>
      <Navbar />
      <div>Welcome, {user.displayName}</div>
      <button onClick={googleSignOut}> SignOut </button>
      <div>
        <Group/>
      </div>
      <Main />
    </div>
  )
}

export default Dashboard