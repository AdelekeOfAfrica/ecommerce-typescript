import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request){
try{
    const {name,phone,email,physicalAddress,contactPerson,uniqueCode,paymentTerms,contactPersonNumber,note,isActive,imageUrl,products,landSize,mainCrop,userId} = await request.json();
    const newFarmer = {name,phone,email,physicalAddress,contactPerson,uniqueCode,paymentTerms,contactPersonNumber,note,isActive,imageUrl,products,landSize:parseFloat(landSize),mainCrop,userId};
    const createFarmer = await db.farmerProfile.create({
        data:newFarmer
    })
    console.log(createFarmer)
    return NextResponse.json(createFarmer);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a farmer",
    error

},{status:500});
}
}


export async function GET(request) {

    try{

        const farmerProfiles = await db.farmerProfile.findMany({
            orderBy:{
                createdAt:"desc",
            }
        });
        return NextResponse.json(farmerProfiles)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch farmerProfiles",
            error
        
        },{status:500});

    }

}