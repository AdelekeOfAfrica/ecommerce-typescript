import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title,slug,sku,barcode,productPrice,salePrice,imageUrl,Description,categoryId,farmerId,tags,isActive} = await request.json();
    const newProduct = {title,slug,sku,barcode,productPrice,salePrice,imageUrl,Description,categoryId,farmerId,tags,isActive};

    const createProduct = await db.farmerProfile.create({
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