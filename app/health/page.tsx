async function getHealthData() {
  const response = await fetch("http://localhost:3000/api/health", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch health data");
  }

  return response.json();
}

export default async function HealthPage() {
  const health = await getHealthData();

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium text-violet-400">
          AI Landing Page Generator
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          System Health
        </h1>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-500" />

            <span className="text-lg font-semibold">
              {health.status}
            </span>
          </div>

          <div className="mt-6 space-y-3 text-gray-400">
            <p>
              <span className="font-medium text-white">Service:</span>{" "}
              {health.service}
            </p>

            <p>
              <span className="font-medium text-white">Timestamp:</span>{" "}
              {health.timestamp}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}