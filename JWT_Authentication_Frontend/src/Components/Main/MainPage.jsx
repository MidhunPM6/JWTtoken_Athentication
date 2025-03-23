import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../ContextAPI/AuthContext'
import { JWTtokenCon } from '../../ContextAPI/JWTcontext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true;




const MainPage = () => {
    const {user,setUser}=useContext(Authcontext)
  
    const [file ,setFile]=useState('')
    

    const navigate=useNavigate()

    const handleLogout=async()=>{
       
      try {
        const response = await axios.post('http://localhost:5000/api/auth/logout',{withCredentials: true})
        console.log(response.data.message)
        setUser(null)
        localStorage.removeItem('user')
        navigate('/')
      } catch (error) {
        console.log(error);
        alert('Something  went wrong')
        
      }
    }
    
    useEffect(() => {
      console.log(user._id)
    }, [user])
    
    const handleSubmit = async() => {
      
      
      if (!file) {
        alert("Please select a file first!");
        return;
      } 
      if (file.size > 1 * 1024 * 1024) { 
        alert('File size must be less than 1MB');
        return;
      }
      
      try {
        console.log(file)
        const formData=new FormData()
        formData.append('file',file)
        formData.append('userid',user._id)
        const res = await axios.post('http://localhost:5000/api/auth/submit',formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log(res)
      } catch (error) {
        
      }
      
      
    }
  return (
    <>
      <div className='flex justify-center md:pt-56 pt-20'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl '>Email : {user ? user.email : ''} </h1>
          <h1 className='text-2xl'>Name : {user ? user.name : ''}</h1>
          <div>
            <input
              type='file'
              name='file'
              id='file'
              className='file:bg-black file:text-white file:rounded-md mt-5'
              onChange={e => setFile(e.target.files[0])}
            />

            <button className='  bg-yellow-400 p-1 px-10 rounded-md shadow-2xl' onClick={handleSubmit}>
              submit
            </button>
          </div>

          <button
            type='button'
            className='mt-10 bg-black text-white p-2 px-10 rounded-md shadow-2xl'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default MainPage
