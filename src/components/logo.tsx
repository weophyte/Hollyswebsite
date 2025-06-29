import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="relative block h-12 w-44 text-primary transition-opacity hover:opacity-80">
      <Image
        src="/logo.png"
        alt="The Island Apothecary Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
}
