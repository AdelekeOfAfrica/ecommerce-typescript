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