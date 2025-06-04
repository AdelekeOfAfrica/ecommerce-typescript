import React from 'react'
import NewCategoryForms from '@/components/backoffice/forms/NewCategoryForms';
import FormHeader from '@/components/backoffice/FormHeader';
import {getData} from "@/lib/getData";
export default async function updateCategory({params:{id}}) {
  const category = await getData(`/categories/${id}`);
  console.log(category)
  return (
    <div>
      <FormHeader title="Update Category"/>
      <NewCategoryForms updateData={category} />
    </div>
  )
}
