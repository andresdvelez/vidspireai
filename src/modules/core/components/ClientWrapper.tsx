"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { HeroUIProvider } from "@heroui/react";
import { SchematicProvider } from "@schematichq/schematic-react";
import { ReactNode } from "react";
import { SchematicWrapped } from "./SchematicWrapped";

export const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <ClerkProvider>
        <SchematicProvider
          publishableKey={process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY!}
        >
          <SchematicWrapped>{children}</SchematicWrapped>
        </SchematicProvider>
      </ClerkProvider>
    </HeroUIProvider>
  );
};
