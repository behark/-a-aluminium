export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0B0B0D]"
    >
      <div
        className="absolute inset-0 kenburns bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('/images/storefront-hero.jpg')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(11,11,13,0.95) 0%, rgba(11,11,13,0.75) 40%, rgba(11,11,13,0.35) 70%, rgba(11,11,13,0.65) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 w-full text-white grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 fade-up fade-up-1">
            <span className="w-10 h-px bg-[#2BAEE6]" />
            <span className="eyebrow text-[#2BAEE6]">
              Partner i autorizuar REHAU
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] font-semibold tracking-tight mt-6 mb-6 text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.98] fade-up fade-up-2">
            Alumini që
            <span className="block italic font-normal text-[#2BAEE6]">
              mban kohën.
            </span>
          </h1>

          <p className="max-w-xl text-lg sm:text-xl text-white/70 font-light leading-relaxed fade-up fade-up-3">
            Dyer, dritare, vitrina, gilindera dhe xhama — të projektuara dhe
            montuara me profile gjermane REHAU. Precizë, izolim, dhe dizajn që
            zgjat për dekada.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mt-10 fade-up fade-up-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 bg-[#2BAEE6] text-[#0B0B0D] font-semibold px-7 py-3.5 text-[0.95rem] tracking-wide transition-all hover:bg-white w-full sm:w-auto justify-center"
            >
              Kërko ofertë falas
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              href="tel:+38349323381"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-medium px-7 py-3.5 text-[0.95rem] tracking-wide transition-all w-full sm:w-auto justify-center hover:bg-white/5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99Z" />
              </svg>
              +383 49 323 381
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 fade-up fade-up-4 text-sm text-white/55">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2BAEE6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              10+ vite përvojë
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2BAEE6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Garanci deri në 10 vite
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2BAEE6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Matje & montim në vend
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 lg:block hidden fade-up fade-up-4">
          <div className="relative border border-white/15 bg-white/[0.03] backdrop-blur-sm p-8">
            <div className="absolute -top-px left-0 w-12 h-px bg-[#2BAEE6]" />
            <div className="eyebrow text-[#2BAEE6] mb-4">Shërbime</div>
            <ul className="space-y-3 text-[0.95rem] text-white/85">
              {[
                ["01", "Dyer"],
                ["02", "Dritare"],
                ["03", "Vitrina"],
                ["04", "Gilindera"],
                ["05", "Xhama"],
              ].map(([n, s]) => (
                <li
                  key={n}
                  className="flex items-baseline justify-between py-2 border-b border-white/10 last:border-0"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-white/35 text-xs tabular-nums">{n}</span>
                    <span>{s}</span>
                  </span>
                  <span className="text-white/30">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/45">
        <span className="eyebrow text-white/45">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
