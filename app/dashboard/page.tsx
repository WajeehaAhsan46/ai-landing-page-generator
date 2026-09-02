"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [landingPage, setLandingPage] = useState<{
    title: string;
    badge: string;
    description: string;
    cta: string;
    features: {
      title: string;
      description: string;
    }[];
  } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ai-landing-page");

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);

      setTimeout(() => {
        setLandingPage(parsed);
      }, 0);
    } catch {
      setTimeout(() => {
        setLandingPage(null);
      }, 0);
    }
  }, []);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-violet-400">
          AI Landing Page Generator
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          My Projects
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Your generated landing pages will appear here.
        </p>

        {landingPage ? (
          <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-violet-400">
                  {landingPage.badge}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  {landingPage.title}
                </h2>

                <p className="mt-3 max-w-2xl text-gray-400">
                  {landingPage.description}
                </p>
              </div>

            <div className="flex shrink-0 gap-3">
  <a
    href="/preview"
    className="inline-flex justify-center rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
  >
    View Preview
  </a>

  <a
    href="/generate"
    className="inline-flex justify-center rounded-xl border border-gray-700 px-6 py-3 font-medium text-white transition hover:border-violet-500"
  >
    Create New
  </a>
</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {landingPage.features.map((feature) => (
                <span
                  key={feature.title}
                  className="rounded-full border border-gray-700 bg-gray-950 px-4 py-2 text-sm text-gray-300"
                >
                  {feature.title}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-700 bg-gray-900/30 p-10 text-center">
            <h2 className="text-xl font-semibold">
              No landing pages yet
            </h2>

            <p className="mt-2 text-gray-400">
              Start by creating your first AI-powered landing page.
            </p>

            <a
              href="/generate"
              className="mt-6 inline-flex rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
            >
              Create New Landing Page
            </a>
          </div>
        )}
      </div>
    </main>
  );
}