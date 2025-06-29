// src/ai/flows/suggest-blog-topics.ts
'use server';

/**
 * @fileOverview An AI agent that suggests relevant blog topics from existing naturopathic wellness blogs.
 *
 * - suggestBlogTopics - A function that handles the suggestion of blog topics.
 * - SuggestBlogTopicsInput - The input type for the suggestBlogTopics function.
 * - SuggestBlogTopicsOutput - The return type for the suggestBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBlogTopicsInputSchema = z.object({
  blogContent: z
    .string()
    .describe('The content of an existing naturopathic wellness blog post.'),
  userKeywords: z
    .string()
    .describe('The keywords that the user wants to include in the blog.'),
});
export type SuggestBlogTopicsInput = z.infer<typeof SuggestBlogTopicsInputSchema>;

const SuggestBlogTopicsOutputSchema = z.object({
  suggestedTopics: z
    .string()
    .describe('A list of suggested blog topics based on the input blog content and user keywords.'),
});
export type SuggestBlogTopicsOutput = z.infer<typeof SuggestBlogTopicsOutputSchema>;

export async function suggestBlogTopics(input: SuggestBlogTopicsInput): Promise<SuggestBlogTopicsOutput> {
  return suggestBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBlogTopicsPrompt',
  input: {schema: SuggestBlogTopicsInputSchema},
  output: {schema: SuggestBlogTopicsOutputSchema},
  prompt: `You are a wellness blog topic suggestion expert.

  You will use this information from existing blog content and user keywords to suggest new blog topics.

  Existing Blog Content: {{{blogContent}}}
  User Keywords: {{{userKeywords}}}

  Suggest 5 relevant blog topics:`,
});

const suggestBlogTopicsFlow = ai.defineFlow(
  {
    name: 'suggestBlogTopicsFlow',
    inputSchema: SuggestBlogTopicsInputSchema,
    outputSchema: SuggestBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
