"use client";
import React, { useState } from "react";
import { getForms } from "../../../../actions/getForms";
import { PlusIcon } from "@heroicons/react/16/solid";
import Modal from "../../../../components/Modal";

const MyForm = () => {
  const [open, setOpen] = useState(false);
  // const form = await getForms();
  return (
    <div>
      <section className="flex justify-between items-center p-4 ">
        <div>
          <h1 className="font-bold text-xl">My Form</h1>
        </div>
        <button className="flex items-center space-x-2 border p-3  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out">
          <PlusIcon className="h-5 w-5 " />
          <span>Create New Form</span>
        </button>
      </section>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default MyForm;
