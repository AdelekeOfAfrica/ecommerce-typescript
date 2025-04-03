"use client"
import { Plus, X } from 'lucide-react'
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

export default function NewProduct() {
  const[tags,setTags]=useState(["tag1","tag2"]); 
  const[showTagForm,setShowTagForm]=useState(false);
  const [imageUrl,setImageUrl] = useState("");
  const categories =[{
    id:1,
    title:"category 1"

  },
  {
    id:2,
    title:"category 2"

  },
  {
    id:3,
    title:"category 3"

  },
  {
    id:4,
    title:"category 4"

  },
  {
    id:5,
    title:"category 5"

  },]

  const farmers =[{
    id:1,
    title:"farmer 1"

  },
  {
    id:2,
    title:"farmer 2"

  },
  {
    id:3,
    title:"farmer 3"

  },
  {
    id:4,
    title:"farmer 4"

  },
  {
    id:5,
    title:"farmer 5"

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
      'api/products',
      data,
      "Product",
      reset
    );

    setImageUrl(""); //this is to clear the image after posting it 

    //fetching of the data from the form
 
  }
  return (
<div>
    <FormHeader title="New Product" />
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Product Title" name="title" register={register} errors={errors} />

            <TextInput label="Product Sku" name="sku" register={register} errors={errors} className="w-full" />

            <TextInput label="Product Barcode" name="barcode" register={register} errors={errors} className="w-full" />

            <TextInput label="Product Price (Before Discount)" name="productPrice" type="number" register={register} errors={errors} className="w-full" />

            <TextInput label="Product Sale Price (Discount)" name="salePrice" type="number" register={register} errors={errors} className="w-full" />

            <SelectInput label="Select Category" name="categoryId" register={register} options={categories} errors={errors} className="w-full" />

            <SelectInput label="Select Farmer" name="farmerId" register={register} options={farmers} errors={errors} className="w-full" />

            <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="ProductImageUploader" label="Product Image" />
        </div>

        {/* Search Section - Aligned Left */}

        <div className="sm:grid-cols-2">

       {
  !showTagForm ? (  // Change to !showTagForm so button shows initially
    <button onClick={() => setShowTagForm(true)} 
      type="button" className="flex items-center space-x-2 text-slate-800 dark:text-slate-300 py-2 px-4"
    >
      <Plus/>
      <span>Add Tag</span>
    </button>
  ) : (
    <div className="flex items-center w-full justify-start mt-4">
      {/* Your search bar and other UI here */}
      <div className="relative w-full max-w-lg ml-4">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
       
    </div>
    <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="create Tags..." />

      </div>

      <button type="button" className=" shrink-0 ml-2 inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Plus className="w-4 h-4 me-2"/> Add
      </button>  

      <button onClick = {()=>setShowTagForm(false)}className=" ml-3 shrink-0 w-8 h-8 bg-red-400 rounded-full
      flex items-center justify-center">
        <X className="w-4 h-4 "/>
      </button>    
    </div>
  )
}


        </div>

      
       

        {/* Product Description */}
        <TextAreaInput label="Product Description" name="Description" register={register} errors={errors} />

        {/* Submit Button */}
        <SubmitButton isLoading={loading} buttonTitle="Create Product" loadingButtonTitle="Creating Product... Please wait" />
    </form>
</div>



  );
}
