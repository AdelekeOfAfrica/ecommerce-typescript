import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request){
try{
    const {title,slug,imageUrl,link,isActive} = await request.json();
   // const newBanner = {title,slug,imageUrl,link,isActive};
   const newBanner = await db.banner.create({
    data:{
        title,slug,imageUrl,link,isActive
    }
   });

    console.log(newBanner)
    return NextResponse.json(newBanner);

}catch(error){
console.log(error);

return NextResponse.json({
    error:"failed to create a banner",
  

},{status:500});
}
}

export async function GET(request) {

    try{

        const banners = await db.banner.findMany({
            orderBy:{
                createdAt:"desc",
            }
        });
        return NextResponse.json(banners)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch banners",
            error
        
        },{status:500});

    }

}