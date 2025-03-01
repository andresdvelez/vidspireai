"use server";

import { currentUser } from "@clerk/nextjs/server";

export const getYoutubeTranscript = async (videoId: string) => {
  const user = await currentUser();

  if (!user?.id) {
    throw new Error("User not found");
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data;
};
