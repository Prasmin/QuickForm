import React from "react";

import Modal from "../../../../components/Modal";
import { getForms } from "../../../../actions/getForms";
import FormList from "../../../../components/FormList";

const MyForm = async () => {
  const forms = await getForms();
 
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
      <div className="grid grid-cols-3 gap-2">{
        forms?.data?.map((form, index: number) => (
          <FormList key={index} form={form}/>

        }</div>
    </div>
  );
};

export default MyForm;
