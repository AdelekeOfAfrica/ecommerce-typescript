"use client"
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import FormHeader from "../../../../../components/backoffice/FormHeader";
import TextInput from '../../../../../components/FormInputs/TextInput';
import SubmitButton from '../../../../../components/FormInputs/SubmitButton';

import {generateUserCode} from '../../../../../lib/generateUserCode'
import { makePostRequest } from '../../../../../lib/apiRequest';
import TextAreaInput from '../../../../../components/FormInputs/TextAreaInput';
import ToogleInput from '../../../../../components/FormInputs/toogleInput';
import { useRouter } from 'next/navigation';
import ImageInput from '../../../../../components/FormInputs/ImageInput';

export default function NewFarmer(){
    const [loading,setLoading]=useState(false);
    const [imageUrl,setImageUrl] = useState("");
 const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({ defaultValues:{
  isActive:true,
}
});


 const isActive=watch("isActive");  
   const router = useRouter();
 
   function redirect(){
     router.push("/dashboard/farmers");
   }
  async function onSubmit(data){

    const code = generateUserCode('LFF',data.name); //you can use any codename you like 
    data.uniqueCode =code;
    data.imageUrl =imageUrl;
    makePostRequest(setLoading,"api/farmers",data,"Farmer",redirect);
    setImageUrl("");

  }

  return(
    <div>
      <FormHeader title="New Farmer"/>
       <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-4xl p-4 bg-white border
          border-gray-200 rounded-lg shadow sm:p-6 md:p-8
          dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
          " >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <TextInput label="Farmer's Full Name" name="name" register={register}
              errors={errors} className="w-full"/>
      
              <TextInput  type="tel" label="Farmer's Phone Number" name="phone" register={register}
              errors={errors} className="w-full"/>

              <TextInput type="email" label="Farmer's Email Address" name="email" register={register}
              errors={errors} className="w-full"/>

              <TextInput label="Farmer's Physical Address" name="physicalAddress" register={register}
              errors={errors} className="w-full"/>

              <TextInput label="Farmer's Contact Person" name="contactPerson" register={register}
              errors={errors} className="w-full"/>

<TextInput type="tel" label="Farmer's Contact Person Number" name="contactPersonNumber" register={register}
              errors={errors} className="w-full"/>

{/*              <TextInput label="Farmer Unique Code" name="uniqueCode" register={register}
              errors={errors} className="w-full"/>*/}
      
              <TextAreaInput label="Farmer's Payment Terms" name="paymentTerms" register={register}
              errors={errors} className="w-full"/>
             
             <TextAreaInput label="Notes" name="note" register={register}
              errors={errors} isRequired={false} className="w-full"/>
             
               <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="FarmerProfileImageUploader" label="Farmer Profile Image" />
              <ToogleInput label="publish your Farmer" name="isActive" trueTitle="Active"
                falseTitle="Draft" register={register} isRequiredd={false}/>

            </div>
            <SubmitButton isLoading={loading} buttonTitle="Create Farmer" loadingButtonTitle="creating coupon please wait ..."/>
        </form>
    </div>
  );
}