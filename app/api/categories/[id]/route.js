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

// export async function DELETE(request,{params:{id}}) {
// console.log(id)
//     try{

//         const existingCategory = await db.category.findUnique({
//           where: { id },
            
//         });

//            if(!existingCategory){
//             return NextResponse.json({
//               data:null,
//             message:"category does not exist",
//             },{status:404})
//            }

//         if(existingCategory){
//           const deleteCategory = await db.category.delete({
//                where: { id },
//             });
//         }
//         return NextResponse.json(deleteCategory)

//     }catch(Exception){

//         return NextResponse.json({
//             "message":"failed to delete category",
//             Exception
        
//         },{status:500});

//     }

// }


// export async function DELETE(request, context) {
//   const { id } = context.params;

//   try {
//     // Check if the category exists
//     const existingCategory = await db.category.findUnique({
//       where: { id },
//     });

//     if (!existingCategory) {
//       return NextResponse.json({
//         data: null,
//         message: "Category does not exist",
//       }, { status: 404 });
//     }

//     // Delete all products linked to this category
//     await db.product.deleteMany({
//       where: {
//         categoryId: id,
//       },
//     });

//     // Delete the category itself
//     const deletedCategory = await db.category.delete({
//       where: { id },
//     });

//     return NextResponse.json({
//       message: "Category and its products deleted successfully",
//       deletedCategory,
//     });

//   } catch (error) {
//     console.error("Delete category error:", error);
//     return NextResponse.json({
//       message: "Failed to delete category",
//       error: error.message || error,
//     }, { status: 500 });
//   }
// }

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
