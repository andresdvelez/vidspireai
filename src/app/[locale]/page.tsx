import { Features } from "@/modules/landing/components/Features";
import { Hero } from "@/modules/landing/components/Hero";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] bg-dots">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 transform translate-x-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your Content?
            </h2>
            <Button
              className="bg-white text-blue-600 hover:bg-white/90 transition-colors duration-300"
              size="lg"
            >
              Start Creating Free{" "}
              <i
                className="icon-[solar--arrow-right-linear] size-5"
                role="img"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const steps = [
  {
    title: "Paste URL",
    description: "Simply paste any YouTube or video URL to get started.",
  },
  {
    title: "AI Analysis",
    description: "Our AI analyzes your video content in seconds.",
  },
  {
    title: "Get Results",
    description: "Download transcriptions, thumbnails, and content ideas.",
  },
];
