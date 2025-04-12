import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title,slug,categoryId,imageUrl,Description,blogContent,marketIds,isActive} = await request.json();
    const newCategory = {title,slug,imageUrl,categoryId,Description,blogContent,marketIds,isActive};
    console.log(newCategory)
    return NextResponse.json(newCategory);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a category",
    error

},{status:500});
}
}