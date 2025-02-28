"use client";

import { Usage } from "@/modules/core/components/Usage";
import { FeatureFlag } from "@/modules/core/features/flags";
import { useSchematicEntitlement } from "@schematichq/schematic-react";
import { useState } from "react";

interface TranscriptEntry {
  text: string;
  timestamp: string;
}

type TranscriptionProps = {
  videoId: string;
};

export const Transcription = ({ videoId }: TranscriptionProps) => {
  const [transcript, setTranscript] = useState<{
    transcript: TranscriptEntry[];
    cache: string;
  } | null>(null);

  const { featureUsageExceeded } = useSchematicEntitlement(
    FeatureFlag.TRANSCRIPTION
  );

  return (
    <div className="border p-4 pb-0 rounded-xl gap-4 flex flex-col">
      <Usage featureFlag={FeatureFlag.TRANSCRIPTION} title="Transcription" />
      {!featureUsageExceeded ? (
        <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto rounded-md p-4">
          {transcript ? (
            transcript.transcript.map((entry, index) => (
              <div key={index} className="felx gap-2">
                <span className="text-sm text-gray-700">{entry.text}</span>
                <p className="text-sm text-gray-700"></p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No transcription available</p>
          )}
        </div>
      ) : null}
    </div>
  );
};
