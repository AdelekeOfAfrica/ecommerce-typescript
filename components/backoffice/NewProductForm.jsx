"use client"
import { Plus, Watch, X } from 'lucide-react'
import React, { useState } from 'react'
import FormHeader from '@/components/backoffice/FormHeader';
import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest';
import SelectInput from '@/components/FormInputs/SelectInput';
import ArrayItemInput from '@/components/FormInputs/ArrayItemInput';
import ToogleInput from '@/components/FormInputs/toogleInput';
import { useRouter } from 'next/navigation';
import {generateUserCode} from '@/lib/generateUserCode';

export default function NewProductForm({categories,farmers}) {


  //tags function
  const[tags,setTags]=useState([]); 



  const [imageUrl,setImageUrl] = useState("");

  const [loading,setLoading]=useState(false);
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      isActive:true,
      isWholesale:false
    }
  });
  const isActive=watch("isActive");
  const isWholesale=watch("isWholesale","iswholesale:false");
    const router = useRouter();
  
    function redirect(){
      router.push("/dashboard/products");
    }
  async function onSubmit(data){ //form function
  
  const slug = generateSlug(data.title);
  const productCode =generateUserCode('LLP',data.title);
    data.slug=slug;
    data.imageUrl =imageUrl;
    data.tags=tags;
    data.Qty=1;
    data.productCode=productCode;
    console.log(data);
    makePostRequest(
      setLoading,
      'api/products',
      data,
      "Product",
      reset,
      redirect
    );

    setImageUrl(""); //this is to clear the image after posting it 
    setTags([]);
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

            <TextInput label="Product Stock" name="productStock" type="number" register={register} errors={errors} className="w-full" />

            <SelectInput label="Select Category" name="categoryId" register={register} options={categories} errors={errors} className="w-full" />

            <SelectInput label="Select Farmer" name="farmerId" register={register} options={farmers} errors={errors} className="w-full" />
            <ToogleInput label="support wholesale selling" name="isWholesale" trueTitle="supported"
              falseTitle="not supported" register={register}/>



            {
              isWholesale&&(
                <>
                <TextInput label="wholesale Price" name="wholesalePrice" type="number" register={register} errors={errors} className="w-full" />

            <TextInput label="minimum  wholesale quantity" name="wholesaleQty" type="number" register={register} errors={errors} className="w-full" />

            <TextInput label="Unit of measurement" name="unit"  register={register} errors={errors} /> 
                </>
                
              )

              
            }
           

            <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="ProductImageUploader" label="Product Image" />
        </div>

        {/* Array Item Input */}

       <ArrayItemInput setItems={setTags} items={tags}
       itemTitle="Tag"/>

      
       

        {/* Product Description */}
        <TextAreaInput label="Product Description" name="Description" register={register} errors={errors} />

       
       <ToogleInput label="publish your prodduct" name="isActive" trueTitle="Active"
       falseTitle="Draft" register={register}/>





        {/* Submit Button */}
        <SubmitButton isLoading={loading} buttonTitle="Create Product" loadingButtonTitle="Creating Product... Please wait" />
    </form>
</div>



  );
}
