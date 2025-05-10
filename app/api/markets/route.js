import { NextResponse } from "next/server";
import db from "../../../lib/db";

//if you make any changes on your prisma
//always run npx prisma db push
//verify the changes from npx prisma studio



export async function POST(request){
try{
    const {title,slug,imageUrl,description,isActive,categoryIds} = await request.json();
    const newMarket = {title,slug,imageUrl,description,isActive,categoryIds};
    if (!slug) {
        return NextResponse.json({ message: "Slug is required" }, { status: 400 });
      }
  
      const existingMarket = await db.market.findUnique({
        where: { slug: newMarket.slug }, 
      });
  
      if (existingMarket) {
        return NextResponse.json(
          {
            data: null,
            message: "Market already exists",
          },
          { status: 409 }
        );
      }
  
      const createMarket = await db.market.create({
        data: newMarket,
      });
    return NextResponse.json(createMarket);

}catch(error){
console.log(error);

return NextResponse.json({
    error:"failed to create a banner",
  

},{status:500});
}
}