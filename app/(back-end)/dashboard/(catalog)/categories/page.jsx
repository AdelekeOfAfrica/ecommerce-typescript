import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader.jsx'
import TableActions from '@/components/backoffice/TableActions.jsx'

import { Input } from 'postcss'

export default function page() {
  return (
    <div>
      {/*Headers*/}
      <PageHeader linkTitle="Add category" href="/dashboard/categories/new" heading="Categories"/>
      <TableActions/>
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  )
}
