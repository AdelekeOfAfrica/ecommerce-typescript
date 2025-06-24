import { Info } from 'lucide-react'
import React from 'react'

export default function VerifyMail() {
  return (
   <div className="max-w-2xl mx-auto min-h-screen mt-8">
     <div id="alert-additional-content-1" className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <div className="flex items-center">
    <Info className="flex shrinkk-0 w-4  h-4 me-2"/>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium">Email Sent, Verify your account</h3>
  </div>
  <div className="mt-2 mb-4 text-sm">
        Thank you for creating an account with us , we have sent you an email, kindly check your inbox.
        Click on the link to complete your onboarding process
  </div>
 
    </div>
   </div>
  )
}
