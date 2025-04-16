"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'
import FormHeader from '../../../../../components/backoffice/FormHeader';
import TextInput from '../../../../../components/FormInputs/TextInput';
import SubmitButton from '../../../../../components/FormInputs/SubmitButton';
import { useForm } from 'react-hook-form';
import TextAreaInput from '../../../../../components/FormInputs/TextAreaInput';
import { generateSlug } from '../../../../../lib/generateSlug';
import ImageInput from '../../../../../components/FormInputs/ImageInput'
import { makePostRequest } from '../../../../../lib/apiRequest';
import ToogleInput from '../../../../../components/FormInputs/toogleInput';
import { useRouter } from 'next/navigation';
import SelectInput from '../../../../../components/FormInputs/SelectInput';
export default function NewBanner() {

  const [logoUrl,setLogoUrl] = useState("");
  const [loading,setLoading]=useState(false);
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm(
    { defaultValues:{
      isActive:true,
    }
    }
  );

    const cartegories =[{
      id:1,
       title:"Cartegory 1"
  
    },
    {
      id:2,
      title:"Cartegory 2"
  
    },
    {
      id:3,
      title:"Cartegory 3"
  
    },
    {
      id:4,
      title:"Cartegory 4"
  
    },
    {
      id:5,
      title:"Cartegory 5"
  
    },]
  const isActive=watch("isActive");
    const router = useRouter();
  
    function redirect(){
      router.push("/dashboard/markets");
    }
  async function onSubmit(data){ //form function
   

    const slug = generateSlug(data.title);
    data.slug=slug;
    data.logoUrl =logoUrl;
    console.log(data);
    
    makePostRequest(
      setLoading,
      'api/markets',
      data,
      "Markets",
      reset,
      redirect
    );

    setLogoUrl(""); //this is to clear the image after posting it 

    //fetching of the data from the form

  }
  return (
    <div>
    <FormHeader title="Create a new market "/>
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Market Title" name="title" register={register} className="w-full"
        errors={errors}/>

        <SelectInput  multiple={true}  label="Select categories" name="categoryIds" register={register} options={cartegories}   
          errors={errors} className="w-full" />


       {/* always remember to configure your image endpoint */}
       <ImageInput imageUrl={logoUrl} setImageUrl={setLogoUrl} endpoint="marketLogoUploader"  label="Market Logo"/>
       

        <TextAreaInput label="Market Description" name="description" register={register}
        errors={errors}/>

        


        <ToogleInput label="publish your Farmer" name="isActive" trueTitle="Active"
          falseTitle="Draft" register={register}/>

      </div>
      <SubmitButton isLoading={loading} buttonTitle="Create Market" loadingButtonTitle="creating a new market please wait ..."/>
    </form>

    </div>

  );
}
