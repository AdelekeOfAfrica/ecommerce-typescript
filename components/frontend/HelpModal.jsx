
"use client";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import { HelpCircle,Headphones, Truck, CopySlash, MessageCircle } from "lucide-react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      
      <Button  onClick={() => setOpenModal(true)}  className="flex items-center space-x-1 text-green-500 dark:text-slate-100">
            <HelpCircle/>
            <span>Help</span>
        </Button>
        <Modal show={openModal}  onClose={() => setOpenModal(false)} popup >
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-2xl p-6 backdrop-blur-md transition-all duration-300">
                <ModalHeader className="text-center  text-xl font-semibold text-gray-800 dark:text-white">
                Need Help With Shopping, Talk to our help desk
                </ModalHeader>

                <ModalBody>
                    <div className="grid grid-cols-2 gap-6">
                      <Link href="tel:00000" className="flex items-center space-x-2 text-green-500 dark:text-slate-100">
                      
                      <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <Headphones className="w-6 h-6 text-lime-800"/>
                      </div>
                     
                      <span>Call:00000000</span>

                      </Link>

                       <Link href="/track" className="flex items-center space-x-2 text-green-500 dark:text-slate-100">
                      
                      <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <Truck className="w-6 h-6 text-lime-800"/>
                      </div>
                     
                      <span>Track your order</span>

                      </Link>

                       <Link href="/refund" className="flex items-center space-x-2 text-green-500 dark:text-slate-100">
                      
                      <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <CopySlash className="w-6 h-6 text-lime-800"/>
                      </div>
                     
                      <span>Request for refund</span>

                      </Link>

                       <Link href="/chat" className="flex items-center space-x-2 text-green-500 dark:text-slate-100">
                      
                      <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <MessageCircle className="w-6 h-6 text-lime-800"/>
                      </div>
                     
                      <span>Chat with our representative </span>

                      </Link>
                    </div>
                </ModalBody>

             
            </div>
        </Modal>

    </>
  );
}
