'use client';
import './globals.css'
import {SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import {FaAddressCard}  from 'react-icons/fa'
import { useState } from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase';
export default function Home() {

  const { register, handleSubmit, formState:{errors} } = useForm<FieldValues>();
  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }

  return (
   <div>
    <div className='px-2'>
      Floa
    </div>
    Form 
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" className='m-2 form-input ring-1 ring-inset ring-gray-300 block rounded-md shadow-sm focus:ring-2 focus:ring-inset' {...register('name')} />
      <input type="password" className='m-2 form-input ring-1 ring-inset ring-gray-300 block rounded-md shadow-sm focus:ring-2 focus:ring-inset' {...register('password')} />
      <input type="email" className='m-2 form-input ring-1 ring-inset ring-gray-300 block rounded-md shadow-sm focus:ring-2 focus:ring-inset' {...register('email')} />
      <button className="m-2 inline-flex justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"><FaAddressCard /> Sign in with github</button>
    </form>
   </div>
  )
}
