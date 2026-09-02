import Link from "next/link";

export default function TemplatesPage() {
  const templates = [
    {
      name: "SaaS Startup",
      description: "Launch a modern landing page for a software product.",
      prompt:
        "A SaaS startup that helps businesses manage their workflow with AI",
    },
    {
      name: "Personal Portfolio",
      description: "Showcase your skills, projects, and professional work.",
      prompt:
        "A personal portfolio website for a frontend developer showcasing projects and skills",
    },
    {
      name: "Creative Agency",
      description: "Present your creative services with a bold visual style.",
      prompt:
        "A creative digital agency offering branding, web design, and marketing services",
    },
    {
      name: "Product Launch",
      description: "Build excitement around a new product or service.",
      prompt:
        "A new productivity product designed to help people organize their daily tasks",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-violet-400">
          AI Landing Page Generator
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Landing Page Templates
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Choose a starting point and generate a landing page faster.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <div
              key={template.name}
              className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-gray-900"
            >
              <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-violet-950 to-gray-800 text-sm font-medium text-violet-300">
                {template.name}
              </div>

              <h2 className="text-lg font-semibold text-white">
                {template.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {template.description}
              </p>

              <Link
                href={`/generate?prompt=${encodeURIComponent(template.prompt)}`}
                className="mt-5 inline-flex w-full justify-center rounded-xl border border-gray-700 px-4 py-2.5 text-sm font-medium transition hover:border-violet-500 hover:text-violet-400"
              >
                Use Template
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}