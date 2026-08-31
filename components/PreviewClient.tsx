"use client";

import dynamic from "next/dynamic";

const ThreeDHero = dynamic(
  () => import("@/components/ThreeDHero"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[360px] w-full items-center justify-center rounded-2xl border border-gray-800 bg-gray-950 text-sm text-gray-400">
        Loading 3D experience...
      </div>
    ),
  }
);

export default function PreviewClient() {
  return <ThreeDHero />;
}