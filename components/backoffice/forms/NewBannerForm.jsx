"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'

import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest';
import ToogleInput from '@/components/FormInputs/toogleInput';
import { useRouter } from 'next/navigation';
import { makePutRequest } from '@/lib/apiRequest';

export default function NewBannerForm({updateData={}}) {
console.log(updateData)
  const initialImageUrl =updateData?.imageUrl??"";
  const id=updateData?.id ??"";
  console.log(id);
  const [imageUrl,setImageUrl] = useState(initialImageUrl);
  const [loading,setLoading]=useState(false);
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({ defaultValues:{
    isActive:true,
    ...updateData
  }
});

  const isActive=watch("isActive");
  const router = useRouter();
  
    function redirect(){
      router.push("/dashboard/banners");
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
                `api/banners/${id}`,
                data,
                'banner',
                redirect
              );
              console.log("updating request for: ", data)
        

    }else{

         makePostRequest(
      setLoading,
      'api/banners',
      data,
      "Banners",
      reset,
      redirect
    );

    setImageUrl("");  
    }
  //this is to clear the image after posting it 

    //fetching of the data from the form
 
  }
  return (
    <div>
    
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Banner Title" name="title" register={register}
        errors={errors}/>

      <TextInput type="url" label="Banner Link" name="link" register={register}
        errors={errors}/>


       {/* always remember to configure your image endpoint */}
       <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="bannerImageUploader"  label="Banner"/>
       
       <ToogleInput label="publish your banner" name="isActive" trueTitle="Active"
              falseTitle="Draft" register={register}/>
      </div>
      <SubmitButton isLoading={loading} buttonTitle={id?"update banner" :"create banner"} loadingButtonTitle={`${id?"updating":"create"}  banner please wait"`}/>
    </form>

    </div>

  );
}
