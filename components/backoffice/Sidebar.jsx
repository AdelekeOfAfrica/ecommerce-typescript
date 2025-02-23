import React from 'react';
import Link from 'next/link';


export default function Sidebar() {
  return (
    <div className="bg-slate-800 space-y-6 w-52">
    
      <Link href="#">
        Logo
      </Link>

      <div className="spac-y-4">
      <Link href="#">  Dashboard </Link>
      <Link href="#">  Catalogue  </Link>
      <Link href="#">  Customers </Link>
      <Link href="#">  Markets </Link>
      <Link href="#">  Farmers</Link>
      <Link href="#">  Others </Link>
      <Link href="#">  Staffs </Link>
      <Link href="#">  Settings </Link>
      <Link href="#">  Online Store </Link>
      </div>
    </div>
  )
}
