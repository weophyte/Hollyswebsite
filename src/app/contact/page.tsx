import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, HandHeart } from 'lucide-react';

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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <MessageSquare className="h-8 w-8 text-primary" />
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Booking Inquiry, Question, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me how I can help..." rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
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
