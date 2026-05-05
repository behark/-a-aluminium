import Link from "next/link";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-cream py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-primary hover:text-primary-dark font-semibold mb-8 inline-block"
        >
          &larr; Kthehu në faqen kryesore
        </Link>
        <h1 className="text-4xl font-bold font-[family-name:var(--font-playfair)] text-accent mb-8">
          Impressum
        </h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-accent">
              Informata sipas ligjit
            </h2>
            <p>
              A Aluminium SH.P.K.
              <br />
              46 Dëshmorët e Kombit
              <br />
              40000 Mitrovicë, Kosovë
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">Kontakti</h2>
            <p>
              Telefon: +383 49 323 381
              <br />
              Telefon: +383 49 445 103
              <br />
              WhatsApp:{" "}
              <a
                href="https://wa.me/38349323381"
                className="text-primary hover:text-primary-dark"
              >
                +383 49 323 381
              </a>
              <br />
              Instagram:{" "}
              <a
                href="https://www.instagram.com/aluminium.shpk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark"
              >
                @aluminium.shpk
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">
              Kufizimi i përgjegjësisë
            </h2>
            <p>
              Përmbajtjet e kësaj faqe interneti janë krijuar me kujdes të madh.
              Megjithatë, nuk mund të garantojmë saktësinë, plotësinë dhe
              aktualitetin e përmbajtjeve.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">Të drejtat e autorit</h2>
            <p>
              Përmbajtjet dhe veprat e krijuara nga operatorët e kësaj faqe
              mbrohen nga e drejta e autorit. Riprodhimi, përpunimi, shpërndarja
              dhe çdo lloj përdorimi jashtë kufijve të së drejtës së autorit
              kërkojnë pëlqimin me shkrim.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
