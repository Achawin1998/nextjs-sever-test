"use client"
import React, { useRef } from 'react'
import { submitAction } from '../_actions/todo-action'
import Button from './_button'
import ResetButton from './ResetButton'
import { useFormState } from 'react-dom'

type Props = {}

export default function Form({}: Props) {

    const ref = useRef<HTMLFormElement>(null)  // ย้ายมาหน้านี้เพราะจะใช้พวก hooks
    const [state , formAction] = useFormState(submitAction , {error: null}) // สามารถดักค่าผลลัพธ์จากฝั่ง server ที่ return กลับมาได้ 
    // มันจะใช้แทนการ submit ตรง form    //ตรง error มันคือ initail แต่เราตั้งค่าให้มันเป็น null
  return (
     <div> 
        <form ref={ref}
            action={ async (formData: FormData)=>{
            formAction(formData)
            ref.current?.reset();
        }} className='flex flex-col w-[300px] my-16'> 
        <input
        type='text'
        name='message'
        placeholder='write your text...' />

       <Button />
       <ResetButton/>
        
        {state.error && (
            <span className='text-red-500'>Please Enter Some Data!</span>
        )}

        </form>
            </div>
        )
}