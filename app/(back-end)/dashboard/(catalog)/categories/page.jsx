import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader.jsx'

export default function page() {
  return (
    <div>
      {/*Headers*/}
      <PageHeader linkTitle="Add category" href="/dashboard/categories/new" heading="Categories"/>
      {/*Tables*/}
      <h2>Categories </h2>
    </div>
  )
}
