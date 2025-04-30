import { NextResponse } from "next/server";
import db from "../../../lib/db";
import bcrypt from 'bcrypt';
export async function POST(request){ 

    try{

        const {name,email,password } = await request.json();

        //check if user already exist in the database 
        const existingUser  = await db.user.findUnique({
            where:{
                email
            }
        });

        if(existingUser){
            return NextResponse.json({
                data:null,
                message:"User Already Exist"
            },{status:409});
        }

        //fetch and encrypt the password using bcrypt
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser =await db.user.create({
            data:{
                name,email,password:hashedPassword
            }
        })

        console.log(newUser)
        return NextResponse.json({
            data:newUser,
            message:"User created successfully"
        },{status:201});

    }catch(error){

        console.log(error);

        return NextResponse.json({
            error,
            message:"Server Error:something went wrong",
            
        },{
            status:500
        });
    }
}