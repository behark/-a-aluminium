export default function About() {
  return (
    <section id="rreth" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="eyebrow mb-4">Rreth nesh</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-ink">
              Alumini me stil,
              <span className="block italic font-normal text-primary">me cilësi gjermane.</span>
            </h2>
            <p className="text-ink/65 text-[1.02rem] leading-relaxed mt-7">
              Produktet tona përfshijnë dyer, dritare, vitrina, gilindera dhe xhama me profile origjinale REHAU. Ne fokusohemi në izolim, siguri dhe dizajn të qëndrueshëm.
            </p>
            <p className="text-ink/65 text-[1.02rem] leading-relaxed mt-5">
              Çdo projekt realizohet me porosi dhe montim të saktë, për banesa dhe bizneset që kërkojnë performancë dhe estetikë.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t hairline">
              {[
                { label: "Përpunim me precizion" },
                { label: "Izolim termik" },
                { label: "Dizajn me porosi" },
                { label: "Montim profesional" },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-ink font-medium text-[0.95rem]">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('/images/storefront-about.jpg')",
              }}
            />
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-cream border hairline px-6 py-4 shadow-xl">
              <div className="eyebrow mb-1">Vlerësim në Google</div>
              <div className="flex items-center gap-2">
                <div className="flex text-secondary-dark text-sm">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="opacity-40">★</span>
                </div>
                <span className="font-[family-name:var(--font-playfair)] text-xl text-ink">4,7</span>
              </div>
              <div className="text-[0.75rem] text-ink/55 mt-0.5">143 komente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
