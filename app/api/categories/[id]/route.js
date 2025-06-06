import { NextResponse } from "next/server";
import db from "@/lib/db";


export async function GET(request,{params:{id}}){
  try{

    const category = await db.category.findUnique({
      where:{
        id,
      }

    });

      return NextResponse.json(category)
    
  }catch(Error){
       return NextResponse.json({
            "message":"failed to fetch user",
            Error
        
        },{status:500});
  }
}





export async function DELETE(request, context) {
  const { id } = context.params;

  try {
    // Step 1: Fetch and log the category
    const existingCategory = await db.category.findUnique({
      where: { id },
    });

        await db.product.deleteMany({
      where: {
        categoryId: id,
      },
    });

    // Delete the category itself
    const deletedCategory = await db.category.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Category fetched successfully",
      data: existingCategory,
    });

  } catch (error) {
    console.error("Fetch category error:", error);
    return NextResponse.json({
      message: "Failed to delete category",
      error: error.message || error,
    }, { status: 500 });
  }
}

export async function PUT(request,{params:{id}}){
  try{
    console.log(id)
 const { title, slug, imageUrl, description, marketIds, isActive } = await request.json();
    const existingCategory = await db.category.findUnique({
      where:{
        id,
      }



    });

    if (!existingCategory){
      
      return NextResponse.json({
        data:null,
        message:"category does not exists"
      },{status:404})
    }

    const updateCategory =await db.category.update({
      where:{
        id
      },
      data:{ title, slug, imageUrl, description, marketIds, isActive }
    });
      return NextResponse.json(updateCategory)
    
  }catch(Error){
       return NextResponse.json({
            "message":"failed to update category",
            Error
        
        },{status:500});
  }
}
