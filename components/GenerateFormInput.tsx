"use client";

import React, { useActionState, useEffect, useState } from "react";

import { SparklesIcon } from "@heroicons/react/16/solid";
import { useFormStatus } from "react-dom";
import { generateForm } from "../actions/generateForm";
import toast from "react-hot-toast";

type InitialState = {
  success: boolean;
  message: string;
  data?: unknown;
};

const initialState: InitialState = {
  success: false,
  message: "",
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className=" bg-black text-white sm:p-3 p-1 hover:bg-gray-600 rounded-md sm:text-sm text-xs"
    >
      <SparklesIcon className="h-4 w-4 inline-block mr-1" />
      {pending ? <span>Generating Form...</span> : <span>Generate Form</span>}
    </button>
  );
};

const GenerateFormInput: React.FC<{ text?: string }> = ({ text }) => {
  const [description, setDescription] = useState<string | undefined>("");
  const [state, formAction] = useActionState(generateForm, initialState);
  console.log("Description:", description);
  console.log("State:", state);

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    console.log("Input changed:", e.target.value);
  };

  useEffect(() => {
    setDescription(text || "");
  }, [text]);

  useEffect(() => {
    if (state?.success) {
      toast(state.message);
    } else if (state?.message) {
      toast.error(state.message);
    }
  }, [state]);

  // This effect will log the current state whenever it changes
  useEffect(() => {
    console.log("Current form state:", state);
  }, [state]);

  return (
    <form action={formAction} className="pt-5 flex space-x-2">
      <input
        id="description"
        name="description"
        required
        value={description}
        onChange={changeEventHandler}
        type="text"
        placeholder="write a prompt to generate form...."
        className="border border-black w-full text-sm"
      />
      <SubmitButton />
    </form>
  );
};

export default GenerateFormInput;
