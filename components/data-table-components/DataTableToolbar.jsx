"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"



import { Button } from "@/components/ui/button"
import {Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./DataTableViewOptions"


export function DataTableToolbar({
  table,
  filterKeys 
}) {
  // const isFiltered = table.getState().columnFilters.length > 0
 const isFiltered = filterKeys.some((key) =>
  table.getState().columnFilters.some(
    (filter) => filter.id === key && filter.value
  )
);

  const handleInputChange =(key,value)=>{
    table.getColumn(key)?.setFilterValue(value);

  } 

  const handleResetClick =()=>{
    filterKeys.forEach((key)=>{
      table.getColumn(key)?.setFilterValue('');
    });
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
    {filterKeys.map((key) => (
  <Input
    key={key}
    placeholder={`Filter ${key} ...`}
    value={table.getColumn(key)?.getFilterValue() ?? ""}
    onChange={(event) => handleInputChange(key, event.target.value)}
    className="h-8 w-[150px] lg:w-[250px]"
  />
))}
        {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={handleResetClick}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4"/>
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
      
    </div>
  )
}