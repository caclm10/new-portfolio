"use client";

import usePrelineScript from "@/hooks/use-preline";

export default function Providers({ children }: { children: React.ReactNode }) {
  usePrelineScript();

  return <>{children}</>;
}
