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
import { generateCouponCode } from '../../../../../../lib/generateCouponCode';
import ToogleInput from '../../../../../../components/FormInputs/toogleInput';


export default function NewCoupon() {

  const [imageUrl,setImageUrl] = useState("");
  const [loading,setLoading]=useState(false);
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({ defaultValues:{
    isActive:true,
  }
});
 
  const isActive=watch("isActive");  
  async function onSubmit(data){ 

     makePostRequest(
       setLoading,
       'api/coupons',
       data,
       "coupon",
       reset
     );
  
  const couponCode = generateCouponCode(data.title,data.expiryDate);
  data.couponCode =couponCode;


  console.log(data);
  }
  return (
    <div>
    
    <FormHeader  title="New Coupon"/>
    <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
    " >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Coupon Title" name="title" register={register}
        errors={errors} className="w-full"/>

       

        <TextInput type="date" label="Coupon Expiry Date" name="expiryDate" register={register}
        errors={errors} className="w-full"/>
       
        <ToogleInput label="publish your Coupon" name="isActive" trueTitle="Active"
                             falseTitle="Draft" register={register}/>

      </div>
      <SubmitButton isLoading={loading} buttonTitle="Create Coupon" loadingButtonTitle="creating coupon please wait ..."/>
    </form>

    </div>

  );
}
