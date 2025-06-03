import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request,{params:{id}}) {

    try{

        const user = await db.user.findUnique({
           where:{id}
        });
        return NextResponse.json(user)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch user",
            error
        
        },{status:500});

    }

    

}


export async function DELETE(request, context) {
  const { id } = context.params;

  try {
    // Step 1: Fetch and log the category
    const existingBanner = await db.banner.findUnique({
      where: { id },
    });

     
    

    // Delete the category itself
    const deletedBanner = await db.banner.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Banner Deleted successfully",
      data: existingBanner,
    });

  } catch (error) {
    console.error("Fetch category error:", error);
    return NextResponse.json({
      message: "Failed to delete Banner at the moment",
      error: error.message || error,
    }, { status: 500 });
  }
}
