import { SignInButton } from "@clerk/nextjs";

import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between max-w-7xl items-center p-5 ">
        <h1 className="text-xl font-bold">QuickForm.AI</h1>
        <SignInButton forceRedirectUrl="/dashboard">
          <button className=" bg-black text-white sm:p-3 p-1 hover:bg-gray-600 rounded-md sm:text-sm text-xs">
            Dashboard
          </button>
        </SignInButton>
      </div>
    </header>
  );
};

export default Header;
