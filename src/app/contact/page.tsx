import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, HandHeart } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Get In Touch</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Whether you have a question, want to book a session, or are interested in a collaboration, I would love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ContactForm />
          
          <div className="flex flex-col space-y-8">
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                    <HandHeart className="h-8 w-8 text-primary" />
                    Support My Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground/80">
                  If you’ve received value from my work, blog, or classes, and feel called to contribute, your support is deeply appreciated. Donations help me continue to offer sliding scale services and create free educational content for the community.
                </p>
                <Button size="lg" className="w-full">
                  Make a Donation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Future Offerings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Keep an eye on this space for future video blogs and podcast links! I'm excited to share more ways to connect and learn together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
