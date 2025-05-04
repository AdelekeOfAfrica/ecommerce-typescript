import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request,{params:{id}}) {

    try{

        const farmer = await db.user.findUnique({
           where:{id,role:"FARMER"}
        });
        return NextResponse.json(farmer)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch farmer",
            error
        
        },{status:500});

    }

}