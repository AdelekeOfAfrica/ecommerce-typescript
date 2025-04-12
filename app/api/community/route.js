import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title,slug,categoryId,imageUrl,Description,blogContent,marketIds,isActive} = await request.json();
    const newTraining = {title,slug,imageUrl,categoryId,Description,blogContent,marketIds,isActive};
    console.log(newTraining)
    return NextResponse.json(newTraining);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a training",
    error

},{status:500});
}
}