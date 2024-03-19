// ตัวนี้เรียกว่า route handler บังคับให้ตั้งชื่อไฟล์แบบนี้เลย 
// เป็น back end ของ next js เลย

import { NextRequest , NextResponse } from "next/server";

type Data = {
    id?: string,
    message: string
}

let todoList: Data[] = [];
let count = 0;


export async function GET(request: NextRequest):Promise <any> {
    const url = new URL(request.url)

    const action = url.searchParams.get('action');
    if (action == 'reset'){
        todoList = []
    }

    return NextResponse.json(todoList)
}


export async function POST(request: NextRequest): Promise<any> {
    const {message} : Data = await request.json();

    count++;
    todoList = [...todoList , {id: count.toString() , message}]
    return NextResponse.json({result: 'ok'})
}