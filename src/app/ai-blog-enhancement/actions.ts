"use server";

import { z } from "zod";
import { suggestBlogTopics } from "@/ai/flows/suggest-blog-topics";

const SuggestTopicsSchema = z.object({
  blogContent: z.string().min(50, "Blog content should be at least 50 characters."),
  userKeywords: z.string().min(3, "Please provide at least one keyword."),
});

export type FormState = {
  message: string;
  suggestions?: string;
  fields?: {
    blogContent?: string;
    userKeywords?: string;
  };
};

export async function getSuggestions(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SuggestTopicsSchema.safeParse({
    blogContent: formData.get("blogContent"),
    userKeywords: formData.get("userKeywords"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      fields: {
        blogContent: validatedFields.error.flatten().fieldErrors.blogContent?.join(", "),
        userKeywords: validatedFields.error.flatten().fieldErrors.userKeywords?.join(", "),
      },
    };
  }
  
  try {
    const result = await suggestBlogTopics({
        blogContent: validatedFields.data.blogContent,
        userKeywords: validatedFields.data.userKeywords,
    });
    
    return { 
        message: "success", 
        suggestions: result.suggestedTopics 
    };
  } catch (e) {
    return { message: "An error occurred while generating suggestions. Please try again." };
  }
}
