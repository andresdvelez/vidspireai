"use client";

import { getVideoDetails } from "@/actions/getVideoDetails";
import { VideoDetails } from "@/types/types";
import { Avatar, Image, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";

type YouTubeVideoDetailsProps = {
  videoId: string;
};

export const YouTubeVideoDetails = ({ videoId }: YouTubeVideoDetailsProps) => {
  const [video, setVideo] = useState<VideoDetails | null>(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const video = await getVideoDetails(videoId);
      setVideo(video);
    };

    fetchVideoDetails();
  }, [videoId]);

  if (!video)
    return (
      <div className="flex justify-center items-center p-4">
        <Spinner size="lg" />
      </div>
    );

  return (
    <div className="@container bg-white rounded-xl">
      <div className="flex flex-col gap-8">
        <div className="flex-shrink-0">
          <Image
            width={450}
            height={450}
            src={video.thumbnail}
            alt={video.title}
            className="w-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="flex-grow space-y-4">
          <h1 className="text-2xl @lg:text-3xl font-bold text-gray-900 leading-tight line-clamp-2">
            {video.title}
          </h1>
          <div className="flex items-center gap-4">
            <Avatar
              src={video.channel.thumbnail}
              alt={video.channel.title}
              className="w-10 h-10 @md:w-12 @md:h-12 rounded-full border-2 border-gray-100"
            />
            <div>
              <p className="text-base @md:text-lg font-semibold text-gray-900">
                {video.channel.title}
              </p>
              <p className="text-sm @md:text-base text-gray-600">
                {video.channel.subscribers} subscribers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 @lg:grid-cols-4 gap-4 pt-4">
            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <i
                  className="icon-[radix-icons--calendar] size-4 text-gray-600"
                  role="img"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-600">Published</p>
              </div>
              <p className="font-medium text-gray-900">
                {new Date(video.publishedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <i
                  className="icon-[iconamoon--eye] size-4 text-gray-600"
                  role="img"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-600">Views</p>
              </div>
              <p className="font-medium text-gray-900">{video.views}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <i
                  className="icon-[octicon--thumbsup-16] size-4 text-gray-600"
                  role="img"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-600">Likes</p>
              </div>
              <p className="font-medium text-gray-900">{video.likes}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <i
                  className="icon-[tabler--message-circle] size-4 text-gray-600"
                  role="img"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-600">Comments</p>
              </div>
              <p className="font-medium text-gray-900">{video.comments}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
