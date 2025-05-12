import { NextResponse } from "next/server";
import db from "../../../lib/db";


//if you make any changes on your prisma
//always run npx prisma db push
//verify the changes from npx prisma studio
export async function POST(request){
try{
    const {title,slug,categoryId,imageUrl,Description,blogContent,marketIds,isActive} = await request.json();
    const newTraining = {title,slug,imageUrl,categoryId,Description,blogContent,marketIds,isActive};
  
    const existingTraining = await db.training.findUnique({
        where: { slug: slug }, 
      });
  
      if (existingTraining) {
        return NextResponse.json(
          {
            data: null,
            message: "Training already exists",
          },
          { status: 409 }
        );
      }
    const createTraining = await db.training.create({
        data:newTraining
    })
    console.log(createTraining)
    return NextResponse.json(createTraining);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a training",
    error

},{status:500});
}
}