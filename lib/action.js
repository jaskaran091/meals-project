"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidtext = (text) => !text || text.trim() === "";

export const handleSubmit = async (formData) => {
  const data = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidtext(data.title) ||
    isInvalidtext(data.summary) ||
    isInvalidtext(data.instructions) ||
    isInvalidtext(data.creator) ||
    isInvalidtext(data.creator_email) ||
    !data.creator_email.includes("@") ||
    !data.image ||
    data.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  await saveMeal(data);
  revalidatePath("/meals");
  redirect("/meals");
};
