import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="bg-black mt-16 text-white">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center py-20 relative z-20 -mb-11  bg-clip-text text-transparent  bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 bg-black dark:via-white dark:to-white">
      Upgrade to Next.js to  <br /> create a  <Cover>High-Speed Website</Cover>
      </h1>
    </div>
  );
}
