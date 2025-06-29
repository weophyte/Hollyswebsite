import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <article className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-base text-muted-foreground">{post.date} by {post.author}</p>
          </div>

          <div className="my-8 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
          </div>

          <div 
            className="prose prose-lg mx-auto max-w-none text-foreground/80 prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.affiliateLinks && post.affiliateLinks.length > 0 && (
            <Card className="mt-12 bg-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl">Recommended Tools & Books</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-foreground/70">
                  Here are a few products I recommend that relate to this post. These are affiliate links, which means I may earn a small commission at no extra cost to you.
                </p>
                <div className="space-y-4">
                  {post.affiliateLinks.map((link) => (
                    <div key={link.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md border bg-card p-4">
                      <div>
                        <h4 className="font-headline text-lg font-semibold">{link.name}</h4>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <Button asChild className="mt-3 sm:mt-0 sm:ml-4 shrink-0">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          View on Amazon <ShoppingCart className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          
          <Separator className="my-12" />

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
