

import React from 'react'
import {getData} from '@/lib/getData';
import NewMarketForm from '../../../../../components/backoffice/NewMarketForm'

export default async function  NewMarket() {
  const categoriesData = await getData("categories"); 
  const categories = categoriesData.map((category)=>{
    return {
      id:category.id,
      title:category.title,

    }
  });
  return (
   <NewMarketForm categories={categories}/>
  )
}
