"use client"

import{useState,React} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {toast} from "react-hot-toast";
import {FaGithub,FaGoogle} from "react-icons/fa";

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
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input 
            {...register("name",{required:true})}
            name ="name" type="name" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="names"  />
        </div>


        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input 
            {...register("email",{required:true})}
            name ="email" type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="email@flowbite.com"  />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input 
            
            {...register("password",{required:true})}
            type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  />
        </div>
        <div className="mb-5">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
            <input  type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-3">Register new account</button>
        </form>

    </div>

  )
}
