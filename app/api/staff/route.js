import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {name,password,slug,phone,email,imageUrl,physicalAddress,isActive,nin,dob,note,uniqueCode} = await request.json();
    const newStaff = {name,password,slug,phone,email,imageUrl,physicalAddress,isActive,nin,dob,note,uniqueCode};
    console.log(newStaff)
    return NextResponse.json(newStaff);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a staff",
    error

},{status:500});
}
}