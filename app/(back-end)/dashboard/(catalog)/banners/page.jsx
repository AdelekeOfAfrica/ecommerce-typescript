import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function Banners() {
  return (
    <div>
      <PageHeader linkTitle="New Banner" href="/dashboard/banners/new" heading="Banners"/>
        <TableActions/>
    </div>
  )
}
