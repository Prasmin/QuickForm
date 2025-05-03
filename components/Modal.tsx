"use client";

import React, { useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import GenerateFormInput from "./GenerateFormInput";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create New Form
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 drop-shadow-xl backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Header */}
            <h2 className="text-xl font-semibold mb-2">Write a prompt</h2>
            <p className="text-sm text-gray-500 mb-4">
              Write a clean prompt to get better results.
            </p>

            {/* Form */}
            <div className="grid gap-4">
              <GenerateFormInput />
            </div>

            {/* Footer */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
              >
                Cancel
              </button>
              {/* Optional submit button */}
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
