"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'
import FormHeader from '@/components/backoffice/FormHeader';
import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/ImageInput';
import { makePostRequest } from '@/lib/apiRequest';
import SelectInput from '@/components/FormInputs/SelectInput';
import ToogleInput from '@/components/FormInputs/toogleInput';
import Editor from '@/components/FormInputs/TextEditor'
import { useRouter } from 'next/navigation';

export default function NewTrainingForm({categories}) {

  const [imageUrl,setImageUrl] = useState("");

  const [loading,setLoading]=useState(false);
  const {register,reset,watch,setValue,handleSubmit,formState:{errors}}=useForm({ defaultValues:{
    isActive:true,
  }
});




const isActive=watch("isActive");
  const router = useRouter();

  function redirect(){
    router.push("/dashboard/community");
  }
  async function onSubmit(data){ //form function
   
       const slug = generateSlug(data.title);
    data.slug=slug;
    data.imageUrl =imageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      'api/community',
      data,
      "Community",
      reset,
      redirect
    );

    setImageUrl(""); //this is to clear the image after posting it 

    //fetching of the data from the form
 
  }
  return (
    <div>
    <FormHeader title="New Training"/>
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Training Title" name="title" register={register}
        
        errors={errors} className="w-full"/>

       
         <SelectInput   label="Select Categories" name="categoryId" register={register} options={categories}
        
        errors={errors} className="w-full" />
        <TextAreaInput label="Training Description" name="Description" register={register}
        errors={errors} />
        <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="TrainingImageUploader"  label="Training Thumbnail"/>
        {/*Quill editor */}
         <div className="sm:col-span-2">
           

            <Editor label="Blog Content" name="blogContent"   setValue={setValue} />
         </div>
         {/*End of Quill Editor*/}
        <ToogleInput label="publish your Training" name="isActive" trueTitle="Active"
                      falseTitle="Draft" register={register}/>
      </div>
      <SubmitButton isLoading={loading} buttonTitle="publish your training" loadingButtonTitle="creating category please wait ..."/>
    </form>

    </div>

  );
}
