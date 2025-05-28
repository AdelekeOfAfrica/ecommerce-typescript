"use client"



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
  {
    accessorKey:"couponCode",
    header:"CouponCode",
    cell:({row})=>{

       const couponCode = row.getValue("couponCode")
        return <div className="line-clamp-1">
            {couponCode}
        </div>

    }
  },

   {
    accessorKey:"slug",
    header:"Slug",
    cell:({row})=>{

       const slug = row.getValue("slug")
        return <div className="line-clamp-1">
            {slug}
        </div>

    }
  },


  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
      cell:({row})=>(<DateColumn row={row}/>)
  },

    {
    accessorKey: "createdAt",
    header: "Date Created",
      cell:({row})=>(<DateColumn row={row}/>)
  },

  {
     header: "Actions",
    id: "actions",
    cell: ({ row }) => (<ActionColumn row={row} title="coupons"/>)
  }
]
