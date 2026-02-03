import { HeroSection } from '@/components/landing/hero-section';
import { StorySection } from '@/components/landing/story-section';
import { ProofSection } from '@/components/landing/proof-section';
import { SignupSection } from '@/components/landing/signup-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ProofSection />
      <SignupSection />
    </>
  );
}
