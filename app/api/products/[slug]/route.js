import { NextResponse } from "next/server";
import db from "@/lib/db";


export async function GET(request,{params:{slug}}){
    try{

        const productDetail = await db.product.findUnique({
            where:{
                slug
            }
        });

        return NextResponse.json(productDetail);
    }catch(Error){
        return NextResponse.json({
            "message":"failed to fetch product details",
            Error
        },{status:500});
    }
}