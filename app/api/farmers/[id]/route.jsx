import { NextResponse } from "next/server";
import db from "@/lib/db";

//if you make any changes on your prisma
//always run npx prisma db push
//verify the changes from npx prisma studio

export async function POST(request){
    try{
        const {uniqueCode,contactPerson,contactPersonNumber,email,name,note,phone,physicalAddress,paymentTerms,imageUrl} = await request.json();
        const newFarmer = await db.Farmer.create({
            data:{
                uniqueCode,contactPerson,contactPersonNumber,email,name,note,phone,physicalAddress,paymentTerms,imageUrl
            }
        });

        console.log(newFarmer)
        return NextResponse.json(newFarmer);

    }catch(error){
        return NextResponse.json({
            "message":"failed to create a farmer"
        })
    }
}

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