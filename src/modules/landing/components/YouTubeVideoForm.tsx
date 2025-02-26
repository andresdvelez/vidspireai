import { Input } from "@heroui/react";
import { AnalyzeButton } from "./AnalyzeButton";
import { analyseYouTubeVideo } from "@/actions/analyseYouTubeVideo";

export const YouTubeVideoForm = () => {
  return (
    <form
      action={analyseYouTubeVideo}
      className="flex flex-col sm:flex-row gap-4 max-w-2xl w-full p-4 bg-white rounded-xl shadow-lg"
    >
      <Input
        type="url"
        name="url"
        placeholder="Paste your YouTube video URL here..."
        className="flex-1 border-gray-200"
      />
      <AnalyzeButton />
    </form>
  );
};
