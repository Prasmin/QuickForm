import React from "react";
import { getForms } from "../../../../actions/getForms";
// import { useParams } from "next/navigation";

const FormPage = async () => {
  const form = await getForms();
  console.log(form, "form");

  // const { formId } = useParams();
  // console.log(formId, "formId");

  return <div>FormPage</div>;
};
export default FormPage;
