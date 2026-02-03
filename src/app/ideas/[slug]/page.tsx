import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { IdeaBrief } from '@/components/ideas/idea-brief';
import { mockIdeas } from '@/lib/mock-data';
import type { Metadata } from 'next';

interface IdeaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: IdeaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const idea = mockIdeas.find((i) => i.slug === slug);

  if (!idea) {
    return {
      title: 'Idea Not Found | Sparky',
    };
  }

  return {
    title: `${idea.title} | Sparky`,
    description: idea.problemStatement.slice(0, 160),
    openGraph: {
      title: idea.title,
      description: idea.problemStatement.slice(0, 160),
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return mockIdeas.map((idea) => ({
    slug: idea.slug,
  }));
}

export default async function IdeaPage({ params }: IdeaPageProps) {
  const { slug } = await params;
  const idea = mockIdeas.find((i) => i.slug === slug);

  if (!idea) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/ideas"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all ideas
      </Link>

      <IdeaBrief idea={idea} />
    </div>
  );
}
