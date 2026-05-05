const projects = [
  {
    src: "/images/gallery/01-dyer-druri.jpg",
    alt: "Derë hyrëse druri me profil alumini",
    label: "Banesë private · Derë hyrëse",
  },
  {
    src: "/images/gallery/02-shtepi-moderne.jpg",
    alt: "Shtëpi moderne me gilindera dhe derë alumini",
    label: "Shtëpi · Gilindera & Derë",
  },
  {
    src: "/images/gallery/03-profile-rehau.jpg",
    alt: "Profile origjinale REHAU gati për montim",
    label: "Prodhim · Profile REHAU",
  },
  {
    src: "/images/gallery/04-dyer-alumini.jpg",
    alt: "Dyer alumini në prodhim dhe të montuara",
    label: "Dyer · Prodhim & Montim",
  },
  {
    src: "/images/gallery/05-vitrina-fibello.jpg",
    alt: "Vitrina komerciale Fibello Sweet Shop",
    label: "Vitrina · Objekt komercial",
  },
  {
    src: "/images/gallery/06-dyer-moderne.jpg",
    alt: "Derë moderne alumini e instaluar",
    label: "Banesë · Derë moderne",
  },
  {
    src: "/images/gallery/07-gilindera.jpg",
    alt: "Gilindera alumini të instaluara",
    label: "Banesë · Gilindera",
  },
  {
    src: "/images/gallery/08-objekt-komercial.jpg",
    alt: "Fasadë xhami për objekt komercial",
    label: "Objekt · Fasadë xhami",
  },
];

export default function Gallery() {
  return (
    <section id="projekte" className="py-24 sm:py-36 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow text-[#2BAEE6] mb-4">Projektet tona</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.03] text-white">
              Punë që flasin,
              <span className="block italic font-normal text-[#2BAEE6]">
                për vetë.
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 text-white/55 text-base leading-relaxed">
            Disa nga projektet e realizuara — shtëpi private, objekte komerciale
            dhe fasada. Çdo projekt bëhet me porosi, matje në vend dhe montim
            profesional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {projects.map((p) => (
            <div key={p.alt} className="group relative overflow-hidden aspect-[4/3]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${p.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-medium">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <a
            href="https://www.instagram.com/aluminium.shpk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white/60 hover:text-[#2BAEE6] transition-colors text-sm font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Shiko më shumë projekte në Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
