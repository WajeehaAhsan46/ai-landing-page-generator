export default function TemplatesPage() {
  const templates = [
    "SaaS Startup",
    "Personal Portfolio",
    "Creative Agency",
    "Product Launch",
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
          Choose a starting point for your AI-generated landing page.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <div
              key={template}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-gray-800 text-gray-500">
                Preview
              </div>

              <h2 className="text-lg font-semibold">{template}</h2>

              <button
                type="button"
                className="mt-5 w-full rounded-xl border border-gray-700 px-4 py-2.5 text-sm font-medium transition hover:border-violet-500 hover:text-violet-400"
              >
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}