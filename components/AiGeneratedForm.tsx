import React, { useState } from "react";

type FormField = {
  label: string;
  type: string;
  value: string;
};

type AiGeneratedFormProps = {
  form: { content: { formFields: FormField[] } };
  isEditMode: boolean;
};

const AiGeneratedForm: React.FC<AiGeneratedFormProps> = ({
  form,
  isEditMode,
}) => {
  // Initialize state based on the form content for editing
  const [formData, setFormData] = useState(form.content.formFields);

  // Handle field changes for edit mode
  const handleFieldChange = (index: number, value: string) => {
    const updatedFormFields = [...formData];
    updatedFormFields[index].value = value;
    setFormData(updatedFormFields);
  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Form Fields</h2>
      {formData?.map((field: FormField, index: number) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type}
            value={field.value}
            onChange={(e) => handleFieldChange(index, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            disabled={!isEditMode} // Disable if not in edit mode
          />
        </div>
      ))}
      {isEditMode && (
        <button
          onClick={() => console.log("Save form data", formData)}
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default AiGeneratedForm;
