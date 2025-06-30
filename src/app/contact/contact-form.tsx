'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM;

  if (!formId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contact Form Unavailable</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The contact form is currently not configured. Please contact the site administrator.</p>
        </CardContent>
      </Card>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <Card>
        <CardContent className="flex min-h-[480px] flex-col items-center justify-center p-10 text-center">
          <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
          <h3 className="text-2xl font-bold text-primary">Thank you!</h3>
          <p className="mt-2 text-foreground/80">Your message has been sent successfully. I'll get back to you shortly.</p>
        </CardContent>
      </Card>
    );
  }

  return (
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
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm font-medium text-destructive" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Booking Inquiry, Question, etc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell me how I can help..." rows={6} required />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm font-medium text-destructive" />
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
