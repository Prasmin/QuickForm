import React from "react";

const GenerateFormInput = () => {
  return (
    <div className="pt-5 flex space-x-2">
      <input
        type="text"
        placeholder="write a prompt to generate form...."
        className="border border-black w-full text-sm"
      />

      <button className=" bg-black text-white sm:p-3 p-1 hover:bg-gray-600 rounded-md sm:text-sm text-xs">
        Generate Form
      </button>
    </div>
  );
};

export default GenerateFormInput;
