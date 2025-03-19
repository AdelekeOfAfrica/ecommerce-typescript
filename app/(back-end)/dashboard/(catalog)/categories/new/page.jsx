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

export default function NewCategory() {

  const [imageUrl,setImageUrl] = useState("")
  const {register,handleSubmit,formState:{errors}}=useForm();
  async function onSubmit(data){
    const slug = generateSlug(data.title);
    data.slug=slug
    console.log(data);
  }
  return (
    <div>
    <FormHeader title="New Category"/>
    <form onClick={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Category Title" name="title" register={register}
        errors={errors}/>
        <TextAreaInput label="Category Description" name="Description" register={register}
        errors={errors} />
        <ImageInput imageUrl={imageUrl} endpoint="categoryImageUploader" setImageUrl={setImageUrl} label="Category Image"/>
      </div>
      <SubmitButton isLoading={false} buttonTitle="category Title" loadingButtonTitle="creating category please wait ..."/>
    </form>

    </div>

  );
}
