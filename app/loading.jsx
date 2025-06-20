import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-800 transition-colors duration-500">
      <div className="text-center space-y-6">
        {/* Logo */}
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" // Replace with your actual logo
          alt="Logo"
          className="w-20 h-20 mx-auto animate-bounce"
        />

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 dark:border-slate-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

        {/* Loading Text */}
        <p className="text-gray-700 dark:text-slate-100 text-lg font-semibold animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  )
}
