"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'
import FormHeader from '@/components/backoffice/FormHeader';
import NewCategoryForms from '@/components/backoffice/forms/NewCategoryForms';


export default function NewCategory() {

 
  
  return (
    <div>
    <FormHeader title="New Category"/>
    <NewCategoryForms />

    </div>

  );
}
