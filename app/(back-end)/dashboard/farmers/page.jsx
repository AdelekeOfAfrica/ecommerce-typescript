import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'
import {getData} from "@/lib/getData";
import { columns } from './columns';
import DataTable from '@/components/data-table-components/DataTable'

export default async function page() {
  const farmers = await getData("farmers"); //route to the farmers
  return (
    <div>
         <PageHeader linkTitle="Add Farmer" href="/dashboard/farmers/new" heading="Farmers"/>
      <div className="py-8">
         <DataTable data={farmers} columns={columns} filterKeys={["name"]}/> 
         {/* in the response, we have a column which is the name 
          that is why we are passing the name to the filter section*/}
         </div>
    </div>
  )
}
