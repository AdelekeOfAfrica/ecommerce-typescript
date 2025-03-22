import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
export default function Coupons() {


  return (
    <div>
   <PageHeader linkTitle="Coupons" href="/dashboard/coupons/new" heading="Add Coupons"/>
   <TableActions/>

    </div>
  )
}
