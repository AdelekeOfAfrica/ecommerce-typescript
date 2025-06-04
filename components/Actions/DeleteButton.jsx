'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Trash } from 'lucide-react';

export default function DeleteButton({ endpoint, title }) {
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  async function handleDelete() {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recall this action!",
      icon: "warning",
      showCancelButton: true,
      showDenyButton:true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // try {
        //   const res = await fetch(`${baseUrl}/api/${endpoint}`, {
        //     method: "DELETE",
        //   });

        try{
         const res = await fetch(`${baseUrl}/api/${endpoint}`, {
          method: "DELETE",
        });
          console.log(res)
          if (res.ok) {
            toast.success(`${title} deleted successfully`);
            router.refresh();
          } else {
            toast.error(`Failed to delete ${title}`);
          }
        } catch (error) {
          toast.error("Something went wrong!");
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });
  }

  return (
    <>
      {loading ? (
        <button
          disabled
          type="button"
          className="mt-4 text-white bg-red-700 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800 inline-flex items-center"
        >
          Deleting {title}...
        </button>
      ) : (
        <button
          onClick={handleDelete}
          type="button"
          className="flex items-center font-medium text-red-600 dark:text-red-500"
        >
           <Trash className="mr-2 w-4 h-4"/>
          Delete {title}
        </button>
      )}
    </>
  );
}
