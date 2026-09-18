export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-zinc-200 px-8 py-5">
        <div className="text-2xl font-bold tracking-tight">AROHA</div>

        <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          <a href="#features" className="hover:text-black">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-black">
            How it works
          </a>
          <a href="#about" className="hover:text-black">
            About
          </a>
        </div>

        <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-24 text-center">
        <div className="mb-6 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600">
          AI-powered creator operating system
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          From Idea to{" "}
          <span className="text-zinc-500">Influence.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          AROHA helps creators turn ideas into content, build meaningful
          connections, and grow their influence - all from one intelligent
          platform.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-black px-7 py-3.5 font-medium text-white transition hover:bg-zinc-800">
            Start Creating
          </button>

          <button className="rounded-full border border-zinc-300 px-7 py-3.5 font-medium transition hover:bg-zinc-50">
            Explore AROHA
          </button>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-y border-zinc-200 bg-zinc-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              What AROHA does
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Your creator journey, organized.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              number="01"
              title="Create"
              description="Turn your ideas into content concepts, scripts, titles, captions, and publishing plans with AI."
            />

            <FeatureCard
              number="02"
              title="Connect"
              description="Discover guests, collaborators, brands, and opportunities that fit your creator journey."
            />

            <FeatureCard
              number="03"
              title="Rise"
              description="Understand your performance, discover what works, and build a consistent growth strategy."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tell AROHA what you want to create.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-600">
            AROHA turns your goal into an actionable creator workflow — from
            planning and production to promotion and growth.
          </p>

          <div className="mt-14 grid gap-8 text-left md:grid-cols-3">
            <Step number="01" title="Tell us your niche">
              Choose your creator type, audience, niche, and goals.
            </Step>

            <Step number="02" title="Let AI plan">
              Get content ideas, guests, campaigns, and growth strategies.
            </Step>

            <Step number="03" title="Create & grow">
              Execute your plan and use insights to continuously improve.
            </Step>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-black px-8 py-16 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create what connects.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Your ideas deserve more than a blank page. Build your creator
            journey with AROHA.
          </p>

          <button className="mt-8 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:bg-zinc-200">
            Get Started with AROHA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-zinc-200 px-8 py-8 text-center text-sm text-zinc-500"
      >
        <p>© 2026 AROHA. From Idea to Influence.</p>
      </footer>
    </main>
  );
}

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
      <span className="text-sm font-semibold text-zinc-400">{number}</span>

      <h3 className="mt-8 text-2xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-600">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-zinc-300 pt-6">
      <span className="text-sm font-semibold text-zinc-400">{number}</span>

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-600">{children}</p>
    </div>
  );
}