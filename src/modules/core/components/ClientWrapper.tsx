"use client";

import { HeroUIProvider } from "@heroui/react";
import { SchematicProvider } from "@schematichq/schematic-react";
import { ReactNode } from "react";
import { SchematicWrapped } from "./SchematicWrapped";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <ConvexClientProvider>
        <SchematicProvider
          publishableKey={process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY!}
        >
          <SchematicWrapped>{children}</SchematicWrapped>
        </SchematicProvider>
      </ConvexClientProvider>
    </HeroUIProvider>
  );
};
