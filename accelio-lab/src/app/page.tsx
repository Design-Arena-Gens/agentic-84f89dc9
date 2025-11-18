import Link from "next/link";

type Differentiator = {
  title: string;
  description: string;
  metrics: string;
};

type Capability = {
  title: string;
  description: string;
  items: string[];
};

const differentiators: Differentiator[] = [
  {
    title: "Production-Grade AI Systems",
    description:
      "Architect resilient, compliant platforms that integrate LLMs, vector search, knowledge graphs, and realtime data streams.",
    metrics: "99.95% uptime | SOC2-ready | Multi-cloud failover",
  },
  {
    title: "Velocity Without Compromise",
    description:
      "Fast-track program roadmaps from discovery to production with an execution pod covering strategy, engineering, and change enablement.",
    metrics: "6-week launch frameworks | 60% automation uplift",
  },
  {
    title: "Responsible & Measurable Outcomes",
    description:
      "Instrument every initiative with explainability, governance, and business KPIs so you can prove ROI before scaling spend.",
    metrics: "AI ROI dashboards | Risk-weighted approvals",
  },
];

const capabilities: Capability[] = [
  {
    title: "Foundational Infrastructure",
    description:
      "Design the data and orchestration backbone that keeps every intelligent workflow in sync.",
    items: ["Data fabric & pipelines", "Feature stores & embeddings", "Observability & guardrails"],
  },
  {
    title: "Applied AI Programs",
    description:
      "Build domain-tuned copilots, retrieval systems, and autonomous agents that speak your enterprise language.",
    items: ["RAG & knowledge agents", "Workflow copilots", "Model evaluation suites"],
  },
  {
    title: "Enablement & Governance",
    description:
      "Operationalize AI with playbooks, change management, and governance that align stakeholders.",
    items: ["Operating model & playbooks", "Risk & compliance frameworks", "Upskilling & adoption"],
  },
];

const caseStudies = [
  {
    headline: "Global logistics enterprise",
    result: "Unified knowledge agent across 12 regions",
    impact: "28% faster resolution, 7-figure annual savings",
  },
  {
    headline: "Healthcare provider network",
    result: "Federated AI infrastructure with HIPAA guardrails",
    impact: "4x model utilization, audit-ready within 90 days",
  },
  {
    headline: "Financial services platform",
    result: "Real-time alerting copilots for 180+ advisors",
    impact: "30% increase in AUM-qualified leads",
  },
];

const workflowStages = [
  {
    title: "01. Diagnose",
    summary:
      "Holistic audit of data, infra, compliance, and business value streams mapped to AI leverage points.",
  },
  {
    title: "02. Blueprint",
    summary:
      "Create a modular reference architecture and value-realization roadmap backed by measurable success criteria.",
  },
  {
    title: "03. Build",
    summary:
      "Spin up an execution pod that ships production-grade services with automated testing and observability.",
  },
  {
    title: "04. Scale",
    summary:
      "Run adoption sprints, codify governance, and enable internal teams to extend the platform with confidence.",
  },
];

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Impact", href: "#impact" },
  { label: "Insights", href: "#insights" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="grid-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-12 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-10">
          <nav className="flex items-center justify-between gap-6 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-sky-400/50 via-blue-500/60 to-indigo-500/50 text-xl font-semibold text-white shadow-lg shadow-blue-500/40">
                A
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                  Accelio Lab
                </p>
                <p className="text-lg font-medium text-white">AI Infrastructure Consulting</p>
              </div>
            </div>
            <div className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="#contact"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-blue-500/40"
            >
              Engage Team
            </Link>
          </nav>

          <section className="relative overflow-hidden rounded-3xl bg-white/5 p-10 shadow-[0_40px_120px_-60px_rgba(28,78,216,0.55)] backdrop-blur-lg sm:p-16">
            <div className="absolute left-16 top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-blue-100">
                  Strategic AI Infrastructure
                </span>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Operationalize AI across your enterprise with confidence.
                </h1>
                <p className="text-lg leading-relaxed text-white/70 lg:text-xl">
                  Accelio Lab accelerates medium and large enterprises from AI experimentation to
                  measurable production impact. We design unified data and inference platforms,
                  ship domain-tuned copilots, and embed governance that transforms intelligent
                  initiatives into durable competitive advantage.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#insights"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5"
                  >
                    View Case Impact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M5 12a1 1 0 0 1 1-1h9.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 3.999a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L15.586 13H6a1 1 0 0 1-1-1Z" />
                    </svg>
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    Schedule Discovery
                  </Link>
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  {[
                    { label: "AI Platforms Deployed", value: "40+" },
                    { label: "Enterprise Data Sources Unified", value: "380+" },
                    { label: "Average Time-to-Value", value: "6 Weeks" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex flex-col gap-6">
                  <p className="text-sm font-medium uppercase tracking-[0.32em] text-white/50">
                    Trusted By Leaders In
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-base font-semibold text-white/80 sm:grid-cols-3">
                    {[
                      "Logistics",
                      "Healthcare",
                      "Financial Services",
                      "Energy",
                      "Manufacturing",
                      "Professional Services",
                    ].map((sector) => (
                      <span
                        key={sector}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                    Analyst Quote
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-white/80">
                    “Accelio Lab brings the missing connective tissue between AI vision and operating
                    reality. Their infrastructure-first approach de-risks transformation for large
                    enterprises.”
                  </p>
                  <p className="mt-4 text-sm font-medium text-white/50">Forrester Advisory Partner</p>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section
          id="capabilities"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg sm:p-16"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
                Differentiation
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Enterprise-grade execution tuned for AI velocity.
              </h2>
              <p className="max-w-3xl text-lg text-white/70">
                We partner with technology, data, and operations leaders to architect full-stack AI
                platforms that scale. Every engagement is anchored in business outcomes, governed by
                risk controls, and accelerated by reusable accelerators.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {differentiators.map((item) => (
                <article key={item.title} className="glass-surface rounded-3xl p-8">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{item.description}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                    {item.metrics}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-100">
                  Capability
                </div>
                <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{capability.description}</p>
                <ul className="mt-4 space-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="impact"
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5 p-10 backdrop-blur-lg sm:p-16"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
                Proven Impact
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                From pilot to scaled AI ecosystems.
              </h2>
              <p className="max-w-3xl text-lg text-white/70">
                Our pods embed alongside your teams, transferring knowledge while delivering
                production-ready AI services. The outcome: repeatable wins that unlock new revenue,
                efficiency, and customer experience.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.headline}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="flex flex-col gap-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                      {study.headline}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{study.result}</h3>
                  </div>
                  <p className="mt-6 text-sm font-medium text-blue-200/90">{study.impact}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-blue-200">
                  Insight Report
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  2025 AI Infrastructure Readiness Benchmark
                </h3>
                <p className="mt-3 max-w-xl text-sm text-white/70">
                  Discover the five maturity pillars that differentiate modernization leaders from
                  laggards—and how Accelio Lab helps enterprises close the gap.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Request Executive Briefing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M5 12a1 1 0 0 1 1-1h9.586l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 3.999a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L15.586 13H6a1 1 0 0 1-1-1Z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg sm:p-16 lg:grid-cols-[0.9fr_1fr]"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
              Delivery Model
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Embedded execution pods orchestrated for measurable outcomes.
            </h2>
            <p className="text-lg text-white/70">
              Your dedicated pod spans strategy leads, platform engineers, MLOps experts, and
              change partners. Together we stand up the architecture, measure the impact, and enable
              your teams to scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {["Strategists", "Platform Engineers", "Data/ML Specialists", "Governance Leads"].map(
                (role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70"
                  >
                    {role}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="grid gap-4">
            {workflowStages.map((stage) => (
              <div
                key={stage.title}
                className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-300/40 hover:bg-blue-500/10"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-blue-100">{stage.title}</p>
                <p className="text-sm leading-relaxed text-white/75">{stage.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="insights"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg sm:p-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
                Thought Leadership
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Latest intelligence from the Accelio Lab research desk.
              </h2>
              <p className="text-lg text-white/70">
                We continuously test new architectures, model providers, and governance patterns.
                Access curated findings to inform your roadmap and stakeholder conversations.
              </p>
              <div className="mt-6 space-y-6">
                {[
                  {
                    title: "Blueprinting AI-ready data fabrics with hybrid vector storage",
                    date: "January 2025",
                  },
                  {
                    title: "Navigating safety controls for autonomous enterprise agents",
                    date: "December 2024",
                  },
                  {
                    title: "Benchmark: latency trade-offs across leading inference providers",
                    date: "November 2024",
                  },
                ].map((insight) => (
                  <article
                    key={insight.title}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/10"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-blue-100">
                      {insight.date}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                    <p className="text-sm text-white/65">
                      Executive briefings and deep dives available upon engagement.
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/10 p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),transparent_55%)]" />
              <div className="relative flex flex-col gap-5">
                <p className="text-sm uppercase tracking-[0.32em] text-white/60">Acceleration Kit</p>
                <h3 className="text-2xl font-semibold text-white">
                  Launch your AI initiative with a 30-day roadmap.
                </h3>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    "Cross-functional stakeholder alignment playbook",
                    "Reference architecture tailored to your domain",
                    "Governance, compliance, and risk assessment toolkit",
                    "ROI model and analytics instrumentation plan",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-white/80" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/20"
                >
                  Reserve Your Workshop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M5 12a1 1 0 0 1 1-1h9.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 3.999a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L15.586 13H6a1 1 0 0 1-1-1Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg sm:p-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
                Engage Accelio Lab
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to operationalize AI with scale-ready infrastructure?
              </h2>
              <p className="text-lg text-white/70">
                Share your mandate and we will assemble a lead architect and strategist to scope a
                tailored launch plan within 48 hours.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    label: "Discovery Call",
                    description: "45-minute executive workshop to identify priority value streams.",
                  },
                  {
                    label: "Architecture Review",
                    description: "Independent assessment across data, infra, governance, and tooling.",
                  },
                  {
                    label: "Pilot Definition",
                    description: "Co-design a 6-week sprint with measurable ROI guardrails.",
                  },
                  {
                    label: "Readiness Report",
                    description: "Board-ready summary covering investment, timeline, and risks.",
                  },
                ].map((offer) => (
                  <div
                    key={offer.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70"
                  >
                    <p className="text-sm font-semibold text-white">{offer.label}</p>
                    <p className="mt-2 text-sm text-white/70">{offer.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <form className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-[0_24px_80px_-40px_rgba(37,99,235,0.7)]">
              <div className="grid gap-4 text-sm text-white/80 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Jordan Patel"
                    className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                    Business Email
                  </span>
                  <input
                    type="email"
                    placeholder="jordan@enterprise.com"
                    className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                    Company
                  </span>
                  <input
                    type="text"
                    placeholder="Accelio Partner Corp"
                    className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                    Team Size
                  </span>
                  <select className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none">
                    {["500-1,000", "1,000-5,000", "5,000-10,000", "10,000+"].map((size) => (
                      <option key={size} value={size} className="bg-slate-900 text-white">
                        {size}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                  Initiative Summary
                </span>
                <textarea
                  rows={4}
                  placeholder="Outline the AI transformation objectives, stakeholders, and current blockers."
                  className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none"
                />
              </label>
              <label className="flex items-start gap-3 text-xs text-white/60">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10" />
                Receive quarterly AI leadership briefings from Accelio Lab.
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Submit & Schedule
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M5 12a1 1 0 0 1 1-1h9.586l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 3.999a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L15.586 13H6a1 1 0 0 1-1-1Z" />
                </svg>
              </button>
            </form>
          </div>
        </section>

        <footer className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 px-10 py-8 text-sm text-white/60 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/50">Accelio Lab</p>
            <p className="mt-1 text-sm text-white/70">
              AI Infrastructure Partners for medium to large enterprises.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="mailto:hello@acceliolab.com" className="hover:text-white">
              hello@acceliolab.com
            </Link>
            <span>New York · Toronto · Remote-first</span>
            <span>© {new Date().getFullYear()} Accelio Lab. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
