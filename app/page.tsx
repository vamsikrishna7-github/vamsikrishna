export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      <section className="relative z-10 w-full max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Coming Soon
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-rose-300 bg-clip-text text-transparent">
            Vamsi Krishna&apos;s
          </span>{" "}
          Portfolio
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Hola people, I am Vamsi Krishna, based in Hyderabad. My portfolio is
          coming soon. Thanks for visiting — contact me via email.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:vamsikrishna.nagidi@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contact via Email
          </a>

          <a
            href="mailto:vamsikrishna.nagidi@gmail.com"
            className="text-sm font-medium text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
          >
            vamsikrishna.nagidi@gmail.com
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <Card title="Portfolio" description="Personal website launching soon." />
          <Card title="Hyderabad" description="Based in Hyderabad, India." />
          <Card title="Contact" description="Reach me anytime through email." />
        </div>
      </section>

      <footer className="relative z-10 mt-20 text-xs text-slate-400">
        © {new Date().getFullYear()} Vamsi Krishna. All rights reserved.
      </footer>
    </main>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:border-white/20 hover:bg-white/10">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1 text-xs text-slate-300">{description}</p>
    </div>
  );
}