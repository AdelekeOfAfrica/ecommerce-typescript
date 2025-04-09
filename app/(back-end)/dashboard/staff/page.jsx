import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function page() {
  return (
    <div>
         <PageHeader linkTitle="Add Staff" href="/dashboard/staff/new" heading="Staffs"/>
         <TableActions/>
    </div>
  )
}
