
import React, { createContext, useEffect, useState } from 'react'

export const Authcontext=createContext (null)


const AuthContext = ({children}) => { 
    const [user,setUser]=useState(()=>{
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : []
    })
    
     useEffect(()=>{
         if(user){
            localStorage.setItem('user',JSON.stringify(user))
         }else{
            localStorage.removeItem('user')
         }
    },[user])
    
  return (
    <Authcontext.Provider value={{user,setUser}}>
        {children}
    </Authcontext.Provider>
  )
}

export default AuthContext
