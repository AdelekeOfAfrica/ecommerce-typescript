import { UploadDropZone } from "../../lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image"; 
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
    label, imageUrl = "",
    setImageUrl, className = "col-span-full",
    endpoint = "imageUploader"
}) {
    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4">
                <label htmlFor="course-image"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">{label}</label>
                {imageUrl && (
                    <button onClick={() => setImageUrl("")}
                        type="button"
                        className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4">
                        <Pencil className="w-5 h-5" />
                        <span>Change Image</span>
                    </button>
                )}
            </div>
            {
                imageUrl ? (
                    <Image src={imageUrl}
                        alt="Item Image"
                        width={1000}
                        height={667}
                        className="w-full h-64 object-contain" />
                ) : (
                    <UploadDropZone
                        endpoint={endpoint}
                        className="w-full" 
                        onClientUploadComplete={(res) => {
                            setImageUrl(res[0].ufsUrl);
                            toast.success("Image Uploaded Successfully");
                            console.log("Files:", res);
                            console.log("Upload Completed");
                        }}
                        onUploadError={(error) => {
                            toast.error("Oops! Something went wrong while uploading the image");
                            console.log(`ERROR! ${error.message}`);
                        }} />
                )
            }
        </div>
    );
}

