import AiGeneratedForm from "../../../../../components/AiGeneratedForm";
import prisma from "../../../../../lib/prisma";
import React from "react";

const Edit = async ({
  params,
}: {
  params: { formId: string; formTitle: string };
}) => {
  const { formId } = params;

  if (!formId) {
    return (
      <h1 className="text-red-500 text-xl">No form id found for id {formId}</h1>
    );
  }

  const form = (await prisma.form.findUnique({
    where: {
      id: Number(formId),
    },
  })) as { content: { formTitle: string };

  console.log(form);

  return (
    <div className="max-w-3xl mx-auto my-6 p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-center text-gray-800">
          {form?.content?.formTitle || "NA"}
        </h1>
      </div>
      <div>
        <AiGeneratedForm form={form} isEditMode={true} />
      </div>
    </div>
  );
};

export default Edit;
