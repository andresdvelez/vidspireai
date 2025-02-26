import { AgentPulse } from "@/modules/core/components/AgentPulse";

import { YouTubeVideoForm } from "./YouTubeVideoForm";

export const Hero = () => {
  return (
    <section className="container px-4 pt-32 pb-20 mx-auto">
      <div className="max-w-5xl mx-auto text-center gap-y-8 flex flex-col items-center">
        <AgentPulse size="large" color="blue" />
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Meet Your Personal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            AI Content Agent
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your video content with AI-powered analysis, transcription,
          and insights. Get started in seconds.
        </p>

        <YouTubeVideoForm />
      </div>
    </section>
  );
};
