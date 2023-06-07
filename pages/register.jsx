import Link from "next/link";
import React from "react";
import styled from "styled-components";
import styles from "../styles/Form.module.css";
import Image from "next/image";
export default function register() {
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
        <form className="flex flex-col gap-5 border p-7 rounded-md mt-7">
          <div className="border rounded-xl w-full mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
          </div>
          <div className="border rounded-xl w-full mx-auto">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
          </div>
          <div className="border rounded-xl w-full mx-auto">
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
            </div>
            <div className="border rounded-xl w-full mx-auto">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full bg-slate-50 py-2 px-6 focus:outline-none border-none"
            />
          </div>
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
