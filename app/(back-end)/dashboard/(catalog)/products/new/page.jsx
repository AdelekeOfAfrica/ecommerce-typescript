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
import ArrayItemInput from '../../../../../../components/FormInputs/ArrayItemInput';

export default function NewProduct() {


  //tags function
  const[tags,setTags]=useState([]); 


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
    data.tags=tags;
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

        {/* Array Item Input */}

       <ArrayItemInput setItems={setTags} items={tags}
       itemTitle="Tag"/>

      
       

        {/* Product Description */}
        <TextAreaInput label="Product Description" name="Description" register={register} errors={errors} />

        {/* Submit Button */}
        <SubmitButton isLoading={loading} buttonTitle="Create Product" loadingButtonTitle="Creating Product... Please wait" />
    </form>
</div>



  );
}
