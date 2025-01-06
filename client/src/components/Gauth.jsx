import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const Gauth = () => { 
    const handleGoogleClick =async()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth()

            const result = await signInWithPopup(auth, provider);


            
        } catch (error) {
            console.log('could not sign in with google', error);
            
        }
    }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-900 text-white p-3 rounded-xl uppercase hover:opacity-90'>Continue with google</button>
  )
}

export default Gauth