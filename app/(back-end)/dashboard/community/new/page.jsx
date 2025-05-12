import React from 'react';
import NewTrainingForm from '../../../../../components/backoffice/NewCommunityForm';
import {getData} from '@/lib/getData';
export default async function  NewTraining() {
  const categoriesData = await getData("categories"); //end point for categories
  const categories = categoriesData.map((category)=>{
    return {
      id:category.id,
      title:category.title,

    }
  });
  return (
    <NewTrainingForm categories={categories}/>
  );
}