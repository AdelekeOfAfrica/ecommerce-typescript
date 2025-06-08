import { NextResponse } from "next/server";
import db from "@/lib/db";


export async function GET(request, { params }) {
  try {
    const productCategory = params.productCategory;
    

    const relatedProduct = await db.category.findUnique({
      where: {
        id: productCategory, // assuming productCategory is the category ID
      },
      include: {
        products: true,
      },
    });

    return NextResponse.json(relatedProduct);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch related product',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
