"use client"

import{useState,React} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {toast} from "react-hot-toast";
import {FaFacebook, FaGithub,FaGoogle} from "react-icons/fa";
import SubmitButton from '@/components/FormInputs/SubmitButton';

export default function RegisterForm() {
    const Router =useRouter();
    const{register,handleSubmit,reset,formState:{errors}}=useForm();
    const [loading , setLoading] = useState(false);
    const [emailErr,setEmailErr] =useState("");

    async function onSubmit(data){
        try{
            console.log(data);
            setLoading(true);
            const baseUrl =process.env.NEXT_PUBLIC_BASE_URL;
            const response = await fetch(`${baseUrl}/api/user`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(data),

            });
            const responseData = await response.json();
            
            if(response.ok){
                setLoading(false);
                toast.success("User Created Successfully");
                reset();
                router.push("/login");
            }else{
                setLoading(false);
                if(response.status ===409){
                    setEmailErr("User with email already exists");
                    toast.error("User with email already exists");
                }else{
                    console.error("Server Error:",responseData.message );
                    toast.error("oops something went wrong ");

                }
            }


        }catch(error){
            setLoading(false);
            console.log("Network Error:", error);
            toast.error("oops, something went wrong!")
           
        }
    }

  return (
    <div>

        <form  onSubmit ={handleSubmit(onSubmit)}className="max-w-sm mx-auto">

        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input 
            {...register("name",{required:true})}
            name ="name" type="name" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="names"  />

            {errors.name && (
                <small className="text-red-600 text-sm">
                    Name field is required
                    <small className="text-red-600 text-sm">
                        {emailErr}
                    </small>
                </small>
              
            )}
        </div>


        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input 
            {...register("email",{required:true})}
            name ="email" type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="email@company.com"  />
            {errors.email && (
                <small className="text-red-600 text-sm">
                    Email field is required
                    <small className="text-red-600 text-sm">
                        {emailErr}
                    </small>
                </small>
              
            )}
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input 
            
            {...register("password",{required:true})}
            type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="******" />

            {errors.password && (
                <small className="text-red-600 text-sm">
                    Password field is required
                    <small className="text-red-600 text-sm">
                        {emailErr}
                    </small>
                </small>
              
            )}
        </div>
        <div className="mb-5">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
            <input  type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />

            {errors.email && (
                <small className="text-red-600 text-sm">
                    Repeat password field is required
                    <small className="text-red-600 text-sm">
                        {emailErr}
                    </small>
                </small>
              
            )}
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <div className="flex justify-center mt-4">
            <SubmitButton
                isLoading={loading}
                buttonTitle="Create User"
                loadingButtonTitle="Creating a new user please wait ..."
            />
        </div>

        <div className="flex flex-col items-center w-full">
  <div className="flex items-center w-full my-4">
    <div className="w-full h-[1px] bg-slate-500"></div>
    <span className="mx-2 text-slate-700">OR</span>
    <div className="w-full h-[1px] bg-slate-500"></div>
  </div>

  <div className="grid grid-cols-3 gap-4 w-full">
    <button
      type="button"
      onClick={() => signin("google")}
      className="text-slate-950 bg-white hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center dark:focus:ring-slate-100 border border-slate-200"
    >
      <FaGoogle className="mr-2 text-red-600 w-4 h-4" />
      Google
    </button>

    <button
      type="button"
      onClick={() => signin("github")}
      className="text-slate-950 bg-white hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center dark:focus:ring-slate-100 border border-slate-200"
    >
      <FaGithub className="mr-2 text-gray-800 w-4 h-4" />
      GitHub
    </button>

    <button
      type="button"
      onClick={() => signin("facebook")}
      className="text-slate-950 bg-white hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center dark:focus:ring-slate-100 border border-slate-200"
    >
      <FaFacebook className="mr-2 text-blue-600 w-4 h-4" />
      Facebook
    </button>
  </div>
</div>

        </form>

    </div>

  )
}
