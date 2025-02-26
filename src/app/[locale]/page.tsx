import { Features } from "@/modules/landing/components/Features";
import { Footer } from "@/modules/landing/components/Footer";
import { Hero } from "@/modules/landing/components/Hero";
import { HowItWorks } from "@/modules/landing/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] bg-dots">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* How It Works */}
      <HowItWorks />
      {/* CTA Section */}
      <Footer />
    </main>
  );
}
