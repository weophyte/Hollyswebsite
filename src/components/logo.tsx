import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80">
      <img 
        src="/logo.png" 
        alt="The Island Apothecary Logo" 
        width={180} 
        height={50} 
        className="object-contain"
      />
    </Link>
  );
}
