import PreviewClient from "@/components/PreviewClient";
export default function PreviewPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-violet-400">
          AI Landing Page Generator
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Landing Page Preview
        </h1>
       <PreviewClient />

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Preview your AI-generated landing page before publishing it.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-800 bg-white">
          <div className="border-b border-gray-200 px-6 py-4">
            <p className="text-sm font-medium text-gray-500">
              Generated Page Preview
            </p>
          </div>

          <div className="px-6 py-16 text-center text-gray-900 sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Your AI Landing Page
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Your generated landing page will appear here.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-xl border border-gray-700 px-6 py-3 font-medium transition hover:border-violet-500"
          >
            Edit Page
          </button>

          <button
            type="button"
            className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            Generate Again
          </button>
        </div>
      </div>
    </main>
  );
}