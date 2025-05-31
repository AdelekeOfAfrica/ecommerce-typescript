import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import DataTable from '../../../../../components/data-table-components/DataTable'
import {getData} from "@/lib/getData";
import { columns } from './columns';
export default async function Coupons() {
const coupons = await getData('coupons')//route used for the coupons

  return (
    <div>
   <PageHeader linkTitle="Coupons" href="/dashboard/coupons/new" heading="Add Coupons"/>
    <div className="py-8">
        <DataTable data={coupons} columns={columns} filterKeys={["title"]} />
    </div>
    
    </div>
  )
}
