import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Heart, Leaf, NotebookText, Sprout } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <NotebookText className="h-8 w-8 text-primary" />,
    title: 'pH Write-ups',
    description: 'Detailed analysis to help you understand and balance your body\'s acidity.',
    href: '/services',
  },
  {
    icon: <Sprout className="h-8 w-8 text-primary" />,
    title: 'Herbal Education',
    description: 'Learn the art of using teas and tinctures for natural wellness.',
    href: '/services',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Personalized Nutrition',
    description: 'Custom diet plans, including the Blood Type Diet, tailored to your needs.',
    href: '/services',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center">
        <Image 
          src="https://placehold.co/1600x900.png" 
          alt="Natural herbs and flowers" 
          layout="fill" 
          objectFit="cover" 
          className="z-0"
          data-ai-hint="natural herbs"
          priority
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
              “Empowering natural healing through herbs, food, and the wisdom of the body.”
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container px-4">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Welcome to The Island Apothecary</h2>
              <p className="mb-6 text-lg text-foreground/80">
                Discover a path to wellness that honors the intricate connection between mind, body, and nature. Here, we believe in nurturing your health with gentle, effective, and natural solutions. Let's embark on this healing journey together.
              </p>
              <Button asChild size="lg">
                <Link href="/about">Meet Holly <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="order-1 h-80 w-full overflow-hidden rounded-lg shadow-lg md:order-2 md:h-96">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Natural greenery or a portrait of Holly"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                data-ai-hint="natural greenery"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/50 py-16 sm:py-24">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Approach to Wellness</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-foreground/80">
            We offer a range of services designed to support your unique health goals.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="transform text-left transition-transform duration-300 hover:-translate-y-2">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="mt-4 text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild variant="link" className="mt-8 text-lg text-primary">
            <Link href="/services">Explore All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
      <section className="bg-accent/30 py-16 sm:py-24">
        <div className="container px-4 text-center">
          <Leaf className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Join Our Wellness Community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/80">
            Sign up for our newsletter to receive wellness tips, class updates, and herbal recipes straight to your inbox.
          </p>
          <form className="mx-auto flex max-w-md gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-grow bg-background/80" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
