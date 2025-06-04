"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'
import FormHeader from '@/components/backoffice/FormHeader';
import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest';
import { makePutRequest } from '@/lib/apiRequest';
import SelectInput from '@/components/FormInputs/SelectInput';
import ToogleInput from '@/components/FormInputs/toogleInput';
import { useRouter } from 'next/navigation';


export default function NewCategoryForms({updateData={}}) { //this is being done like this ,, because of when i am creating a category

  const initialImageUrl =updateData?.imageUrl??"";
  const id=updateData?.id ??"";
  const [imageUrl,setImageUrl] = useState(initialImageUrl);

  const [loading,setLoading]=useState(false);
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({ defaultValues:{
    isActive:true,
    ...updateData,
  }
});
const isActive=watch("isActive");
    const router = useRouter();
  
    function redirect(){
      router.push("/dashboard/categories");
    }

  async function onSubmit(data){ //form function
   
       const slug = generateSlug(data.title);
    data.slug=slug;
    data.imageUrl =imageUrl;
    console.log(data);
    if(id){
      data.id=id
      //make put request 
      makePutRequest(
        setLoading,
        endpoint,
        data,
        resourceName,
        redirect
      );
      console.log("updating request for: ", data)

    }else{
    // we make a post request 
   
    makePostRequest(
      setLoading,
      'api/categories',
      data,
      "Category",
      reset,
      redirect
    );

    setImageUrl(""); //this is to clear the image after posting it 

    //fetching of the data from the form
 
  }
     
    }
 
  return (
    <div>
   
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Category Title" name="title" register={register}
        
        errors={errors} />

         {/*
         
         
         
         */}
        
        <TextAreaInput label="Category Description" name="description" register={register}
        errors={errors} />
        <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="categoryImageUploader"  label="Category Image"/>
        <ToogleInput label="publish your Category" name="isActive" trueTitle="Active"
                      falseTitle="Draft" register={register}/>
      </div>
      <SubmitButton isLoading={loading} buttonTitle={id?"update category" :"create category"} loadingButtonTitle={`${id?"updating":"create"}  category please wait"`}/>
    </form>

    </div>

  );
}
