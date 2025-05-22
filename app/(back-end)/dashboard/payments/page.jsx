import { columns } from "./column"
import { DataTable } from "./data-table"
import {getData} from "@/lib/getData"



export default async function DemoPage() {
  const data = await getData("categories") //route to fetch the categories

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
