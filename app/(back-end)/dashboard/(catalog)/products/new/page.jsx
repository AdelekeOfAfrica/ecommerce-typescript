import React from 'react'
import {getData} from '@/lib/getData';
import NewProductForm from '../../../../../../components/backoffice/NewProductForm'

export default async function NewProduct() {
  const categoriesData = await getData("categories"); //end point for categories
  const usersData = await getData("users"); //route of the users 
  const farmersData =usersData.filter((user)=> user.role ==="FARMER");
  const farmers =farmersData.map((farmer)=>{
    return {
      id:farmer.id,
      title:farmer.name,
    }
  })
  const categories = categoriesData.map((category)=>{
    return {
      id:category.id,
      title:category.title,

    }
  });

  return (
   
    <NewProductForm categories={categories} farmers={farmers}/>
  )
}
