"use client"

import{useState,React} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {toast} from "react-hot-toast";
import {FaFacebook, FaGithub,FaGoogle} from "react-icons/fa";
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/TextInput';

export default function RegisterForm() {
    const router =useRouter();
    const{register,handleSubmit,reset,formState:{errors}}=useForm();
    const [loading , setLoading] = useState(false);
    const [emailErr,setEmailErr] =useState("");

    async function onSubmit(data){
        try{
            console.log(data);
            setLoading(true);
            const baseUrl =process.env.NEXT_PUBLIC_BASE_URL;
            const response = await fetch(`${baseUrl}/api/users`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(data),

            });
            
            const responseData = await response.json();
            if(response.ok){
              
                console.log(responseData);
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
                    console.error("Server Error:",responseData.error );
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
           
                <TextInput label="Name" name="Name" register={register}
                errors={errors} type="name" className="sm:col-span-2 mb-3"/>
            
                {emailErr && <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>}
            </div>


            <div className="mb-5">
           
                <TextInput label="Email" name="email" register={register}
                errors={errors} type="email" className="sm:col-span-2 mb-3" />
            
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
            
                <TextInput label="Password" name="password" register={register}
                errors={errors} type="password" className="sm:col-span-2 mb-3" />
           

                {errors.password && (
                    <small className="text-red-600 text-sm">
                        Password field is required
                        <small className="text-red-600 text-sm">
                            {emailErr}
                        </small>
                    </small>
                
                )}
            </div>
           

            <div className="flex justify-center mt-4">
                <SubmitButton
                    isLoading={loading}
                    buttonTitle="Create User"
                    loadingButtonTitle="Creating a new user please wait ..."
                />
            </div>

            <div className="mt-4 text-center">
            <label htmlFor="terms" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Already have an account?{' '}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                Kindly login
                </a>
            </label>
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
