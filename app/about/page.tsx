import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire & Vision Tech",
  description: "Découvrez ID TITAND MBATACK SARL, spécialiste des solutions informatiques au Cameroun depuis 2021.",
  alternates: { canonical: "https://idtitandmbatack.cm/about" },
};

const values = [
  { title: "Innovation", desc: "Nous adoptons les dernières technologies pour offrir des solutions à la pointe de l'innovation." },
  { title: "Performance", desc: "Des systèmes robustes et disponibles 24/7 pour assurer la continuité de vos activités." },
  { title: "Intégrité", desc: "Transparence totale dans nos devis, délais et communications avec chaque client." },
  { title: "Excellence", desc: "Chaque projet est livré avec le plus haut niveau de qualité et de professionnalisme." },
];

const milestones = [
  { year: "2021", title: "Fondation", desc: "ID TITAND MBATACK SARL est fondée avec la mission de transformer le paysage IT camerounais." },
  { year: "2022", title: "Premiers Grands Projets", desc: "Livraison de nos premiers projets d'infrastructure et développement logiciel pour des entreprises locales." },
  { year: "2023", title: "Expansion des Services", desc: "Lancement de nos services cybersécurité et cloud, répondant à la demande croissante du marché." },
  { year: "2024+", title: "Vision Régionale", desc: "Développement vers d'autres marchés d'Afrique Centrale avec des solutions IT innovantes." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto w-full border-b border-[#e8e6f0]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase mb-4">Notre Histoire</p>
            <h1 className="display text-[clamp(2.5rem,6vw,5rem)] text-[#0a0a0f]">
              L&apos;Histoire<br />
              <span className="grad-text">d&apos;ID TITAND</span>
            </h1>
          </div>
          <p className="text-[#6b6880] leading-relaxed pb-2">
            Fondée en 2021, ID TITAND MBATACK SARL est une société informatique camerounaise dédiée à la fourniture de solutions technologiques innovantes pour les entreprises.
          </p>
        </div>
      </section>

      {/* ══ HERO IMAGE ══ */}
      <section className="px-6 py-10 max-w-6xl mx-auto w-full">
        <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden bg-[#f3f2f8]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80&auto=format"
            alt="Équipe IT africaine" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3">
            <p className="font-bold text-[#0a0a0f] text-sm">ID TITAND MBATACK SARL</p>
            <p className="text-[#6b6880] text-xs">Cameroun — Solutions IT depuis 2021</p>
          </div>
        </div>
      </section>

      {/* ══ MANIFESTO ══ */}
      <section className="border-t border-[#e8e6f0] py-20 px-6 bg-[#f8f7ff]">
        <div className="max-w-6xl mx-auto">
          <p className="font-bold text-[clamp(1.3rem,3vw,2rem)] text-[#0a0a0f] leading-relaxed max-w-4xl">
            <span className="text-[#6b6880]">Nous ne construisons pas juste des logiciels —</span>{" "}
            <span className="grad-text">nous construisons l&apos;avenir numérique du Cameroun.</span>{" "}
            Chaque solution que nous livrons contribue à la transformation digitale des entreprises africaines.
          </p>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="border-y border-[#e8e6f0] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "2021", l: "Fondée" },
            { v: "50+",  l: "Clients satisfaits" },
            { v: "100+", l: "Projets livrés" },
            { v: "6",    l: "Domaines d'expertise" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="display text-3xl text-[#7c3aed]">{s.v}</p>
              <div className="w-6 h-0.5 bg-[#7c3aed] mx-auto my-2" />
              <p className="text-[#6b6880] text-xs">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#0a0a0f]">
            Notre <span className="grad-text">Parcours</span>
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className={`grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 py-8 ${i < milestones.length - 1 ? "border-b border-[#e8e6f0]" : ""}`}>
                <p className="display text-2xl text-[#d4d0e0]">{m.year}</p>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-[#0a0a0f]">{m.title}</h3>
                  <p className="text-[#6b6880] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="border-t border-[#e8e6f0] py-24 px-6 bg-[#f8f7ff]">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#0a0a0f]">
            Nos Valeurs<br /><span className="grad-text">Fondamentales</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white border border-[#e8e6f0] rounded-2xl p-6 space-y-3 card-hover">
                <div className="w-10 h-10 bg-[#ede9fe] rounded-xl flex items-center justify-center">
                  <span className="text-[#7c3aed] font-mono text-xs font-bold">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#0a0a0f] text-lg">{v.title}</h3>
                <p className="text-[#6b6880] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SPLIT ══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-80 bg-[#f3f2f8]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format"
              alt="Équipe africaine tech" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase">Notre Mission</p>
            <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)] text-[#0a0a0f]">
              Accélérer la Transformation<br />Numérique en Afrique
            </h2>
            <p className="text-[#6b6880] text-sm leading-relaxed">
              Notre mission est de rendre les technologies de pointe accessibles aux entreprises camerounaises, en livrant des solutions IT qui génèrent une valeur réelle et mesurable.
            </p>
            <ul className="space-y-3">
              {["Solutions adaptées au contexte africain","Technologies de pointe accessibles","Équipe locale experte et disponible","Support continu et formation incluse"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#6b6880] text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/team" className="inline-flex items-center gap-2 text-[#7c3aed] font-semibold text-sm hover:underline">
              Rencontrer l&apos;équipe <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
