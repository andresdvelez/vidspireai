"use client";

import { AgentPulse } from "@/modules/core/components/AgentPulse";
import { Button, Input } from "@heroui/react";
import { useState } from "react";

export const Hero = () => {
  const [videoUrl, setVideoUrl] = useState("");

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

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl w-full p-4 bg-white rounded-xl shadow-lg">
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
  );
};
