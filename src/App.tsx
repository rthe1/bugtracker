import React from 'react';
import './App.css';
import Main from './Main';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
      <Main/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
