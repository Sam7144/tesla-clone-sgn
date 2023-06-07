import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import styles from "../styles/Form.module.css"
import Image from 'next/image'
import {useSession,signOut,signIn} from "next-auth/react";
export default function register() {
    const handleGoogleSign=async()=>{
        signIn('google',{
            callbackUrl:'http://localhost/3000'
        })
    }
  return (
   <div className='wrapper mt-[80px] text-center w-full lg:w-[400px] border mx-auto py-10 rounded-md'>

    <div>
        <Image src="/images/logo.svg" width={200} height={200} alt='' className="mx-auto"/>
        <h1 className='text-2xl font-bold'>Sign in to your account</h1>
        <p>Or</p>
        <Link legacyBehavior href='/register'>
            <a  className='text-blue-600 hover:text-blue-300'>create new account</a>
        </Link>
        <form className="flex flex-col gap-5">
            <div className='border rounded-xl w-3/4 mx-auto'>
                
                <input type="email" id='email' name="email" placeholder='Email Address' className="w-full bg-slate-50 py-4 px-6 focus:outline-none border-none"/>
            </div>
            <div className='border rounded-xl w-3/4 mx-auto'>
            <input type="password" id='pass' name="pass" placeholder='Password' className="w-full bg-slate-50 py-4 px-6 focus:outline-none border-none"/>
            </div>
            <div className='border rounded-xl w-3/4 mx-auto'>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500
                 hover:bg-gray-100 rounded-md py-3 text-lg text-gray-50 hover:border hover:text-gray-700">submit</button>
            </div>
               <div className='border rounded-xl w-3/4 mx-auto'>
                
                <button type="button"onClick={handleGoogleSign} className={styles.button_custom}>Sign in with Google</button>
            </div>
        </form>
    </div>
   </div>
  )
}


