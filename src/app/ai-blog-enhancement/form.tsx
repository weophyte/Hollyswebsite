"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getSuggestions, type FormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? "Generating Ideas..." : "Suggest Topics"}
    </Button>
  );
}

export default function AiBlogEnhancementForm() {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useFormState(getSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message !== "success" && state.message !== "" && state.message !== "Please correct the errors below.") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Input</CardTitle>
        <CardDescription>
          Provide some existing blog content and keywords to get started. The more context you provide, the better the suggestions will be.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="blogContent">Existing Blog Content</Label>
            <Textarea
              id="blogContent"
              name="blogContent"
              placeholder="Paste a paragraph or two from a relevant blog post..."
              rows={8}
            />
            {state?.fields?.blogContent && (
              <p className="text-sm text-destructive">{state.fields.blogContent}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="userKeywords">Target Keywords</Label>
            <Input
              id="userKeywords"
              name="userKeywords"
              placeholder="e.g., gut health, holistic wellness, stress relief"
            />
            {state?.fields?.userKeywords && (
              <p className="text-sm text-destructive">{state.fields.userKeywords}</p>
            )}
          </div>
          <SubmitButton />
        </form>

        {state.suggestions && (
          <div className="mt-8">
            <Separator />
            <div className="mt-8">
              <h3 className="text-2xl font-headline font-semibold text-primary flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Suggested Topics
              </h3>
              <div className="mt-4 space-y-2 rounded-md border bg-accent/20 p-4 text-foreground/80">
                {state.suggestions.split('\n').map((topic, index) => (
                  <p key={index}>{topic}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Dummy Separator component to avoid creating a new file for it.
function Separator() {
    return <div className="my-4 h-px w-full bg-border" />;
}
