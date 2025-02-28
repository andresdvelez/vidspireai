"use client";

import { api } from "@/convex/_generated/api";
import { Usage } from "@/modules/core/components/Usage";
import { FeatureFlag } from "@/modules/core/features/flags";
import { useUser } from "@clerk/nextjs";
import { Image } from "@heroui/react";
import { useQuery } from "convex/react";

type ThumbnailGenerationProps = {
  videoId: string;
};

export const ThumbnailGeneration = ({ videoId }: ThumbnailGenerationProps) => {
  const { user } = useUser();

  const images = useQuery(api.images.getImages, {
    videoId,
    userId: user?.id ?? "",
  });

  return (
    <div className="rounded-xl flex flex-col p-4 border">
      <div className="min-w-52">
        <Usage
          featureFlag={FeatureFlag.IMAGE_GENERATION}
          title="Thumbnail Generation"
        />
      </div>
      <div className={`flex overflow-x-auto gap-4 ${images?.length && "mt-4"}`}>
        {images?.map(
          (image) =>
            image.url && (
              <div
                key={image._id}
                className="flex-none w-[110px] rounded-lg overflow-x-auto"
              >
                <Image
                  src={image.url}
                  alt="Generated Image"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            )
        )}
      </div>
      {!images?.length && (
        <div className="text-center py-8 px-4 rounded-lg mt-4 border-2 border-dashed border-gray-200">
          <p className="text-gray-500">No thumbnails have been generated yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Generate thumbnails to see them appear here
          </p>
        </div>
      )}
    </div>
  );
};
