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

import { Checkbox } from "@/components/ui/checkbox"
import ImageColumn from "../../../../../components/DataTableColumns/ImageColumn";
import ActionColumn from "../../../../../components/DataTableColumns/ActionColumn";
import SortableColumn from "../../../../../components/DataTableColumns/SortableColumn";
import DateColumn from "../../../../../components/DataTableColumns/DateColumn";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns = [

  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title", //name used in the database
    header: ({ column }) => (<SortableColumn column={column} title="title"/>)
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
    accessorKey: "imageUrl", //name used in the database
    header: "Category Image",// name you want to name your table header
    cell:({row})=><ImageColumn row={row} imageTitle="imageUrl"/>
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
      cell:({row})=>(<DateColumn row={row}/>)
  },
  {
     header: "Actions",
    id: "actions",
    cell: ({ row }) => (<ActionColumn row={row} title="category" editEndpoint={`categories/update/${row.original.id}`} endpoint={`categories/${row.original.id}`}/>)
  }
]
