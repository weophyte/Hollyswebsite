export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageHint: string;
  date: string;
  content: string;
  author: string;
  tags: string[];
  affiliateLinks?: {
    name: string;
    url: string;
    description: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-art-of-herbal-tea-blending',
    title: 'The Art of Herbal Tea Blending for Beginners',
    excerpt: 'Discover the secrets to creating your own delicious and therapeutic herbal tea blends at home. From calming chamomile to invigorating peppermint, we cover the basics.',
    image: 'https://placehold.co/800x450.png',
    imageHint: 'herbal tea',
    date: 'October 26, 2023',
    author: 'Holly',
    tags: ['Herbalism', 'Recipes', 'Wellness'],
    content: `
      <p>Creating your own herbal tea blends is a delightful way to connect with the healing power of plants. It’s a practice that combines creativity, intuition, and a little bit of plant science. Whether you're looking to craft a tea to help you sleep, boost your immune system, or simply enjoy a delicious cup of warmth, this guide will get you started.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3 text-primary">Understanding Your Herbs</h3>
      <p>Before you start blending, it’s helpful to understand the properties of some common herbs:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong>Chamomile:</strong> Known for its calming properties, perfect for a bedtime tea.</li>
        <li><strong>Peppermint:</strong> Great for digestion and provides a refreshing, uplifting flavor.</li>
        <li><strong>Ginger:</strong> Warming and stimulating, excellent for circulation and soothing an upset stomach.</li>
        <li><strong>Lemon Balm:</strong> A member of the mint family, it has a gentle, lemony flavor and is known for reducing stress and anxiety.</li>
        <li><strong>Rosehips:</strong> Packed with Vitamin C, they add a tart, fruity note to blends and are great for immunity.</li>
      </ul>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3 text-primary">A Simple Calming Blend Recipe</h3>
      <p>Here’s a simple recipe to get you started on your blending journey. This tea is perfect for unwinding after a long day.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>2 parts Chamomile</li>
        <li>1 part Lemon Balm</li>
        <li>1/2 part Lavender</li>
      </ul>
      <p>Simply mix the dried herbs together and store in an airtight container. To brew, use 1-2 teaspoons of the blend per cup of hot water and steep for 5-10 minutes. Enjoy!</p>
    `,
    affiliateLinks: [
      {
        name: 'Organic Chamomile Flowers',
        url: '#',
        description: 'High-quality, organic chamomile for the perfect calming tea.'
      },
      {
        name: 'Stainless Steel Tea Infuser',
        url: '#',
        description: 'A durable and easy-to-clean infuser for brewing loose-leaf teas.'
      }
    ]
  },
  {
    slug: 'five-essential-wellness-tips',
    title: 'Five Essential Wellness Tips for a Healthier You',
    excerpt: 'In this post, I share five simple yet powerful tips that I\'m learning in my ND program to boost your overall wellness, from mindful eating to the power of nature.',
    image: 'https://placehold.co/800x450.png',
    imageHint: 'wellness journal',
    date: 'November 15, 2023',
    author: 'Holly',
    tags: ['Wellness Tips', 'Education', 'Lifestyle'],
    content: `
      <p>Embarking on a wellness journey can feel overwhelming, but small, consistent steps can make a huge difference. Here are five essential tips I've been focusing on in my studies that you can easily incorporate into your daily life.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3 text-primary">1. Hydration is Key</h3>
      <p>Water is essential for every function in our body. Start your day with a large glass of water, and aim to drink consistently throughout the day. Adding a slice of lemon or cucumber can make it more refreshing.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3 text-primary">2. Mindful Movement</h3>
      <p>Find a form of movement you genuinely enjoy. It doesn’t have to be an intense workout; a daily walk, a gentle yoga session, or dancing in your living room are all wonderful ways to get your body moving and boost your mood.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3 text-primary">3. Prioritize Sleep</h3>
      <p>Quality sleep is non-negotiable for good health. Create a relaxing bedtime routine, avoid screens before bed, and aim for 7-9 hours of restful sleep per night.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3 text-primary">4. Connect with Nature</h3>
      <p>Spending time in nature has been shown to reduce stress and improve mental clarity. Whether it’s a walk in a park or tending to a houseplant, find ways to connect with the natural world.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3 text-primary">5. Eat Whole Foods</h3>
      <p>Focus on a diet rich in whole, unprocessed foods like fruits, vegetables, whole grains, and lean proteins. Your body will thank you for the nourishment.</p>
    `
  },
];

export type WellnessClass = {
  title: string;
  description: string;
  targetAudience: string;
  date: string;
  image: string;
  imageHint: string;
};

export const wellnessClasses: WellnessClass[] = [
  {
    title: 'Gentle Wellness for Seniors',
    description: 'A supportive class focused on gentle movement, nutrition for longevity, and simple herbal remedies to enhance vitality and well-being during the golden years.',
    targetAudience: 'Seniors',
    date: 'First Tuesday of every month, 10:00 AM',
    image: 'https://placehold.co/800x450.png',
    imageHint: 'senior yoga'
  },
  {
    title: 'Homeschool Herbalism: A Family Workshop',
    description: 'An interactive workshop for homeschool families to learn about the magic of herbs together. We\'ll make a simple herbal craft and learn about local medicinal plants.',
    targetAudience: 'Homeschool Families',
    date: 'November 18, 2023, 1:00 PM',
    image: 'https://placehold.co/800x450.png',
    imageHint: 'family nature'
  },
  {
    title: 'Introduction to Tincture Making',
    description: 'Dive into the art of herbal medicine making in this hands-on class. You\'ll learn the basics of creating your own potent herbal tinctures and go home with your first creation.',
    targetAudience: 'Adults',
    date: 'December 2, 2023, 2:00 PM',
    image: 'https://placehold.co/800x450.png',
    imageHint: 'herbal tinctures'
  }
];
