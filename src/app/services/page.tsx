import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const exploreServices = [
  {
    icon: '✨',
    title: 'pH Wellness Write-Up',
    description: 'Personalized reflection based on your urine pH test.',
  },
  {
    icon: '🌙',
    title: 'Fasting Support',
    description: 'Gentle guidance and resources if you’re curious about the healing power of fasting.',
  },
  {
    icon: '🍵',
    title: 'Tea Talk & Herbs',
    description: 'Let’s create a custom herbal tea blend or explore how herbs can support your body.',
  },
];

const learnServices = [
  {
    icon: '📚',
    title: 'Mini Classes',
    description: 'Book a one-on-one or group session where I share what I’m learning about topics like detox, fasting, or herbal basics.',
  },
  {
    icon: '💌',
    title: 'Wellness Notes',
    description: 'Downloadable PDFs with checklists, recipes, and reflections (coming soon!)',
  },
];


export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Offerings</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Learning, teaching, and growing together—naturally. Explore ways we can work together on your wellness journey.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">Explore With Me</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {exploreServices.map((service) => (
                <Card key={service.title} className="flex transform flex-col text-center transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader className="items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-3xl">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">Learn With Me</h2>
            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2">
              {learnServices.map((service) => (
                <Card key={service.title} className="flex transform flex-col text-center transition-transform duration-300 hover:-translate-y-2">
                   <CardHeader className="items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-3xl">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <p className="text-foreground/80">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
