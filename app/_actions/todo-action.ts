
'use server'
import { revalidatePath } from 'next/cache';

export const submitAction =  async(prevState: any ,formData: FormData) => {
  // มันจะประกาศใช้ server แค่ตรงภายในวงเล็บ
    const message = formData.get('message')

    if(!message || message.toString().length < 0 ){
        return {error: "Sorry please type some text in the field."}
    }

    await fetch('http://localhost:3000/api/todo-api', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message})
    })
    revalidatePath("/") // ตรงนี้เป้นการ สั่ง refresh หน้า ใช้ได้เฉพาะ server
    return {error: null}
  }


  //Reset ข้อมูล
  export const ResetData = async () => {
    await fetch("http://localhost:3000/api/todo-api?action=reset")
    revalidatePath("/")
  }