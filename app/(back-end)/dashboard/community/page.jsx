import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader.jsx'
import TableActions from '@/components/backoffice/TableActions.jsx'

export default function Page() {
  return (
    <div>
    {/*Headers*/}
    <PageHeader linkTitle=" Community Training" href="/dashboard/community/new" heading="Add Training"/>
    <TableActions/>
    <div className="py-8">
      <h2>Table</h2>
    </div>
  </div>
  )
}
