import Link from "next/link";
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


        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
  href="/generate"
  className="rounded-xl border border-gray-700 px-6 py-3 font-medium transition hover:border-violet-500"
>
  Edit Page
</Link>

          <Link
  href="/generate"
  className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
>
  Generate Again
</Link>
        </div>
      </div>
    </main>
  );
}