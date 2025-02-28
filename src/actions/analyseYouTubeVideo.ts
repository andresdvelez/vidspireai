"use server";

import { getVideoIdFromUrl } from "@/modules/core/utils/getVideoIdFromUrl";
import { redirect } from "@/modules/translations/i18n/routing";

export const analyseYouTubeVideo = async (formData: FormData) => {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = getVideoIdFromUrl(url);

  if (!videoId) return;

  redirect({ href: `/video/${videoId}/analysis`, locale: "en" });
};
