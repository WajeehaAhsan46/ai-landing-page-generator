"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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

type LandingPage = {
  title: string;
  badge: string;
  description: string;
  cta: string;
  features: {
    title: string;
    description: string;
  }[];
};

export default function PreviewClient() {
  const [landingPage, setLandingPage] =
    useState<LandingPage | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ai-landing-page");

    if (saved) {
      try {
        setLandingPage(JSON.parse(saved));
      } catch {
        setLandingPage(null);
      }
    }
  }, []);

  return (
    <>
      <ThreeDHero />

      <div className="mt-10 overflow-hidden rounded-3xl border border-gray-800 bg-white text-gray-900 shadow-2xl">
        <div className="border-b border-gray-200 px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
            AI Generated Preview
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {landingPage
              ? "Your generated landing page"
              : "No generated page found yet"}
          </p>
        </div>

        {landingPage ? (
          <>
            <section className="px-6 py-16 text-center sm:px-12 sm:py-20">
              <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                {landingPage.badge}
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                {landingPage.title}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                {landingPage.description}
              </p>

              <button
                type="button"
                className="mt-8 rounded-xl bg-gray-900 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
              >
                {landingPage.cta}
              </button>
            </section>

            <section className="border-t border-gray-200 bg-gray-50 px-6 py-12 sm:px-12">
              <div className="grid gap-5 sm:grid-cols-3">
                {landingPage.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg">
                      ✦
                    </div>

                    <h3 className="mt-5 text-lg font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-950 px-6 py-12 text-center text-white sm:px-12">
              <h3 className="text-2xl font-bold">
                Ready to bring your idea to life?
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-gray-400">
                Your AI-generated landing page is ready for the next step.
              </p>

             <a
  href="/generate"
  className="mt-6 inline-flex rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
>
  Start Building
</a>
            </section>
          </>
        ) : (
          <div className="px-6 py-16 text-center sm:px-12">
            <h2 className="text-2xl font-bold">
              Generate a landing page first
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-gray-600">
              Go to the Generate page, describe your product, and create
              your landing page before opening this preview.
            </p>
          </div>
        )}
      </div>
    </>
  );
}