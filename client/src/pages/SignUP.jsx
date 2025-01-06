import React from 'react'
import { Link } from 'react-router-dom'

const SignUP = () => {
  return (
    <div className="">
      <div className='p-4 px-10 max-w-lg mx-auto'>
        <h1 className=' text-xl sm:text-3xl  text-center font-semibold pt-7 mb-2 uppercase'>Sign Up to <span className='text-blue-900'>UniWork</span>.</h1>
        <p className='text-stone-400 text-center'>We need some details to create your Account</p>
        <form className='flex flex-col gap-4 mt-3'>
          <input type="text" placeholder='Enter Username..' className='border p-3 rounded-xl' id='usernmae' />
          <input type="email" placeholder='Enter your Email..' className='border p-3 rounded-xl' id='email' />
          <input type="password" placeholder='Make Strong Password..' className='border p-3 rounded-xl' id='password' />
          <button className='font-semibold p-3 bg-stone-700 text-white rounded-lg hover:opacity-90 disabled:opacity-80'>SIGN UP</button>
        </form>
        <div className='flex gap-2 mt-3'>
          <p>Have an Account?</p>
          <Link to={"/login"}>
          <span className='text-blue-900 font-semibold'>Login</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUP