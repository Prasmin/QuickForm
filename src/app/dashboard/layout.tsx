import React from "react";

import DashboardSidebar from "../../../components/ui/DashboardSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <main className="mx-6 my-4 w-full">{children}</main>
    </div>
  );
};

export default layout;
