import { BotMessageSquare } from "lucide-react";
import AiBlogEnhancementForm from "./form";

export default function AiBlogEnhancementPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <BotMessageSquare className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">AI Blog Topic Enhancer</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Struggling with writer's block? Use our AI-powered tool to generate fresh, relevant blog topic ideas based on existing content and your target keywords. Enhance your content strategy and boost your blog's visibility.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <AiBlogEnhancementForm />
        </div>
      </div>
    </div>
  );
}
