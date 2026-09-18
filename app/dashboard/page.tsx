const stats = [
  {
    label: "Content Ideas",
    value: "24",
    change: "+8 this week",
  },
  {
    label: "Upcoming Guests",
    value: "6",
    change: "2 confirmed",
  },
  {
    label: "Published",
    value: "12",
    change: "+4 this month",
  },
  {
    label: "Avg. Engagement",
    value: "8.4%",
    change: "+1.2%",
  },
];

const upcoming = [
  {
    title: "The Future of AI",
    type: "Podcast Episode",
    date: "Today · 6:00 PM",
  },
  {
    title: "Interview with Rahul",
    type: "Guest Episode",
    date: "Tomorrow · 5:30 PM",
  },
  {
    title: "Creator Economy 2026",
    type: "Research & Planning",
    date: "Sep 22 · 10:00 AM",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-zinc-200 bg-white p-6 md:block">
          <div className="mb-10">
            <h1 className="text-2xl font-bold tracking-tight">AROHA</h1>
            <p className="mt-1 text-xs text-zinc-500">
              From Idea to Influence.
            </p>
          </div>

          <nav className="space-y-2">
            <NavItem label="Overview" active />
            <NavItem label="Content" />
            <NavItem label="Guests" />
            <NavItem label="Campaigns" />
            <NavItem label="Analytics" />
            <NavItem label="AI Assistant" />
          </nav>

          <div className="mt-auto pt-12">
            <div className="rounded-2xl bg-zinc-100 p-4">
              <p className="text-sm font-semibold">Creator Pro</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Your AI creator workspace is ready.
              </p>

              <button className="mt-4 w-full rounded-xl bg-black px-4 py-2 text-xs font-medium text-white">
                Upgrade
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-5 md:px-10">
            <div>
              <p className="text-sm text-zinc-500">Good morning 👋</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">
                Welcome back, Creator.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm md:block">
                Notifications
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                P
              </div>
            </div>
          </header>

          {/* Dashboard */}
          <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
            {/* Quick Action */}
            <div className="rounded-3xl bg-black p-8 text-white md:p-10">
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-zinc-400">
                  AI CREATOR ASSISTANT
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  What do you want to create today?
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  Tell AROHA your idea and let AI turn it into a complete
                  content workflow.
                </p>

                <button className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200">
                  Start with AI →
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <p className="text-sm text-zinc-500">{stat.label}</p>

                  <p className="mt-3 text-3xl font-bold">{stat.value}</p>

                  <p className="mt-2 text-xs text-zinc-500">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Main Grid */}
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {/* Upcoming */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Upcoming</p>
                    <h3 className="mt-1 text-xl font-bold">
                      Your creator schedule
                    </h3>
                  </div>

                  <button className="text-sm font-medium text-zinc-500 hover:text-black">
                    View all
                  </button>
                </div>

                <div className="mt-6 divide-y divide-zinc-100">
                  {upcoming.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between gap-4 py-5"
                    >
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="mt-1 text-sm text-zinc-500">
                          {item.type}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-xs text-zinc-500">
                        {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insight */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <p className="text-sm font-semibold">AI Insight</p>

                <h3 className="mt-2 text-xl font-bold">
                  Your audience is listening.
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Your recent technology episodes are getting stronger
                  engagement. AROHA recommends exploring more conversations
                  around AI and the creator economy.
                </p>

                <button className="mt-6 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:bg-zinc-50">
                  Explore insight
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function NavItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
        active
          ? "bg-black text-white"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
      }`}
    >
      {label}
    </button>
  );
}