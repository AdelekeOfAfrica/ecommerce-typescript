
"use client";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      
      <Button  onClick={() => setOpenModal(true)}  className="flex items-center space-x-1 text-green-500 dark:text-slate-100">
            <HelpCircle/>
            <span>Help</span>
        </Button>
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-2xl p-6 backdrop-blur-md transition-all duration-300">
                <ModalHeader className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                Need Help With Shopping, Talk to our help desk
                </ModalHeader>

                <ModalBody>
                    <div className="grid grid-cols-2"></div>
                </ModalBody>

             
            </div>
        </Modal>

    </>
  );
}
