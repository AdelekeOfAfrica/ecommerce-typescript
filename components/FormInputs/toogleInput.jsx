import React from 'react'

export default function ToogleInput({label, name, trueTitle,falseTitle,register

    ,className="sm:col-span-2 "
}) {
  return (
   <div className={`${className}`}>
          <div className="w-full sm:w-1/2 mt-2">
            <h2 className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50  mb-2">{label}</h2>
          </div>

          <div className="w-full sm:w-1/2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  {...register(name)}
                  type="checkbox"
                  defaultValue=""
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none
                  peer-focus:ring-4 peer-focus:ring-green-300
                  dark:peer-focus:ring-green-800 rounded-full
                  dark:bg-gray-700 peer-checked:after:translate-x-full
                  peer-checked:after:border-white after:content-['']
                  after:absolute after:top-[2px] after:left-[2px]
                  after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5
                  after:transition-all dark:border-gray-600 peer-checked:bg-green-500">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {name ? `${trueTitle}`: `${falseTitle}`}
                </span>
              </label>
          </div>
        </div>
  )
}
