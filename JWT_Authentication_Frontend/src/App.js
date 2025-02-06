import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Components/Authentication/Login'
import SignUp from './Components/Authentication/SignUp';
import AuthContext from './ContextAPI/AuthContext';
import JWTtokenContext from './ContextAPI/JWTcontext';
import MainPage from './Components/Main/MainPage';



function App() {
  return (
    <>
    <AuthContext>
    <JWTtokenContext>

    

    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/main' element={<MainPage/>}/>


    </Routes>

    </JWTtokenContext>
    </AuthContext>
    </>
  );
}

export default App;
