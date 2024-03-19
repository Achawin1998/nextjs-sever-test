import React from 'react'
import Form from './_component/todoform';
type Props = {}

export default async function page({}: Props) {

    const result  =  await fetch('http://localhost:3000/api/todo-api'); // การ pre fecth ข้อมูลไว้รอ
    const items: {id: string; message: string} [] = await result.json(); // รวมข้อมูลจากหน้า route

 
  return (
    <div>
      <h1 className='text-2xl font-bold'>Todo List (Next v.14 Server Action)</h1>
        <Form />
        <ul> 
          {items.map((item)=> 
            <li key={item.id}>
                Note {item.id}: {item.message}
            </li>
          )}
        </ul>
            
   

    </div>
  )
}