"use client"
import { X } from 'lucide-react'
import React from 'react'
import FormHeader from '../../../../../../components/backoffice/FormHeader';
import TextInput from '../../../../../../components/FormInputs/TextInput';
import { useForm } from 'react-hook-form';

export default function NewCategory() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  return (
    <div>
    <FormHeader title="New Category"/>
    <form  className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Category Title" name="title" register={register}
        errors={errors}/>
      </div>
    </form>

    </div>

  );
}
