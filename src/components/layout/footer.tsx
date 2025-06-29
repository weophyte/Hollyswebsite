import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8 sm:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-foreground/70">
              Natural healing for a modern world.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="flex justify-start sm:justify-end">
               <div>
                 <h3 className="text-lg font-headline font-semibold text-primary">Get in Touch</h3>
                 <p className="mt-2 text-sm text-foreground/70">
                    Have a question or want to book a session? Reach out to us.
                 </p>
                 <Button variant="secondary" className="mt-4" asChild>
                    <a href="/contact">Contact Holly</a>
                 </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-foreground/60 md:flex md:justify-between">
          <p>&copy; {new Date().getFullYear()} The Island Apothecary. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Website by You</p>
        </div>
      </div>
    </footer>
  )
}
