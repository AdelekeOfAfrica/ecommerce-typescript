"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'
import FormHeader from '../../../../../../components/backoffice/FormHeader';
import TextInput from '../../../../../../components/FormInputs/TextInput';
import SubmitButton from '../../../../../../components/FormInputs/SubmitButton';
import { useForm } from 'react-hook-form';
import TextAreaInput from '../../../../../../components/FormInputs/TextAreaInput';
import { generateSlug } from '../../../../../../lib/generateSlug';
import ImageInput from '../../../../../../components/FormInputs/ImageInput'
import { makePostRequest } from '../../../../../../lib/apiRequest';
import SelectInput from '../../../../../../components/FormInputs/SelectInput';

export default function NewCategory() {

  const [imageUrl,setImageUrl] = useState("");
  const markets =[{
    id:1,
    title:"market 1"

  },
  {
    id:2,
    title:"market 2"

  },
  {
    id:3,
    title:"market 3"

  },
  {
    id:4,
    title:"market 4"

  },
  {
    id:5,
    title:"market 5"

  },]
  const [loading,setLoading]=useState(false);
  const {register,reset,handleSubmit,formState:{errors}}=useForm();
  async function onSubmit(data){ //form function
   
       const slug = generateSlug(data.title);
    data.slug=slug;
    data.imageUrl =imageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      'api/categories',
      data,
      "Category",
      reset
    );

    setImageUrl(""); //this is to clear the image after posting it 

    //fetching of the data from the form
 
  }
  return (
    <div>
    <FormHeader title="New Category"/>
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Category Title" name="title" register={register}
        
        errors={errors} className="w-full"/>

       
         <SelectInput  multiple={true}  label="Select Markets" name="marketIds" register={register} options={markets}
        
        errors={errors} className="w-full" />
        <TextAreaInput label="Category Description" name="Description" register={register}
        errors={errors} />
        <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="categoryImageUploader"  label="Category Image"/>
      </div>
      <SubmitButton isLoading={loading} buttonTitle="category Title" loadingButtonTitle="creating category please wait ..."/>
    </form>

    </div>

  );
}
