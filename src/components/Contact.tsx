export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 sm:py-36 bg-[#0F0F10] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/90 to-[#0F0F10]/70" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow text-[#E8C75E] mb-5">Kontakt</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
          Na kontaktoni
          <span className="block italic font-normal text-[#E8C75E]">për matje dhe ofertë falas.</span>
        </h2>
        <p className="text-white/65 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Masat, oferta ose pyetjet teknike? Ne jemi këtu për t’ju ndihmuar me zgjidhje alumini të personalizuara.
        </p>

        <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10">
          <a
            href="https://wa.me/38349323381"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0F0F10] hover:bg-[#1a1a1c] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E8C75E] mb-3">01</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">WhatsApp</div>
            <div className="text-white/55 text-sm">Dërgo mesazh</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E8C75E] transition-colors">
              Hapni →
            </div>
          </a>

          <a
            href="tel:+38349323381"
            className="group bg-[#0F0F10] hover:bg-[#1a1a1c] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E8C75E] mb-3">02</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Telefon</div>
            <div className="text-white/55 text-sm">+383 49 323 381</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E8C75E] transition-colors">
              Telefononi →
            </div>
          </a>

          <a
            href="https://www.instagram.com/aluminium.shpk"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0F0F10] hover:bg-[#1a1a1c] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E8C75E] mb-3">03</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Instagram</div>
            <div className="text-white/55 text-sm">Shiko projektet</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E8C75E] transition-colors">
              Shko →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
