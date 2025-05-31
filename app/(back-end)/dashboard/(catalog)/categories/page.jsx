import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader.jsx'
import TableActions from '@/components/backoffice/TableActions.jsx'
import {getData} from "@/lib/getData";
import { Input } from 'postcss'
import DataTable from '../../../../../components/data-table-components/DataTable'
import { columns } from './columns';

export default async function page() {

  const categories  = await getData("categories"); //route of api , in which the data is being fetched 
  return (
    <div>
      {/*Headers*/}
      <PageHeader linkTitle="Add category" href="/dashboard/categories/new" heading="Categories"/>
      
      <div className="py-8">
      <DataTable data={categories} columns={columns} filterKeys={["title"]}/>
      </div>
    </div>
  )
}
