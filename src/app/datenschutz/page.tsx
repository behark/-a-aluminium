import Link from "next/link";

export default function Datenschutz() {
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
          Politika e privatësisë
        </h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-accent">
              1. Mbrojtja e të dhënave
            </h2>
            <p>
              Kjo politikë e privatësisë ju informon për llojin, fushën dhe
              qëllimin e përpunimit të të dhënave personale në faqen tonë të
              internetit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">
              2. Përgjegjësi
            </h2>
            <p>
              A Aluminium SH.P.K.
              <br />
              46 Dëshmorët e Kombit
              <br />
              40000 Mitrovicë, Kosovë
              <br />
              Telefon: +383 49 323 381
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">
              3. Mbledhja e të dhënave
            </h2>
            <p>
              Faqja jonë e internetit nuk mbledh të dhëna personale në mënyrë
              automatike. Nëse na kontaktoni përmes telefonit ose WhatsApp,
              të dhënat e dhëna ruhen për përpunimin e kërkesës.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">4. Cookies</h2>
            <p>
              Kjo faqe nuk përdor cookies gjurmimi. Përdoren vetëm cookies
              teknikisht të nevojshme për funksionimin e faqes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">5. Google Maps</h2>
            <p>
              Përdorim Google Maps për shfaqjen e lokacionit tonë. Gjatë kësaj,
              të dhënat transferohen te Google. Informata më të hollësishme
              gjeni në politikën e privatësisë së Google.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">6. Të drejtat tuaja</h2>
            <p>
              Keni të drejtë për informim, korrigjim, fshirje dhe kufizim të
              përpunimit të të dhënave tuaja. Për pyetje na kontaktoni.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
