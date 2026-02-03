import { HeroSection } from '@/components/landing/hero-section';
import { StorySection } from '@/components/landing/story-section';
import { ProofSection } from '@/components/landing/proof-section';
import { SignupSection } from '@/components/landing/signup-section';
import { SponsorAd } from '@/components/shared/sponsor-ad';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Sponsor Ad - After Hero */}
      <SponsorAd variant="banner" />

      <StorySection />

      <ProofSection />

      {/* Sponsor Ad - Before Signup (high visibility) */}
      <SponsorAd variant="banner" />

      <SignupSection />
    </>
  );
}
