import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80">
      <Leaf className="h-7 w-7" />
      <span className="text-xl font-bold tracking-wide font-headline">The Island Apothecary</span>
    </Link>
  );
}
