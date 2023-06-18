import Link from "next/link";
import React from "react";
import styled from "styled-components";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import {registerValidate} from "../lib/validate"
import { useFormik } from 'formik';
import { useRouter } from "next/router";
export default function register() {
  const router=useRouter()
  const formik=useFormik({
    initialValues:{
      username:'',
        email:'',
        password:'',
        cpassword:''
    },
    validate:registerValidate,
    onSubmit
})
async function onSubmit(values){
    const options={
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(values)
    }
    await fetch("http://localhost:3000/api/auth/signup",options).then(res=>res.json()).then((data)=>{
      if(data){
        router.push('http://localhost:3000')
      }

    })
}
  return (
    <div className='wrapper mt-[80px] text-center w-full lg:w-[400px]  mx-auto py-10'>
      <div>
      <Image src="/images/logo.svg" width={200} height={200} alt='' className="mx-auto"/>
        <h1 className="text-2xl font-bold">Sign up to your account</h1>
        <p>Or</p>
        <Link legacyBehavior href="/login">
          <a className="text-blue-600 hover:text-blue-300 pb-7">
            sign up
          </a>
        </Link>
        <form className="flex flex-col gap-5 border p-7 rounded-md mt-7" onSubmit={formik.handleSubmit}>
          <div className="border rounded-xl w-full mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...formik.getFieldProps('username')}
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
          </div>
          {formik.errors.username &&formik.touched.username?<span className="text-rose-500">{formik.errors.username}</span>:<></>}
          <div className="border rounded-xl w-full mx-auto">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              {...formik.getFieldProps('email')}
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
          </div>
          {formik.errors.email &&formik.touched.email?<span className="text-rose-500">{formik.errors.email}</span>:<></>}
          <div className="border rounded-xl w-full mx-auto">
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
              {...formik.getFieldProps('password')}
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
            </div>
            {formik.errors.password &&formik.touched.password?<span className="text-rose-500">{formik.errors.password}</span>:<></>}
            <div className="border rounded-xl w-full mx-auto">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              {...formik.getFieldProps('cpassword')}
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
          </div>
          {formik.errors.cpassword &&formik.touched.cpassword?<span className="text-rose-500">{formik.errors.cpassword}</span>:<></>}
          <div className="border rounded-xl w-full mx-auto">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500
                 hover:bg-gray-100 rounded-md py-2 text-lg text-gray-50 hover:border hover:text-gray-700"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
