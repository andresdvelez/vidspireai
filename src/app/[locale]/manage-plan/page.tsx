import SchematicComponent from "@/modules/core/components/schematic/SchematicComponent";
import React from "react";

const ManagePlan = () => {
  return (
    <main className="min-h-screen container mx-auto p-4 md:p-0">
      <h1 className="text-2xl font-bold mb-4 my-8 text-foreground">
        Manage Your Plan
      </h1>
      <p className="text-gray-600 mb-8">
        Manage your subscription and billing details here.
      </p>
      <SchematicComponent componentId="cmpn_9s9hzup8ihK" />
    </main>
  );
};

export default ManagePlan;
