import { getYoutubeTranscript } from "@/actions/getYoutubeTranscript";
import { tool } from "ai";
import { z } from "zod";

export const fetchTranscript = (videoId: string) => console.log(videoId);
tool({
  description: "Fetch the transcript of a video in segments",
  parameters: z.object({
    videoId: z.string().describe("The video ID to fetch the transcript for"),
  }),
  execute: async ({ videoId }) => {
    const transcript = await getYoutubeTranscript(videoId);
    console.log(transcript, videoId);
  },
});
