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
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <Link
          href="/ideas"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all ideas
        </Link>

        <IdeaBrief idea={idea} />
      </div>
    </div>
  );
}
