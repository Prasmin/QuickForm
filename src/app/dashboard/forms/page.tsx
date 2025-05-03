import React from "react";

import Modal from "../../../../components/Modal";
import { getForms } from "../../../../actions/getForms";

const MyForm = async () => {
  const forms = await getForms();
  console.log("Forms", forms);
  return (
    <div>
      <section className="flex justify-between items-center p-4 ">
        <div>
          <h1 className="font-bold text-xl">My Form</h1>
        </div>
        <div>
          <Modal />
        </div>
      </section>
      <div className="grid grid-cols-3 gap-2">{}</div>
    </div>
  );
};

export default MyForm;
