import React from "react";
import GenerateFormInput from "./GenerateFormInput";

type SuggestionText = {
  label: string;
  text: string;
};

const suggestionBtnText: SuggestionText[] = [
  {
    label: "Job Application",
    text: "Develop a basic job application form that serves as a one-page solution form collecting essential information from applicants.",
  },
  {
    label: "Registration Form",
    text: "Create a course registration form suitable form any scheool or instituition.",
  },
  {
    label: "Feedback Form",
    text: "Create a client feedback form to gather valuable insights from any clients.",
  },
];

const HeroSection = () => {
  return (
    <section className="mx-auto py-30 flex flex-col   items-center min-h-screen">
      <div className=" ">
        <h1 className="font-bold sm:text-4xl text-xl text-center  ">
          Create Forms in Seconds with AI
        </h1>
      </div>

      {/* create input field */}
      <GenerateFormInput />
      <div className="space-x-2 pt-3 flex ">
        {suggestionBtnText.map((item: SuggestionText, index: number) => (
          <button
            key={index}
            className="sm:px-2 hover:bg-gray-200  rounded-full sm:text-sm text-xs sm:h-10 p-2 border-1 border-black"
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

// <p>Create Forms in Seconds with A</p>
