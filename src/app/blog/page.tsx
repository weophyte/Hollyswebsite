import { blogPosts, type BlogPost } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="aspect-[16/9]">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="h-full w-full object-cover"
          data-ai-hint={post.imageHint}
        />
      </div>
    </Link>
    <CardHeader>
      <div className="flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </div>
      <CardTitle className="mt-2 text-2xl">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
      </CardTitle>
      <p className="text-sm text-muted-foreground pt-1">{post.date} by {post.author}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-foreground/80">{post.excerpt}</p>
    </CardContent>
    <CardFooter>
      <Button asChild variant="link" className="px-0 text-primary">
        <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </Button>
    </CardFooter>
  </Card>
);

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">The Wellness Journal</h1>
          <p className="mt-4 text-lg text-foreground/80">
            A space for sharing herbal recipes, wellness tips, class summaries, and what I'm learning on my naturopathic journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {blogPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        
        {/* Placeholder for future features */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-primary">More to Come</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Stay tuned for video blogs and podcast links, coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}
