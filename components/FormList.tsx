"use client";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type form = {
  id: number;
  ownerId: string;
  published: boolean;
  content: JSON;
  submissions: number;
  shareUrl: string;
};

const FormList: React.FC<Props> = ({ form }) => {
  const router = useRouter();

  // const deleteFormHandler = async (formId: number) => {
  //   const data = await deleteForm(formId);

  //   if (data.success) {
  //     toast.success(data.message);
  //   } else {
  //     toast.error(data.message);
  //   }
  // };

  return (
    <div className="max-w-sm rounded-xl border border-gray-200 shadow-md p-4 bg-white">
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-gray-800">
          {form.content.formTitle}
        </h2>
        <p className="text-sm text-gray-500">
          Deploy your new project in one-click.
        </p>
      </div>

      <div className="mb-4">
        <Link href={`/dashboard/forms/${form.id}/submissions`}>
          <span className="text-blue-600 text-sm font-medium hover:underline">
            Submission - {form.submissions}
          </span>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => router.push(`/dashboard/forms/edit/${form.id}`)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition"
        >
          <PencilSquareIcon className="h-6 w-6" />
          Edit
        </button>

        <button
          onClick={() => deleteFormHandler(form.id)}
          className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FormList;
