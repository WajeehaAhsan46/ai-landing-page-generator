import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-medium text-violet-400">
          AI-Powered Website Creation
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Create Beautiful Landing Pages with AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Describe your product, choose a style, and turn your idea into a
          professional landing page with the help of AI.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/generate"
            className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            Start Generating
          </Link>

          <Link
            href="/templates"
            className="rounded-xl border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-violet-500"
          >
            Explore Templates
          </Link>
        </div>

        <div className="mt-16 grid w-full gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold">Describe</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Tell the generator about your product or business.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold">Generate</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Let AI create the structure and content for your landing page.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold">Preview</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Review your generated page before publishing it.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}