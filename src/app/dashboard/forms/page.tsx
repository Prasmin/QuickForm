// import React from "react";
// import prisma from "../../../../lib/prisma";
// // import { getForms } from "../../../../actions/getForms";
// // import { useParams } from "next/navigation";

// const FormPage = async ({ params }: { params: { formId: string } }) => {
//   const formId = params;
//   console.log("FORM ID:", formId);

//   const form = await prisma.form.findUnique({
//     where: { id: Number(formId) },
//   });

//   if (!form) {
//     return (
//       <h1 className="text-red-500 text-xl">
//         No form found for id {form.formId}
//       </h1>
//     );
//   }

//   return <div>FormPage-{formId}</div>;
// };
// export default FormPage;
