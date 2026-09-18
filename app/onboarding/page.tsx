"use client";

import { useState } from "react";

const creatorTypes = [
  {
    title: "Podcaster",
    description: "Interviews, conversations & audio shows",
    icon: "🎙️",
  },
  {
    title: "YouTuber",
    description: "Videos, education & entertainment",
    icon: "▶️",
  },
  {
    title: "Writer",
    description: "Blogs, newsletters & written content",
    icon: "✍️",
  },
  {
    title: "Artist",
    description: "Art, design & visual storytelling",
    icon: "🎨",
  },
  {
    title: "Influencer",
    description: "Social media & personal brand",
    icon: "✨",
  },
  {
    title: "Other",
    description: "Something completely different",
    icon: "＋",
  },
];

export default function Onboarding() {
  const [selectedType, setSelectedType] = useState("");
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-5 md:px-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AROHA</h1>
          <p className="text-xs text-zinc-500">From Idea to Influence.</p>
        </div>

        <div className="text-sm text-zinc-500">
          Step {step} of 3
        </div>
      </header>

      {/* Progress */}
      <div className="h-1 bg-zinc-200">
        <div
          className="h-full bg-black transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {step === 1 && (
          <>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Let's get started
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                What kind of creator are you?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-zinc-500">
                This helps AROHA personalize your workspace, recommendations,
                content ideas, and growth strategy.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {creatorTypes.map((type) => {
                const selected = selectedType === type.title;

                return (
                  <button
                    key={type.title}
                    onClick={() => setSelectedType(type.title)}
                    className={`rounded-2xl border p-6 text-left transition ${
                      selected
                        ? "border-black bg-black text-white shadow-lg"
                        : "border-zinc-200 bg-white hover:-translate-y-1 hover:border-zinc-400 hover:shadow-md"
                    }`}
                  >
                    <div className="text-3xl">{type.icon}</div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {type.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-6 ${
                        selected ? "text-zinc-300" : "text-zinc-500"
                      }`}
                    >
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex justify-end">
              <button
                disabled={!selectedType}
                onClick={() => setStep(2)}
                className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Continue →
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Your audience
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Who do you create for?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-zinc-500">
                AROHA will use this information to make your recommendations
                more relevant.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">
                  Your niche
                </span>

                <input
                  type="text"
                  placeholder="e.g. Technology, Fitness, Finance, Comedy"
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-black"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">
                  Describe your audience
                </span>

                <textarea
                  rows={4}
                  placeholder="Tell AROHA about the people you want to reach..."
                  className="w-full resize-none rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-black"
                />
              </label>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl justify-between">
              <button
                onClick={() => setStep(1)}
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-white"
              >
                ← Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Continue →
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Your goals
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                What do you want to achieve?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-zinc-500">
                Pick the areas where you want AROHA to help you most.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
              {[
                "Grow my audience",
                "Create better content",
                "Find guests & collaborators",
                "Build my personal brand",
                "Monetize my content",
                "Stay consistent",
              ].map((goal) => (
                <button
                  key={goal}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 text-left font-medium transition hover:border-black hover:shadow-sm"
                >
                  {goal}
                </button>
              ))}
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl justify-between">
              <button
                onClick={() => setStep(2)}
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-white"
              >
                ← Back
              </button>

              <a
                href="/dashboard"
                className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Enter AROHA →
              </a>
            </div>
          </>
        )}
      </section>
    </main>
  );
}