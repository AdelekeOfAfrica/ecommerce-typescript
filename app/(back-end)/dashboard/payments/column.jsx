"use client"

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown} from "lucide-react";
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  // {
  //   accessorKey: "description",
  //   header: "Description",
  //     cell:({row})=>{
  //       const description = row.getValue("description")
  //       return <div className="line-clamp-1">
  //           {description}
  //       </div>
  //   }
  // },
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
      cell:({row})=>{
        const createdAt = row.getValue("createdAt")
        const originalDate = new Date(createdAt)

        const day = originalDate.getDate();
        const month =  originalDate.toLocaleString('default',{
          month:'short'
        });
        const year = originalDate.getFullYear();
        const formatted = `${day}th ${month} ${year}`
        return <div className="">
            {formatted}
        </div>
    }
  },
  {
     header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const isActive = row.isActive
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(isActive)}
            >
              Copy the status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Category</DropdownMenuItem>
            <DropdownMenuItem>Edit Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
