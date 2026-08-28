export default function SettingsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-medium text-violet-400">
          AI Landing Page Generator
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Settings
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Manage your preferences and application settings.
        </p>

        <div className="mt-10 space-y-6">
          <section className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold">Account</h2>
            <p className="mt-2 text-gray-400">
              Account settings will be available here.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold">Preferences</h2>
            <p className="mt-2 text-gray-400">
              Customize your landing page generation preferences.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold">AI Settings</h2>
            <p className="mt-2 text-gray-400">
              AI configuration options will be added during the build phase.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}