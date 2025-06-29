import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical, HandHeart, Heart, Sprout, NotebookText, Eye } from 'lucide-react';

const services = [
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: 'pH Write-ups',
    description: "Receive a detailed analysis of your body's pH levels, helping you understand and achieve optimal balance through targeted dietary and lifestyle adjustments.",
  },
  {
    icon: <NotebookText className="h-10 w-10 text-primary" />,
    title: 'Personalized Nutrition Plans',
    description: 'Customized nutrition strategies, including the Blood Type Diet, designed to align with your unique genetic makeup and wellness goals for better energy and vitality.',
  },
  {
    icon: <HandHeart className="h-10 w-10 text-primary" />,
    title: 'Muscle Response Testing',
    description: "A non-invasive method to assess your body's needs. We identify imbalances and determine the most effective remedies and supplements for you.",
  },
  {
    icon: <Sprout className="h-10 w-10 text-primary" />,
    title: 'Herbal Education',
    description: 'Empower yourself with the wisdom of plants. Learn to create and use your own herbal teas and tinctures for everyday health and preventative care.',
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Donation-Based / Sliding Scale',
    description: 'Accessible wellness for everyone. Our services are offered on a sliding scale to ensure that financial constraints do not stand in the way of your health journey.',
  },
  {
    icon: <Eye className="h-10 w-10 text-primary/50" />,
    title: 'Coming Soon: Iridology',
    description: "An exciting new service on the horizon! Iridology offers insights into your health by analyzing the patterns, colors, and characteristics of your iris.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-foreground/80">
            We provide a holistic range of services designed to empower your natural healing journey.
            Explore our offerings to find the support you need.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex transform flex-col transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mb-4 flex justify-start">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
