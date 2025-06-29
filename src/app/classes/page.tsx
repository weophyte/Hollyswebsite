import { wellnessClasses, type WellnessClass } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar } from 'lucide-react';

const ClassCard = ({ classInfo }: { classInfo: WellnessClass }) => (
  <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <div className="aspect-[16/9]">
      <Image
        src={classInfo.image}
        alt={classInfo.title}
        width={800}
        height={450}
        className="h-full w-full object-cover"
        data-ai-hint={classInfo.imageHint}
      />
    </div>
    <CardHeader>
      <Badge variant="secondary" className="w-fit">{classInfo.targetAudience}</Badge>
      <CardTitle className="mt-2 text-2xl">{classInfo.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow space-y-4">
      <p className="text-foreground/80">{classInfo.description}</p>
      <div className="flex items-center text-sm text-muted-foreground">
        <Calendar className="mr-2 h-4 w-4" />
        <span>{classInfo.date}</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full" asChild>
        <Link href="/contact">Sign Up Now</Link>
      </Button>
    </CardFooter>
  </Card>
);

export default function ClassesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Upcoming Classes & Workshops</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Join our community to learn, grow, and connect. We offer classes for all ages and stages of the wellness journey, with a special focus on seniors and homeschool families.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wellnessClasses.map((classInfo, index) => (
            <ClassCard key={index} classInfo={classInfo} />
          ))}
        </div>
      </div>
    </div>
  );
}
