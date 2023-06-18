import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import styles from "../styles/Form.module.css"
import Image from 'next/image'
import {useSession,signOut,signIn} from "next-auth/react";
import { useFormik } from 'formik';
import loginValidate from '@/lib/validate'
import { useRouter } from 'next/router'
export default function register() {
    const router=useRouter()
    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:loginValidate,
        onsubmit
    })
    console.log(formik.errors)
    async function onsubmit(values){
        const status=await signIn("credentials",{
            redirect:false,
            email:values.email,
            password:values.password,
            callbackUrl:"/"
        })
        if(status.ok)router.push(status.url)
    }
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
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div className='border rounded-xl w-3/4 mx-auto'>
                
                <input type="email" id='email' name="email" placeholder='Email Address'onChange={formik.handleChange} value={formik.values.email} className="w-full bg-slate-50 py-4 px-6 focus:outline-none border-none"/>
            </div>
            {formik.errors.email &&formik.touched.email?<span className="text-rose-500">{formik.errors.email}</span>:<></>}
            <div className='border rounded-xl w-3/4 mx-auto'>
            <input type="password" id='pass' name="pass" placeholder='Password' onChange={formik.handleChange} value={formik.values.password} className="w-full bg-slate-50 py-4 px-6 focus:outline-none border-none"/>
            </div>
            {formik.errors.password &&formik.touched.password?<span className="text-rose-500">{formik.errors.password}</span>:<></>}
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


