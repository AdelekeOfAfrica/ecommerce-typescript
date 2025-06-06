import React from 'react'
import { Button } from "@/components/ui/button"
import DeleteButton from '../Actions/DeleteButton';
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import EditButton from '../Actions/EditButton';


export default function ActionColumn({row,title,endpoint,editEndpoint}) {

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
            <DropdownMenuItem><DeleteButton  title={title} endpoint={endpoint}  /></DropdownMenuItem>
            <DropdownMenuItem><EditButton  title={title} editEndpoint={editEndpoint}  /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
}
