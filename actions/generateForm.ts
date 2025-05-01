"use server";

import prisma from "../lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import OpenAI from "openai";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();

    if (!user) {
      return { success: false, message: "User not found" };
    }

    //define the schema of validation.
    const schema = z.object({
      description: z.string().min(1, "Description is required"),
    });

    const result = schema.safeParse({
      description: formData.get("description") as string,
    });

    if (!result.success) {
      return {
        success: false,
        message: "Invalid form data",
        error: result.error.errors,
      };
    }

    const description = result.data.description; // after validation this is safe to use.

    if (!process.env.OPENAI_API_KEY) {
      return { success: false, message: "OPENAI api key not found" };
    }

    const prompt = `You are an expert form generator. 
Generate a JSON for a form with exactly these keys: "formTitle", "formFields", "label", "name", "placeholder".
Rules:
- "formFields" must have at least 3 fields.
- Field names should be consistent across forms.
- Placeholders must match the label meaningfully.
Return ONLY the JSON, no extra text.
            `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",

      messages: [
        { role: "system", content: `${prompt}` },
        { role: "user", content: `${description} ` },
      ],
      max_tokens: 400,
    });

    const formContent = completion.choices[0]?.message.content;
    if (!formContent) {
      return { success: false, message: "Failed to generate form content" };
    }

    // save the generated form to the databse
    const form = await prisma.form.create({
      data: {
        ownerId: user.id,
        content: formContent,
      },
    });

    return {
      success: true,
      message: "Form generated successfully.",
      data: form,
    };
  } catch (error) {
    console.log("Error generated form", error);
    return {
      success: false,
      message: "An error occurred while generating the form",
    };
  }
};
