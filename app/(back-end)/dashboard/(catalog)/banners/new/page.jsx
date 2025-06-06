"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'
import FormHeader from '@/components/backoffice/FormHeader';
import NewBannerForm from '@/components/backoffice/forms/NewBannerForm';



export default function NewBanner() {

 
  
  return (
    <div>
    <FormHeader title="Banners"/>
     <NewBannerForm />
  
   

    </div>

  );
}
