export default function GeneratePage() {
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
            placeholder="Example: An AI-powered productivity app for students..."
            className="min-h-40 w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
          />

          <button
            type="button"
            className="mt-5 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            Generate with AI
          </button>
        </div>
      </div>
    </main>
  );
}