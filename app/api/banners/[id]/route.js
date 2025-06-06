import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request,{params:{id}}) {

    try{

        const banner = await db.banner.findUnique({
           where:{id}
        });
        return NextResponse.json(banner)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch banners",
            error
        
        },{status:500});

    }
}
export async function PUT(request, context) {
  try {
    const { id } = context.params;

    const existingBanner = await db.banner.findUnique({
      where: { id },
    });

    if (!existingBanner) {
      return NextResponse.json(
        {
          data: null,
          message: 'Banner does not exist',
        },
        { status: 404 }
      );
    }

    const { title, slug, imageUrl, link, isActive } = await request.json();

    const updatedBanner = await db.banner.update({
      where: { id },
      data: {
        title,
        slug,
        imageUrl,
        link,
        isActive,
      },
    });

    return NextResponse.json(updatedBanner);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to update banner',
        error: error.message,
      },
      { status: 500 }
    );
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
