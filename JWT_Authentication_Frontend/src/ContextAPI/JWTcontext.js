import React, { createContext, useEffect, useState } from 'react'

export const JWTtokenCon= createContext(null)

const JWTtokenContext = ({children}) => {
    const [JWTtoken,setJWTtoken]=useState(()=>{
         const token = localStorage.getItem('token')
         return token ? JSON.parse(token) : []
    })

    useEffect(()=>{
        if(JWTtoken){
            localStorage.setItem('token' , JSON.stringify(JWTtoken))
        }else{
            localStorage.removeItem('token')
        }
    })
  return (
    <JWTtokenCon.Provider value={{JWTtoken,setJWTtoken}}>
        {children}
    </JWTtokenCon.Provider>
  )
}

export default JWTtokenContext
