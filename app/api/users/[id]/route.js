import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request,{params:{id}}) {

    try{

        const user = await db.user.findUnique({
           where:{id}
        });
        return NextResponse.json(user)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch user",
            error
        
        },{status:500});

    }

}