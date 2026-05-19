import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Shield, Wifi, Monitor, Database, HeadphonesIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Accueil — Solutions IT & Transformation Numérique",
  description: "ID TITAND MBATACK SARL — solutions informatiques innovantes pour propulser votre transformation numérique au Cameroun.",
  alternates: { canonical: "https://idtitandmbatack.cm" },
};

const services = [
  { icon: Code2,            title: "Développement Logiciel",   desc: "Applications web, mobiles et logiciels sur mesure." },
  { icon: Monitor,          title: "Infrastructure IT",         desc: "Installation et maintenance de vos systèmes." },
  { icon: Shield,           title: "Cybersécurité",             desc: "Protection de vos données et systèmes." },
  { icon: Wifi,             title: "Réseaux & Connectivité",    desc: "Déploiement de réseaux d'entreprise performants." },
  { icon: Database,         title: "Gestion de Données",        desc: "Bases de données, sauvegarde et cloud." },
  { icon: HeadphonesIcon,   title: "Support & Maintenance",     desc: "Assistance technique et helpdesk 24/7." },
];

const marquee = [
  "Développement Web","·","Applications Mobiles","·","Cybersécurité","·","Infrastructure IT","·",
  "Cloud & DevOps","·","Réseaux","·","Support Technique","·","Transformation Numérique","·",
  "Développement Web","·","Applications Mobiles","·","Cybersécurité","·","Infrastructure IT","·",
  "Cloud & DevOps","·","Réseaux","·","Support Technique","·","Transformation Numérique","·",
];

const clients = ["Entreprise A", "Startup B", "Groupe C", "ONG D", "PME E", "Institution F"];

const testimonials = [
  { quote: "ID TITAND MBATACK a transformé notre infrastructure IT. Leur expertise et leur réactivité sont exceptionnelles.", author: "Directeur IT", company: "Entreprise A" },
  { quote: "Une équipe technique de haut niveau qui comprend les enjeux du marché camerounais. Résultats au rendez-vous.", author: "CEO", company: "Startup B" },
  { quote: "Le développement de notre application a été livré dans les délais avec une qualité irréprochable.", author: "Responsable Digital", company: "Groupe C" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] text-[#7c3aed] text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
              Support en ligne · Solutions IT au Cameroun
            </div>

            <h1 className="display text-[clamp(2.8rem,6vw,5rem)] text-[#0a0a0f] leading-[1.05]">
              Solution Digitale<br />
              Pour Votre<br />
              <span className="grad-text">Entreprise</span>
            </h1>

            <p className="text-[#6b6880] text-base leading-relaxed max-w-md">
              Nous créons des solutions informatiques sur mesure qui propulsent la transformation numérique des entreprises camerounaises — du développement logiciel à la cybersécurité.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#7c3aed] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#6d28d9] transition-colors">
                Démarrer un Projet <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#e8e6f0] text-[#0a0a0f] font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#f3f2f8] transition-colors">
                Voir nos Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-2 border-t border-[#e8e6f0]">
              {[{ v: "2021", l: "Fondée" }, { v: "50+", l: "Clients" }, { v: "100+", l: "Projets" }].map((s) => (
                <div key={s.l}>
                  <p className="display text-2xl text-[#0a0a0f]">{s.v}</p>
                  <p className="text-[#6b6880] text-xs mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — African tech context */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[420px] bg-[#f3f2f8] glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format"
                alt="Équipe IT africaine au travail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7c3aed] rounded-lg flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#0a0a0f] text-sm">99% Qualité Garantie</p>
                  <p className="text-[#6b6880] text-xs">Projets livrés avec excellence</p>
                </div>
                <div className="ml-auto bg-[#ede9fe] text-[#7c3aed] text-xs font-bold px-3 py-1 rounded-full">99%</div>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -top-4 -right-4 bg-[#7c3aed] text-white rounded-2xl p-4 shadow-lg">
              <p className="font-bold text-2xl">28+</p>
              <p className="text-white/70 text-xs">Années<br />d&apos;expérience</p>
            </div>
          </div>
        </div>
      </section>



      {/* ══ CLIENTS ══ */}
      <section className="py-14 px-6 border-b border-[#e8e6f0]">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <p className="text-[#6b6880] text-xs tracking-widest uppercase">Ils nous font confiance</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="text-[#d4d0e0] font-bold text-lg hover:text-[#7c3aed] transition-colors cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POWERFUL AGENCY SECTION ══ */}
      <section className="py-24 px-6 bg-[#f8f7ff]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-80 bg-[#e8e6f0]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format"
              alt="Équipe africaine tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#7c3aed] text-white rounded-xl px-4 py-3">
              <p className="font-bold text-xl">28+</p>
              <p className="text-white/70 text-xs">Années d&apos;expérience</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-[#6b6880] text-xs">Expérience</p>
              <p className="font-bold text-[#0a0a0f] text-sm">de Travail</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase">Agence Puissante</p>
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#0a0a0f]">
              Agence Digitale<br />
              Pour les Entreprises<br />
              <span className="grad-text">Africaines.</span>
            </h2>
            <p className="text-[#6b6880] leading-relaxed">
              Nous développons des solutions web réelles adaptées aux petites et grandes entreprises avec des exigences sur mesure. Notre expertise couvre l&apos;ensemble du spectre IT.
            </p>
            <Link href="/about"
              className="inline-flex items-center gap-2 bg-[#7c3aed] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#6d28d9] transition-colors">
              En savoir plus <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase mb-3">Nos Solutions</p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#0a0a0f]">
                Comment Nous Portons<br />
                Votre Business au<br />
                <span className="grad-text">Niveau Supérieur</span>
              </h2>
            </div>
            <p className="text-[#6b6880] leading-relaxed">
              Nous nous efforçons de développer des solutions web réelles idéales pour les petites et grandes entreprises avec des exigences sur mesure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Link key={title} href="/services"
                className="group card-hover bg-white border border-[#e8e6f0] rounded-2xl p-6 space-y-4 hover:border-[#7c3aed]/30">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  i % 3 === 0 ? "bg-[#ede9fe]" : i % 3 === 1 ? "bg-[#e0f2fe]" : "bg-[#f0fdf4]"
                }`}>
                  <Icon className={`w-6 h-6 ${i % 3 === 0 ? "text-[#7c3aed]" : i % 3 === 1 ? "text-[#06b6d4]" : "text-[#16a34a]"}`} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0a0f] text-base group-hover:text-[#7c3aed] transition-colors">{title}</h3>
                  <p className="text-[#6b6880] text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[#7c3aed] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="py-24 px-6 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase">Notre Processus</p>
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white">
              Comprendre le<br />
              <span className="grad-text">Processus Business</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n:"01", t:"Découverte & Analyse",   d:"Analyse approfondie de vos besoins, objectifs et environnement technique.", img:"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format" },
              { n:"02", t:"Conception & Développement", d:"Conception de l'architecture et développement avec les meilleures technologies.", img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format" },
              { n:"03", t:"Déploiement & Support",  d:"Mise en production, formation des équipes et support continu.", img:"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80&auto=format" },
            ].map((step) => (
              <div key={step.n} className="relative rounded-2xl overflow-hidden h-64 bg-[#1a1a2e] group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.img} alt={step.t} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#7c3aed] font-mono text-xs mb-2">{step.n}</span>
                  <h3 className="font-bold text-white text-lg">{step.t}</h3>
                  <p className="text-white/60 text-sm mt-1 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-24 px-6 bg-[#f8f7ff]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase">Témoignages</p>
            <h2 className="display text-[clamp(2rem,4vw,3rem)] text-[#0a0a0f]">
              Approuvé par nos<br />Partenaires Heureux
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-[#e8e6f0] rounded-2xl p-6 space-y-4 card-hover">
                <span className="text-[#7c3aed] text-3xl font-serif">&ldquo;</span>
                <p className="text-[#6b6880] text-sm leading-relaxed italic">{t.quote}</p>
                <div className="flex items-center gap-3 border-t border-[#e8e6f0] pt-4">
                  <div className="w-8 h-8 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#7c3aed] font-bold text-xs">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a0a0f] text-sm">{t.author}</p>
                    <p className="text-[#6b6880] text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-20 px-6 bg-[#7c3aed]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-white/60 text-xs tracking-widest uppercase">Prêt à démarrer ?</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] text-white">
              Vous Cherchez une<br />
              Solution Digitale<br />
              <span className="text-white/40">Extraordinaire ?</span>
            </h2>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#ede9fe] transition-colors shrink-0">
            Démarrer Votre Projet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
