export default function Location() {
  return (
    <section id="lokacion" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="eyebrow mb-4">Lokacion</div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-ink">
            Na gjeni
            <span className="block italic font-normal text-primary">në qendër të punimeve tuaja.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="grid sm:grid-cols-2 gap-6 self-start">
            <div className="border-t border-ink pt-6">
              <div className="eyebrow mb-2">Adresa</div>
              <p className="text-ink/75 leading-relaxed">
                46 Dëshmorët e Kombit<br />Mitrovica e Veriut 40000
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="eyebrow mb-2">Telefon</div>
              <a href="tel:+38349323381" className="text-ink hover:text-primary transition-colors">
                +383 49 323 381
              </a>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="eyebrow mb-2">Orari</div>
              <div className="text-ink/75 space-y-1">
                <div className="flex justify-between">
                  <span>E përditshme</span>
                  <span className="tabular-nums">08:00 – 20:00</span>
                </div>
              </div>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="eyebrow mb-2">Social</div>
              <div className="flex flex-col gap-1">
                <a
                  href="https://www.instagram.com/aluminium.shpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.instagram.com/aluminium.shpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow-xl min-h-[420px] bg-warm-gray">
            <iframe
              src="https://maps.google.com/maps?q=46%20D%C3%ABshmor%C3%ABt%20e%20Kombit%2046%2C%20Mitrovica%20e%20Veriu%2040000&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", filter: "grayscale(0.2) contrast(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aluminium Lokacion"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
