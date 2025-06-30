import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NotebookText, Moon, Leaf, MessageCircle, FileText, CheckSquare, Coffee } from 'lucide-react';

const wellnessSessions = [
  {
    icon: <NotebookText className="h-8 w-8 text-primary" />,
    title: 'pH Wellness Write-Up',
    description: 'A personalized overview of your Brixometer readings, saliva & urine pH test results, with gentle, lifestyle suggestions.',
  },
  {
    icon: <Moon className="h-8 w-8 text-primary" />,
    title: 'Fasting Support',
    description: 'Curious about fasting? I’ll guide you with what I’ve learned and share resources to support your body’s natural rhythms.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Tea Talk & Herbs',
    description: 'Let’s explore herbal tea blends together—simple, intuitive herbalism for daily balance.',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: 'Mini Classes & Wellness Chats',
    description: 'Book a one-on-one or group session where I’ll share what I’m learning about topics like detox, fasting, pH balance, or herbs. These are informal and educational—perfect for anyone who’s curious!',
  },
];

const digitalProducts = [
    {
        icon: <Coffee className="h-6 w-6 text-muted-foreground" />,
        name: "PDF tea recipes"
    },
    {
        icon: <FileText className="h-6 w-6 text-muted-foreground" />,
        name: "Fasting guides"
    },
    {
        icon: <CheckSquare className="h-6 w-6 text-muted-foreground" />,
        name: "pH checklist & food support list"
    },
]

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Explore With Me</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Learning, teaching, and growing together—naturally. Explore ways we can work together on your wellness journey.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">Wellness Sessions</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {wellnessSessions.map((service) => (
                <Card key={service.title} className="flex transform flex-col text-left transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader>
                    {service.icon}
                    <CardTitle className="mt-4 text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">Wellness Notes</h2>
            <Card className="mx-auto max-w-2xl text-center bg-secondary/50">
                <CardHeader>
                    <CardTitle className="text-2xl">Coming Soon!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-6 text-foreground/80">
                        I'm working on creating some beautiful and helpful digital resources for you. Keep an eye out for these downloadable goodies!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                        {digitalProducts.map(product => (
                            <div key={product.name} className="flex items-center gap-3 rounded-md border bg-card p-3">
                                {product.icon}
                                <span className="text-sm font-medium text-foreground/90">{product.name}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
