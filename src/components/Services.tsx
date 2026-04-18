const services = [
  {
    n: "01",
    title: "Dyer",
    en: "Doors",
    description:
      "Dyer hyrëse, të brendshme dhe industriale — alumini me profile REHAU, izolim termik dhe siguri e lartë.",
    features: ["Izolim termik", "Kyç shumë-pikësh", "Dizajn me porosi"],
  },
  {
    n: "02",
    title: "Dritare",
    en: "Windows",
    description:
      "Dritare me profil REHAU, xhama dyfish e trefish. Heshtje, izolim dhe kursim energjie për vite.",
    features: ["Xhama 2K / 3K", "U-value deri 0.7", "Ngjyra RAL me kërkesë"],
  },
  {
    n: "03",
    title: "Vitrina",
    en: "Storefronts",
    description:
      "Vitrina komerciale për dyqane, restorante dhe biznese. Sipërfaqe të mëdha xhami, kornizë e hollë, pamje moderne.",
    features: ["Sistem rrëshqitës", "Xhama të trashë", "Zgjidhje për biznes"],
  },
  {
    n: "04",
    title: "Gilindera",
    en: "Roller shutters",
    description:
      "Rul alumini për dyqane, garazha dhe industri. Komandë manuale ose elektrike, rezistencë ndaj motit dhe vjedhjes.",
    features: ["Motor elektrik", "Siguri anti-vjedhje", "Montim i shpejtë"],
  },
  {
    n: "05",
    title: "Xhama",
    en: "Glazing",
    description:
      "Xhama të sigurisë, të kalitura, laminatë dhe dekorativë. Kornizë ose pa kornizë, për shtëpi dhe biznes.",
    features: ["Xhama të kalitur", "Zgjidhje pa kornizë", "Matje në vend"],
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="py-24 sm:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">Çfarë ofrojmë</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.03] text-ink">
              Pesë shërbime,
              <span className="block italic font-normal text-primary">një standard i vetëm.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-ink/65 text-base leading-relaxed">
            Që nga matja e parë e deri te montimi final — punojmë me precizitet
            gjerman dhe profile origjinale REHAU. Çdo projekt bëhet me porosi,
            për shtëpinë ose biznesin tuaj.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-white p-8 sm:p-10 flex flex-col min-h-[440px] transition-colors hover:bg-cream"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="eyebrow text-ink/40 tabular-nums">{s.n}</span>
                <span className="text-xs uppercase tracking-wider text-ink/30">
                  {s.en}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-ink mb-3">
                {s.title}
              </h3>
              <p className="text-ink/65 leading-relaxed text-[0.95rem] mb-6">
                {s.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-ink/70"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-primary shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div
                className="absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 w-0 group-hover:w-full"
                aria-hidden
              />
            </article>
          ))}

          <article className="relative bg-[#0B0B0D] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[440px]">
            <div>
              <div className="eyebrow text-[#2BAEE6] mb-4">Partner</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl mb-4">
                REHAU <span className="italic opacity-80">Authorised.</span>
              </h3>
              <p className="text-white/65 leading-relaxed text-[0.95rem]">
                Punojmë ekskluzivisht me profile origjinale REHAU — brandi gjerman
                premium me mbi 75 vite eksperiencë në profile për dyer dhe dritare.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/15">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C53A5E] text-white text-xs font-bold">
                R
              </span>
              <div className="text-xs leading-tight">
                <div className="text-white/90 font-semibold">REHAU Quality</div>
                <div className="text-white/50">Authorised Partner</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
