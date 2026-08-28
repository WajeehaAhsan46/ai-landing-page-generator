export default function DashboardPage() {
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

        <div className="mt-10 rounded-2xl border border-dashed border-gray-700 bg-gray-900/30 p-10 text-center">
          <h2 className="text-xl font-semibold">
            No landing pages yet
          </h2>

          <p className="mt-2 text-gray-400">
            Start by creating your first AI-powered landing page.
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            Create New Landing Page
          </button>
        </div>
      </div>
    </main>
  );
}