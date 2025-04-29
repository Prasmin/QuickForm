"use server";

import prisma from "../lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
// import { useSession } from "@clerk/nextjs";

export const getForms = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return { success: false, message: "User not found" };
    }

    const forms = await prisma.form.findMany({
      where: {
        ownerId: user.id,
      },
    });

    if (!forms) {
      return { success: false, message: "Form not found" };
    }

    // Parse the `content` for each form
    const parsedForms = forms.map((form) => ({
      ...form,
      content: JSON.parse(form.content as string), // 👈 parse here
    }));

    return {
      success: true,
      message: "Forms found",
      data: parsedForms, // 👈 send the parsed version
    };
  } catch (error) {
    console.log("Error fetching forms", error);
  }
  return { success: false, message: "An error occurred while fetching forms" };
};
