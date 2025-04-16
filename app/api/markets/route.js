import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title,slug,logoUrl,description,isActive,categoryIds} = await request.json();
    const newMarket = {title,slug,logoUrl,description,isActive,categoryIds};
    console.log(newMarket)
    return NextResponse.json(newMarket);

}catch(error){
console.log(error);

return NextResponse.json({
    error:"failed to create a banner",
  

},{status:500});
}
}