import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Authcontext } from '../../ContextAPI/AuthContext'
import { JWTtokenCon } from '../../ContextAPI/JWTcontext'






const Login = () => {

    const {user,setUser} = useContext(Authcontext)  
    const {JWTtoken,setJWTtoken}=useContext(JWTtokenCon)
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
      name:"",
      email:''

    })

    const handleSignup=()=>{
        navigate("/signup")
    }
    

    const handleChange=(e)=>{
      const changeData= {...formData , [e.target.name]:e.target.value}
      setFormData(changeData)
      

    }

    const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login',formData)
        setUser(response.data.user)  
        setJWTtoken(response.data.token)  
        alert(response.data.message)
        
        
         console.log(JWTtoken);
        //  console.log(response.data.user.name)
       
         navigate('/main')

      } catch (error) {
        alert(error)
        console.log(error)
      }
      
    
      
    

    }
   
  return (
    <>
    <div className='flex justify-center md:pt-32 pt-20 min-h-screen  '>
     <div className='flex flex-col items-center  p-4 rounded-md md:h-[60vh] md:w-[30vw] w-full h-auto shadow-2xl'>
     <button className='ml-auto bg-black text-white p-1 px-3 rounded-md hover:bg-gray-600' onClick={handleSignup}>SignUp</button>
    <form action=""  className='flex flex-col items-center mt-10 '>
        
        <div>
        <label htmlFor=""  className='text-3xl text-gray-600 font-mono font-semibold '> Login User</label>
        
        </div>
        
        <input type="email" name='email' placeholder=' Enter your Email ID ' onChange={handleChange} className='mt-10 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />
        <input type="password" name='password' placeholder=' Enter your password' onChange={handleChange} className='mt-4 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />

        <div className='mt-10'>
            <button type="submit"  onClick={handleSubmit} className='bg-black text-white py-2 px-10 rounded-lg hover:bg-gray-600 hover:scale-105'>Login</button>
        </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Login
