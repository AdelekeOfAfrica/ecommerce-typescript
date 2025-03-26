import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {name,phone,email,physicalAddress,contactPerson,uniqueCode,paymentTerms,contactPersonNumber} = await request.json();
    const newFarmer = {name,phone,email,physicalAddress,contactPerson,uniqueCode,paymentTerms,contactPersonNumber};
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