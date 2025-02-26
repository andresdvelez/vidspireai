"use server";

import { redirect } from "@/modules/translations/i18n/routing";

export const analyseYouTubeVideo = async (formData: FormData) => {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = "abc"; // TODO
  if (!videoId) return;

  redirect({ href: `/video/${videoId}/analysis`, locale: "en" });
};
