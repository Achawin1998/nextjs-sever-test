'use client'
import React, { useTransition } from 'react'
import { ResetData } from '../_actions/todo-action'

type Props = {}

export default function ResetButton({}: Props) {

    const [_, startTransition] = useTransition() //เหมือนเป็นการเรียกฝั่ง server ผ่าน client

  return (
    <div>
          <button type='button' className="text-black mt-3 font-semibold border border-gray-500 rounded h-8" 
        onClick={()=>{
            startTransition(()=> ResetData() )
        }}
        >
        Reset
        </button>
    </div>
  )
}