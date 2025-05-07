import React from "react";
import { EyeIcon } from "@heroicons/react/16/solid";

type Props = {
  noOfSubmissions: number;
};

const Analytics: React.FC<Props> = ({ noOfSubmissions }) => {
  return (
    <div className="max-w-sm bg-white shadow-md shadow-yellow-600 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Job Application</h2>
        <EyeIcon className="h-6 w-6 text-gray-500" />
      </div>
      <div>
        <div className="text-2xl font-semibold">{noOfSubmissions}</div>
        <p className="text-sm text-gray-600">
          Total submissions to your forms.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
