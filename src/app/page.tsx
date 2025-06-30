import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, NotebookText, Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <NotebookText className="h-8 w-8 text-primary" />,
    title: 'pH Wellness Write-Up',
    description: 'A personalized overview of your Brixometer readings, saliva & urine pH test results, with gentle, lifestyle suggestions.',
    href: '/services',
  },
  {
    icon: <Moon className="h-8 w-8 text-primary" />,
    title: 'Fasting Support',
    description: 'Curious about fasting? I’ll guide you with what I’ve learned and share resources to support your body’s natural rhythms.',
    href: '/services',
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Tea Talk & Herbs',
    description: 'Let’s explore herbal tea blends together—simple, intuitive herbalism for daily balance.',
    href: '/services',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary py-20 sm:py-28">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Join me on my naturopathic learning journey—together we’ll explore vibrant, natural wellness.
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container px-4">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Welcome to The Island Apothecary</h2>
              <p className="mb-6 text-lg text-foreground/80">
                Hi, I’m Holly—a student of naturopathic medicine, tea lover, and believer in the body’s natural ability to heal. I created The Island Apothecary as a cozy space to share what I’m learning, offer gentle wellness reflections, and connect with others who are exploring natural healing.
              </p>
              <Button asChild size="lg">
                <Link href="/about">Meet Holly <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="relative order-1 aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg md:order-2">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Natural greenery or a portrait of Holly"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                data-ai-hint="natural greenery"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="relative h-32 w-4/5">
                  <Image
                    src="/logo.png"
                    alt="The Island Apothecary Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/50 py-16 sm:py-24">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Wellness Sessions</h2>
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
            <Link href="/services">Explore All Offerings <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
