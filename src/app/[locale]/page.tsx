"use client";

import { Button, Input } from "@heroui/react";
import { useState } from "react";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <div className="min-h-screen bg-[#f8f9fa] bg-dots">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">Vidspire</div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Think, create, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              transform
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-400 tracking-tight">
            all in one place
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload a link. Get transcriptions, thumbnails, and content ideas
            instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg">
            <Input
              type="url"
              placeholder="Paste your video URL here..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="flex-1 border-gray-200"
            />
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onPress={() => console.log("Transform clicked")}
            >
              Transform{" "}
              <i
                className="icon-[solar--arrow-right-linear] size-5"
                role="img"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Content Creators
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your videos into multiple content formats with our
              AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}

const features = [
  {
    title: "Smart Transcription",
    description:
      "Get accurate transcriptions of your videos with timestamps and speaker detection.",
    icon: (
      <i
        className="icon-[lucide--text] size-6 text-blue-600"
        role="img"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "AI Thumbnails",
    description:
      "Generate eye-catching thumbnails that increase click-through rates.",
    icon: (
      <i
        className="icon-[lucide--image] size-6 text-blue-600"
        role="img"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Instant Processing",
    description:
      "Transform your videos into multiple content pieces in seconds.",
    icon: (
      <i
        className="icon-[token--zap] size-6 text-blue-600"
        role="img"
        aria-hidden="true"
      />
    ),
  },
];

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
