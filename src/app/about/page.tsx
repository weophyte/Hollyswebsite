import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
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
                A student of naturopathic medicine, tea lover, and believer in the body’s natural ability to heal.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Leaf className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl">My Journey</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <p>
                  I’m a naturopathic student and mom passionate about sharing what I learn through experience, nature, and study. This space is a reflection of that journey. You won’t find rigid protocols here—just gentle support, intuitive wellness, and space to grow.
                </p>
                <p>
                  My path began with a simple, profound realization: our bodies have an innate wisdom and a remarkable capacity to heal. I created The Island Apothecary as a cozy corner to share what I’m learning, offer gentle guidance, and connect with others exploring natural wellness.
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
