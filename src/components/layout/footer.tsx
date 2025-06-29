import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo />
          <div className="text-center text-sm text-foreground/60 sm:text-right">
            <p>&copy; {new Date().getFullYear()} The Island Apothecary. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">Website by You</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
