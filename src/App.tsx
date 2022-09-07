import React from 'react';
import './App.css';
import Main from './Main';
import SignInBar from './components/SignInBar';
import { AuthContextProvider } from './context/AuthContext';
import { user } from './context/AuthContext'


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <SignInBar/>
      <Main/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
