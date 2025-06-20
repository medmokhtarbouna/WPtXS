import CountdownTimer from "./CountdownTimer2";

export default function Hero() {
  return (
    <section
      className="
        relative flex min-h-screen flex-col items-center justify-center
        bg-gray-900
        bg-hero-radial
        text-center text-white
        px-6
        hero
        
      "
    >
      {/* شريط التاريخ فوق العنوان */}
      <div className="mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur md:text-base">
        March 15–17, 2025 • Marrakesh, Morocco
      </div>

      <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
        World Power-to-X
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Summit 2025
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
        Shaping the future of green hydrogen and sustainable energy transformation in the heart
        of Africa
      </p>

      <h2 className="mt-16 text-2xl font-semibold">Event Starts In</h2>
      <CountdownTimer target="2025-03-15T09:00:00" />

      {/* أزرار CTA */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a href="#register" className="btn-gradient">
          Register Now
        </a>
        <a
          href="#agenda"
          className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/10"
        >
          View Agenda
        </a>
      </div>
    </section>
  );
}
