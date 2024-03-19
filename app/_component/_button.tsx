'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'


type Props = {}

function Button({}: Props) {   

    const { pending } = useFormStatus() // ตัวนี้จะเช็คว่า server run เสร็จรึยัง 
     // ถ้ารันยังไม่เสร็จตัวนี้จะมีค่าเป็น true
  return (
    <div>
         <button className="bg-blue-500 rounded px-4 py-2 text-white font-semibold">
        {pending ? "Loading..." : "Submit"}
        </button>
    </div>
  )
}

export default Button