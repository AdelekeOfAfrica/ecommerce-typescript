import Heading from '@/components/backoffice/Heading.jsx';
import React from 'react';
import LargeCards from '@/components/backoffice/LargeCards.jsx';
import SmallCards from '@/components/backoffice/SmallCards.jsx';

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview"/>
      <LargeCards />
      <SmallCards />
    </div>
  )
}
