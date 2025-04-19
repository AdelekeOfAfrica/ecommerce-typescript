import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {name,phone,email,physicalAddress,contactPerson,uniqueCode,paymentTerms,contactPersonNumber,note,isActive,imageUrl} = await request.json();
    const newFarmer = {name,phone,email,physicalAddress,contactPerson,uniqueCode,paymentTerms,contactPersonNumber,note,isActive,imageUrl};
    console.log(newFarmer)
    return NextResponse.json(newFarmer);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a farmer",
    error

},{status:500});
}
}