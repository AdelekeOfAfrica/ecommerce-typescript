import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title,couponCode,expiryDate,isActive} = await request.json();
    const newCoupon = {title,couponCode,expiryDate,isActive};
    console.log(newCoupon)
    return NextResponse.json(newCoupon);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a coupon",
    error

},{status:500});
}
}