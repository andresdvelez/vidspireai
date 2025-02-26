"use client";

import { Button } from "@heroui/react";
import { useFormStatus } from "react-dom";

export const AnalyzeButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      className="bg-blue-600 hover:bg-blue-700 text-white"
      onPress={() => console.log("Transform clicked")}
      endContent={
        <i
          className="icon-[solar--arrow-right-linear] size-5"
          role="img"
          aria-hidden="true"
        />
      }
    >
      Transform
    </Button>
  );
};
