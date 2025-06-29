import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Leaf, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://placehold.co/600x800.png"
                  alt="A portrait of Holly"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  data-ai-hint="woman portrait"
                />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-primary">Hi, I’m Holly.</h1>
              <p className="mt-2 text-lg text-foreground/80">
                I believe in the healing power of nature and empowering you with tools to take charge of your wellness.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Leaf className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl">My Philosophy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <p>
                  My journey into naturopathic wellness began with a simple, profound realization: our bodies have an innate wisdom and a remarkable capacity to heal. The modern world often disconnects us from this wisdom, but through nature, we can find our way back.
                </p>
                <p>
                  At The Island Apothecary, my goal is to be your guide on this path. I blend traditional herbalism, evidence-based nutrition, and a deep respect for individual needs to create a wellness plan that feels authentic to you. It's not about quick fixes; it's about building a sustainable, joyful, and healthy lifestyle, one step at a time.
                </p>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Our mission is to empower you with the knowledge and tools for natural healing. We strive to create a supportive, educational space where you can learn about your body, connect with the healing properties of herbs and food, and feel confident in your ability to nurture your own well-being and that of your family.
                </p>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl">My Credentials & Passions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-foreground/80">
                  <li><strong>Student Naturopathic Doctor (ND):</strong> Currently deepening my knowledge to bring you the most comprehensive and up-to-date natural health solutions.</li>
                  <li><strong>Passionate about Fasting:</strong> A firm believer in the regenerative power of therapeutic fasting for cellular health and renewal.</li>
                  <li><strong>Herbalism Advocate:</strong> Dedicated to exploring and sharing the rich traditions of plant-based medicine.</li>
                  <li><strong>Family-Centered Wellness:</strong> Committed to providing resources and support for creating healthy, thriving families, with a special focus on homeschool communities.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
