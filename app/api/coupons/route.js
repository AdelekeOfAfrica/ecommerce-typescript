import { NextResponse } from "next/server";
import db from "../../../lib/db";

//if you make any changes on your prisma
//always run npx prisma db push
//verify the changes from npx prisma studio

export async function POST(request){
try{
    const {title,couponCode,expiryDate,isActive} = await request.json();
//    const newCoupon = {title,couponCode,expiryDate,isActive};
      
      const newCoupon = await db.coupon.create({
        data:{
            title,
            couponCode,
            expiryDate,
            isActive
           
        }
      }) //the name of the coupon model
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

export async function GET(request) {

    try{

        const coupons = await db.coupon.findMany({
            orderBy:{
                createdAt:"desc",
            }
        });
        return NextResponse.json(coupons)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch coupon",
            error
        
        },{status:500});

    }

}