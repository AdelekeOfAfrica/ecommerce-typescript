import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';

export default function Markets() {
  return (
    <div>
     <PageHeader linkTitle="New Market" href="/dashboard/markets/new" heading="Markets"/>
     <TableActions/>
    </div>
  )
}
