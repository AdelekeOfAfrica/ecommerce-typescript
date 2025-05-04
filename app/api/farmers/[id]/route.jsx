import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request){
    try{
        const {uniqueCode,contactPerson,contactPersonNummber,email,name,note,phone,physicalAddress,paymentTerms,imageUrl} = await request.json();
        const newFarmer = await db.coupon.create({
            data:{
                uniqueCode,contactPerson,contactPersonNummber,email,name,note,phone,physicalAddress,paymentTerms,imageUrl
            }
        });

        console.log(newCoupon)
        return NextResponse.json(newCoupon);

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