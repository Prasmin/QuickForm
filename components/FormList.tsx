import React from "react";

type Form = {
  id: number;
  ownerId: string;
  published: boolean;
  content: JSON;
  submissions: number;
  shareUrl: string;
};

const FormList = ({ Form }) => {
  return <div>FormList</div>;
};

export default FormList;
