import { NextResponse } from "next/server";
import db from "../../../lib/db";


//if you make any changes on your prisma
//always run npx prisma db push
//verify the changes from npx prisma studio

export async function POST(request){
try{
    const {title,slug,sku,barcode,productPrice,salePrice,imageUrl,Description,categoryId,farmerId,tags,isActive,isWholesale,wholesaleQty,unit,wholesalePrice,productCode,productStock,Qty} = await request.json();
    const newProduct = {title,slug,sku,barcode,productPrice:parseFloat(productPrice),salePrice:parseFloat(salePrice),imageUrl,Description,categoryId,userId:farmerId,tags,isActive,isWholesale,wholesaleQty:parseInt(wholesaleQty),unit:parseInt(unit),wholesalePrice:parseFloat(wholesalePrice),productCode,productStock:parseInt(productStock),Qty:parseInt(Qty)};

    //check if product exists in the database

    const existingProduct = await db.product.findUnique({
        where: { slug: slug }, 
      });
  
      if (existingProduct) {
        return NextResponse.json(
          {
            data: null,
            message: "Product already exists",
          },
          { status: 409 }
        );
      }
    const createProduct = await db.product.create({
        data:newProduct
    })
    console.log(createProduct)
    return NextResponse.json(createProduct);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a product",
    error

},{status:500});
}
}

export async function GET(request) {

    try{

        const products = await db.product.findMany({
            orderBy:{
                createdAt:"desc",
            }
        });
        return NextResponse.json(products)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch products",
            error
        
        },{status:500});

    }

}

 