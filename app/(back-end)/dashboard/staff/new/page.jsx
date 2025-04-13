"use client"
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import FormHeader from "../../../../../components/backoffice/FormHeader";
import TextInput from '../../../../../components/FormInputs/TextInput';
import SubmitButton from '../../../../../components/FormInputs/SubmitButton';
import { generateUserCode } from '../../../../../lib/generateUserCode';
import { makePostRequest } from '../../../../../lib/apiRequest';
import TextAreaInput from '../../../../../components/FormInputs/TextAreaInput';
import ToogleInput from '../../../../../components/FormInputs/toogleInput';
import { useRouter } from 'next/navigation';

export default function NewStaff(){
    const [loading,setLoading]=useState(false);
 const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({ defaultValues:{
  isActive:true,
}
});


 const isActive=watch("isActive"); 
   const router = useRouter();
 
   function redirect(){
     router.push("/dashboard/coupons");
   } 
  async function onSubmit(data){

    const code = generateUserCode('LFM',data.name); //you can use any codename you like 
    data.uniqueCode =code;
    makePostRequest(setLoading,"api/staff",data,"staff",redirect);

  }

  return(
    <div>
      <FormHeader title="New Staff"/>
       <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-4xl p-4 bg-white border
          border-gray-200 rounded-lg shadow sm:p-6 md:p-8
          dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
          " >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <TextInput label="staff's Full Name" name="name" register={register}
              errors={errors} />

              <TextInput label="staff's Password" name="password" type= "password" register={register}
              errors={errors} className="w-full"/>
      
              <TextInput  type="tel" label="staff's Phone Number" name="phone" register={register}
              errors={errors} className="w-full"/>

              <TextInput type="email" label="staff's Email Address" name="email" register={register}
              errors={errors} className="w-full"/>

              <TextInput label="staff's Physical Address" name="physicalAddress" register={register}
              errors={errors} className="w-full"/>

              <TextInput label="NIN" name="nin" register={register}
              errors={errors} className="w-full"/>


              <TextInput label="Date Of Birth" name="dob" type="date" register={register}
              errors={errors} className="w-full"/>
            

{/*              <TextInput label="staff Unique Code" name="uniqueCode" register={register}
              errors={errors} className="w-full"/>*/}
      
              
             
             <TextAreaInput label="Notes" name="note" register={register}
              errors={errors} isRequired={false} />
             
              <ToogleInput label="is staff active" name="isActive" trueTitle="Active"
                falseTitle="Draft" register={register}/>

            </div>
            <SubmitButton isLoading={loading} buttonTitle="Create staff" loadingButtonTitle="creating coupon please wait ..."/>
          </form>
    </div>
  );
}