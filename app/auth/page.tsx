'use client'
import React, { useState } from 'react'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false)

  const inputClasses = `border border-gray-600  rounded-md   bg-[#0f111e]  text-white text-sm outline-none border-none   px-6 py-3`
  return (
    <section  className='w-full min-h-screen bg-[#0f1117] flex items-center justify-center  '>
    

    {/* parent div for form and card */}
    <div  className='w-[75%]  min-h-[500px] bg-[#1e1e1e] grid lg:grid-cols-2  grid-cols-1  '>

        {/* Side banner */}
        <div  className='hidden lg:flex w-full bg-gradient-to-b from-cyan-500 to-teal-500  p-6
         flex-col  justify-center'>
            <h2  className='font-bold text-white font-mono text-4xl '>CodeJS</h2>
            <p className='font-semibold text-white font-mono text-md '>  Live Preview for HTML, CSS and JavaScript</p>
        </div>


        {/* Forms */}
        <div  className='p-6  flex flex-col items-center justify-center gap-4 '>
          <div className='p-4'>
            <h2  className='text-white font-mono text-2xl '>create your account</h2>
          </div>


          <form  className='p-4 flex flex-col  gap-6 w-[80%]'>
            <div  className='flex flex-col  gap-1 '>
            <label  className='text-white font-mono font-normal  text-sm  '>
              Enter Your Name
            </label>
            <input
            type='text'
            className={inputClasses}
            placeholder='Enter your name'
            />
            </div>





             <div  className='flex flex-col  gap-1 '>
            <label  className='text-white font-mono font-normal  text-sm  '>
              Enter Your email
            </label>
            <input
            type='email'
            className={inputClasses}
            placeholder='Enter your email'
            />
            </div>


            
             <div  className='flex flex-col  gap-1'>
            <label  className='text-white font-mono font-normal  text-sm  '>
              Enter Your passwrord
            </label>
            <input
            type='password'
            className={inputClasses}
            placeholder='Enter your password'
            />
            </div>

            <div>


            <button 
            type='submit'
            className='w-full text-center text-xl text-white
            cursor-pointer
            bg-teal-500  rounded-md py-2'>
              Sign Up
            </button>


            <p  className='text-white font-mono text-xs  text-center  my-3'>I have an a account 
               <span  className='text-xs text-sm text-teal-600 hover:underline cursor-pointer
             font-semibold  mx-1'>Login</span>
            </p>
         
              </div>
          </form>



          
        </div>
    </div>
    </section>
  )
}

export default Auth
