import React from 'react'

export default function TextAreaInput({label,name,register,errors,isRequired=true, type="text",className="sm:col-span-2",
  defaultValue=""
}) {
  return (
    <div className={className}>
      <label htmlFor="{name}"className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50  mb-2">{label}</label>
      <div className="mt-2">
        <textarea
        {...register(name, { required: isRequired })}
        rows={3}
        name={name}
        id={name}
        defaultValue={defaultValue}
        autoComplete={name}
        className="block w-full rounded border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
          placeholder:text-gray-400 focus:ring-green-700 dark:focus:ring-slate-500 focus:ring-inset  sm:text-sm 
          sm:leading-6 dark:bg-transparent dark:text-slate-100" placeholder={`Type the ${label.toLowerCase()}`} />


        {errors?.[name] && (
          <span className="text-sm text-red-600">
            {label} is required
          </span>
        )}

      </div>
      
    </div>
  )
}
