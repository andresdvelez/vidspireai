"use server";

import { Usage } from "@/modules/core/components/Usage";
import { FeatureFlag } from "@/modules/core/features/flags";
import { AiAgentChat } from "@/modules/video/components/AiAgentChat";
import { ThumbnailGeneration } from "@/modules/video/components/ThumbnailGeneration";
import { TitleGenerations } from "@/modules/video/components/TitleGenerations";
import { Transcription } from "@/modules/video/components/Transcription";
import { YouTubeVideoDetails } from "@/modules/video/components/YouTubeVideoDetails";
import React from "react";

type AnalysisPageProps = {
  params: Promise<{ videoId: string }>;
};

const AnalysisPage = async ({ params }: AnalysisPageProps) => {
  const videoId = (await params).videoId;

  return (
    <main className="xl:container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-2 lg:order-1 flex flex-col gap-4 bg-white lg:border-r border-gray-200 p-6">
          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
            <Usage
              featureFlag={FeatureFlag.ANALYSE_VIDEO}
              title="Analyse Video"
            />
          </div>
          <YouTubeVideoDetails videoId={videoId} />
          <ThumbnailGeneration videoId={videoId} />
          <TitleGenerations videoId={videoId} />
          <Transcription videoId={videoId} />
        </div>
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]">
          <AiAgentChat videoId={videoId} />
        </div>
      </div>
    </main>
  );
};

export default AnalysisPage;
