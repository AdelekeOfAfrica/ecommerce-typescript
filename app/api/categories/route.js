import { NextResponse } from "next/server";
import db from "../../../lib/db";


export async function POST(request) {
    try {
      const { title, slug, imageUrl, description, marketIds, isActive } = await request.json();
  
     
      if (!slug) {
        return NextResponse.json({ message: "Slug is required" }, { status: 400 });
      }
  
      const existingCategory = await db.category.findUnique({
        where: { slug: slug }, 
      });
  
      if (existingCategory) {
        return NextResponse.json(
          {
            data: null,
            message: "Category already exists",
          },
          { status: 409 }
        );
      }
  
      const newCategory = await db.category.create({
        data: { title, slug, imageUrl, description, marketIds, isActive },
      });
  
      return NextResponse.json(newCategory, { status: 201 });
  
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        {
          message: "Failed to create a category",
          error: error.message, 
        },
        { status: 500 }
      );
    }
  }

export async function GET(request) {

    try{

        const categories = await db.category.findMany({
            orderBy:{
                createdAt:"desc",
            }
        });
        return NextResponse.json(categories)

    }catch(Exception){

        return NextResponse.json({
            "message":"failed to fetch catgories",
            error
        
        },{status:500});

    }

}