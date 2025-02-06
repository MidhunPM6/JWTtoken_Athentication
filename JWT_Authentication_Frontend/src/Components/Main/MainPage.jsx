import React, { useContext, useEffect } from 'react'
import { Authcontext } from '../../ContextAPI/AuthContext'
import { JWTtokenCon } from '../../ContextAPI/JWTcontext'




const MainPage = () => {
    const {user}=useContext(Authcontext)
    const {setJWTtoken,JWTtoken}=useContext(JWTtokenCon)

    const handleLogout=()=>{
       
        console.log(JWTtoken)
    }

    useEffect(()=>{
        console.log(user);
       
        
    },[user])
  return (
    <>
    <div className='flex justify-center md:pt-56 pt-20' >
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl'>Name  : {user ? user.name : ""}</h1>
            <h1 className='text-2xl '>Email : {user ? user.email : "" } </h1>

            <button type="button" className='mt-10 bg-black text-white p-2 px-10 rounded-md shadow-2xl' onClick={handleLogout}>Logout</button>
            <div>
                
            </div>

        </div>

    </div>
    </>
  )
}

export default MainPage 
