import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title,slug,imageUrl,link} = await request.json();
    const newBanner = {title,slug,imageUrl,link};
    console.log(newBanner)
    return NextResponse.json(newBanner);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a category",
    error

},{status:500});
}
}