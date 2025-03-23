import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const SignUp = () => {

    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
    })

    const handlechange=(e)=>{
    const  changeData = {...formData , [e.target.name]:e.target.value}
    setFormData(changeData)
    }

    const handleSubmit=async(e)=>{
        console.log(formData)  
        e.preventDefault()
        try{
            const response=await axios.post('http://localhost:5000/api/auth/register',formData)
            

            alert(response.data.message)
            navigate('/')
        }catch(err){
            
            alert(err.response.data.message)

        } 
        

    }

    const navigate=useNavigate()
    const handleLogin=() =>{
     navigate('/')
    }


  return (
    <>
    <div className='flex justify-center md:pt-32 min-h-screen pt-20  '>
     <div className='flex flex-col items-center  p-4  rounded-md md:h-[60vh] md:w-[30vw] w-full h-auto shadow-2xl '>
     <button className='ml-auto bg-black text-white p-1 px-3 rounded-md hover:bg-gray-600' onClick={handleLogin}>Login</button>
    <form action=""  className='flex flex-col items-center mt-10 '>
        
        <div>
        <label htmlFor=""  className='text-3xl text-gray-600 font-mono font-semibold '>Sign Up</label>
        
        </div>
        
        <input type="text"  name='name' placeholder=' Enter your name'  onChange={handlechange} className='mt-10 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />
        <input type="email" name ='email' placeholder=' Enter Mail ID'  onChange={handlechange} className='  mt-4 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />
        <input type="password" name='password' placeholder=' Enter your password' onChange={handlechange} className=' mt-4 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />
        

        <div className='mt-10'>
            <button type="submit" className='bg-black text-white py-2 px-10 rounded-lg hover:bg-gray-600 hover:scale-105' onClick={handleSubmit}>Sign Up</button>
        </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignUp
