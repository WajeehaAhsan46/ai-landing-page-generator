"use client";

import { useState } from "react";

type ButtonState = "idle" | "loading" | "success" | "error";

type GenerateButtonProps = {
  forceResult?: "success" | "error";
  onGenerate?: () => void;
};

export default function GenerateButton({
  forceResult,
  onGenerate,
}: GenerateButtonProps) {
  const [state, setState] = useState<ButtonState>("idle");

  async function handleGenerate() {
    if (state === "loading") return;

    setState("loading");

    const delay = 1000 + Math.random() * 1500;

    await new Promise((resolve) => setTimeout(resolve, delay));

    const failed =
      forceResult === "error"
        ? true
        : forceResult === "success"
          ? false
          : Math.random() < 0.2;

    if (failed) {
      setState("error");
      return;
    }

    setState("success");

    if (onGenerate) {
      onGenerate();
    }

    setTimeout(() => {
      setState("idle");
    }, 1800);
  }

  const label = {
    idle: "Generate Landing Page",
    loading: "Generating...",
    success: "Generated!",
    error: "Try Again",
  }[state];

  return (
    <button
      type="button"
      onClick={handleGenerate}
      disabled={state === "loading"}
      aria-live="polite"
      className="mt-5 inline-flex min-w-52 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-950 active:translate-y-0 disabled:cursor-wait disabled:opacity-80 motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      {state === "loading" && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white motion-reduce:animate-none"
        />
      )}

      {state === "success" && (
        <span aria-hidden="true" className="text-lg">
          ✓
        </span>
      )}

      {state === "error" && (
        <span aria-hidden="true" className="text-lg">
          !
        </span>
      )}

      <span>{label}</span>
    </button>
  );
}