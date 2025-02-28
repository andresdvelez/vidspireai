"use client";

import { Usage } from "@/modules/core/components/Usage";
import { FeatureFlag } from "@/modules/core/features/flags";
import { useUser } from "@clerk/nextjs";
import { Button } from "@heroui/react";
import { useSchematicEntitlement } from "@schematichq/schematic-react";

type TitleGenerationsProps = {
  videoId: string;
};

export const TitleGenerations = ({ videoId }: TitleGenerationsProps) => {
  const { user } = useUser();
  const titles = [];

  const { value: isTitleGenerationEnabled } = useSchematicEntitlement(
    FeatureFlag.TITLE_GENERATIONS
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // toast.success("Coppied to clipboard");
  };

  return (
    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
      <div className="min-w-52">
        <Usage
          featureFlag={FeatureFlag.TITLE_GENERATIONS}
          title="Title Generation"
        />
      </div>

      <div className="space-y-3 mt-4 max-h-[280px] overflow-y-hidden">
        {titles?.map((title) => (
          <div
            key={title._id}
            className="group relative p-4 rounded-lg border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50 transition-all duration-200"
          >
            <div className="felx items-start justify-between gap-4">
              <p className="text-sm text-gray-900 leading-relaxed">
                {title.title}
              </p>
              <Button
                onPress={() => copyToClipboard(title.title)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 hover:bg-blue-100 rounded-md"
                title="Copy to clipboard"
              >
                <i
                  className="icon-[tabler--copy] size-4 text-blue-600"
                  role="img"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {!titles?.length && !!isTitleGenerationEnabled && (
        <div className="text-center py-8 px-4 rounded-lg mt-4 border-2 border-dashed border-gray-200">
          <div className="text-gray-500">No titles have been generated yet</div>
          <p className="text-sm text-gray-400 mt-1">
            Generate titles to see them appear here
          </p>
        </div>
      )}
    </div>
  );
};
