import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'
import {getData} from "@/lib/getData";
import DataTable from '../../../../../components/data-table-components/DataTable'
import { columns } from './columns';

export default async function Banners() {
  const banners = await getData("banners"); //route to fetch banners
  return (
    <div>
      <PageHeader linkTitle="New Banner" href="/dashboard/banners/new" heading="Banners"/>
       <div className="py-8">
           <DataTable data={banners} columns={columns}/>
           </div>
    </div>
  )
}
