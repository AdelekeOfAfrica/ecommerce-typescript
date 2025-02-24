import Heading from '@/components/backoffice/Heading.jsx';
import React from 'react';
import LargeCards from '@/components/backoffice/LargeCards.jsx';

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview"/>
      <LargeCards />
    </div>
  )
}
