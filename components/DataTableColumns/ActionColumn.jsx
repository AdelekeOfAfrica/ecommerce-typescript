import React from 'react'
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function ActionColumn({row,title}) {
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
            <DropdownMenuItem>Delete {title}</DropdownMenuItem>
            <DropdownMenuItem>Edit {title}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
}
