"use client"

import Image from "next/image"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
    {
    accessorKey: "imageUrl",
    header: "Category Image",
    cell:({row})=>{
        const imageUrl = row.getValue("imageUrl")
        return <div className="shrink-0">
            <Image src={imageUrl} width={500} height={500} className="w-10 h-10 rounded-full object-cover" alt="category image"/>

        </div>
    }
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
  },
]
