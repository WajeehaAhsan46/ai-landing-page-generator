"use client";

import { useState } from "react";
import GenerateButton from "@/components/GenerateButton";

export default function GeneratePage() {
  const [description, setDescription] = useState("");
  const [generated, setGenerated] = useState(false);
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

  function handleGenerate() {
  if (!description.trim()) {
    return;
  }

  setGenerated(false);

  setTimeout(() => {
   const text = description.trim().toLowerCase();

let title = "Build Something Amazing";
let badge = "AI Powered Solution";
let cta = "Get Started";

let features = [
  {
    title: "Fast",
    description:
      "Launch your idea quickly with an AI-assisted landing page.",
  },
  {
    title: "Modern",
    description:
      "Get a clean, responsive design ready for your audience.",
  },
  {
    title: "AI Powered",
    description:
      "Transform your product idea into compelling landing-page content.",
  },
];

if (
  text.includes("fitness") ||
  text.includes("workout") ||
  text.includes("health")
) {
  title = "Transform Your Fitness Journey";
  badge = "AI Fitness Platform";
  cta = "Start Training";

  features = [
    {
      title: "Personalized Workouts",
      description:
        "Get workout recommendations designed around your goals.",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your fitness progress and stay motivated.",
    },
    {
      title: "Smart Coaching",
      description:
        "Use intelligent guidance to build better fitness habits.",
    },
  ];
} else if (
  text.includes("student") ||
  text.includes("study") ||
  text.includes("education")
) {
  title = "Study Smarter, Achieve More";
  badge = "AI Student Assistant";
  cta = "Start Studying";

  features = [
    {
      title: "Smart Study Plans",
      description:
        "Create personalized study schedules based on your goals.",
    },
    {
      title: "Deadline Tracking",
      description:
        "Keep assignments, exams, and important deadlines organized.",
    },
    {
      title: "AI Recommendations",
      description:
        "Get intelligent suggestions to make your study time more effective.",
    },
  ];
} else if (
  text.includes("bakery") ||
  text.includes("cake") ||
  text.includes("food") ||
  text.includes("restaurant")
) {
  title = "Make Every Celebration Sweeter";
  badge = "Premium Food Experience";
  cta = "Order Now";

  features = [
    {
      title: "Custom Designs",
      description:
        "Create beautiful products tailored to your special occasion.",
    },
    {
      title: "Fresh Ingredients",
      description:
        "Enjoy high-quality ingredients prepared with care.",
    },
    {
      title: "Easy Ordering",
      description:
        "Place your order quickly with a simple and convenient experience.",
    },
  ];
}

const newLandingPage = {
  description: description.trim(),
  title,
  badge,
  cta,
  features,
};

setLandingPage(newLandingPage);

localStorage.setItem(
  "ai-landing-page",
  JSON.stringify(newLandingPage)
);

setGenerated(true);

    
  }, 800);
}

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-medium text-violet-400">
          AI Landing Page Generator
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Generate Your Landing Page
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Describe your product or business and create a beautiful landing
          page with AI.
        </p>

        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
          <label
            htmlFor="description"
            className="mb-3 block text-sm font-medium"
          >
            Tell us about your product
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Example: An AI-powered productivity app for students..."
            className="min-h-40 w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
          />

          <div className="mt-5">
            <GenerateButton onGenerate={handleGenerate} />
          </div>

        {generated && (
  <div className="mt-10 overflow-hidden rounded-3xl border border-gray-800 bg-white text-gray-900 shadow-2xl">
    {/* Preview Header */}
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
          AI Generated Preview
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Your landing page is ready
        </p>
      </div>

      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
        Generated
      </span>
    </div>

    {/* Hero */}
    <section className="px-6 py-16 text-center sm:px-12 sm:py-20">
      <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
        {landingPage?.badge}
      </span>

      <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        {landingPage?.title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        {description}
      </p>

      <button
        type="button"
        className="mt-8 rounded-xl bg-gray-900 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
      >
       {landingPage?.cta}
      </button>
    </section>

    {/* Features */}
<section className="border-t border-gray-200 bg-gray-50 px-6 py-12 sm:px-12">
  <div className="grid gap-5 sm:grid-cols-3">
    {landingPage?.features.map((feature, index) => (
      <div
        key={feature.title}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg">
          {index === 0 ? "⚡" : index === 1 ? "✦" : "✨"}
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

    {/* Benefits */}
    <section className="px-6 py-12 sm:px-12">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-violet-600">
            WHY IT WORKS
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            From idea to launch faster.
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Create a strong first impression without starting every landing
            page from scratch.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="font-semibold">✓ Clear messaging</p>
            <p className="mt-1 text-sm text-gray-600">
              Turn your product description into focused landing-page copy.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="font-semibold">✓ Responsive experience</p>
            <p className="mt-1 text-sm text-gray-600">
              Designed to work across desktop and mobile screens.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="font-semibold">✓ Ready to customize</p>
            <p className="mt-1 text-sm text-gray-600">
              Use the generated page as a starting point for your final design.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-gray-950 px-6 py-12 text-center text-white sm:px-12">
      <h3 className="text-2xl font-bold">
        Ready to bring your idea to life?
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-gray-400">
        Your AI-generated landing page is ready for the next step.
      </p>
<a
  href="/preview"
  className="mt-6 inline-flex rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
>
  View Full Preview
</a>
    </section>
  </div>
)}

          <div className="mt-10 border-t border-gray-800 pt-8">
            <p className="mb-4 text-sm font-medium text-gray-300">
              Button Motion Demo
            </p>

            <div className="flex flex-wrap gap-4">
              <div>
                <p className="mb-2 text-xs text-gray-500">
                  Success trigger
                </p>

                <GenerateButton forceResult="success" />
              </div>

              <div>
                <p className="mb-2 text-xs text-gray-500">
                  Error trigger
                </p>

                <GenerateButton forceResult="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}