import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title,slug,sku,barcode,productPrice,salePrice,imageUrl,Description,categoryId,farmerId,tags} = await request.json();
    const newProduct = {title,slug,sku,barcode,productPrice,salePrice,imageUrl,Description,categoryId,farmerId,tags};
    console.log(newProduct)
    return NextResponse.json(newProduct);

}catch(error){
console.log(error);

return NextResponse.json({
    "message":"failed to create a product",
    error

},{status:500});
}
}