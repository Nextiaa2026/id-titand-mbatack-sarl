import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Monitor, Shield, Wifi, Database, HeadphonesIcon, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Solutions IT & Développement",
  description: "Développement logiciel, infrastructure IT, cybersécurité, réseaux et support — les services complets d'ID TITAND MBATACK SARL.",
  alternates: { canonical: "https://idtitandmbatack.cm/services" },
};

const services = [
  {
    icon: Code2, title: "Développement Logiciel",
    desc: "Applications web, mobiles et logiciels métier sur mesure adaptés à vos processus et objectifs business.",
    features: ["Applications web React/Next.js", "Applications mobiles iOS & Android", "APIs & microservices", "Logiciels métier sur mesure", "Intégrations & automatisations"],
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format",
    color: "bg-[#ede9fe]", iconColor: "text-[#7c3aed]",
  },
  {
    icon: Monitor, title: "Infrastructure IT",
    desc: "Installation, configuration et maintenance de serveurs, postes de travail et équipements réseau pour votre entreprise.",
    features: ["Installation de serveurs", "Configuration postes de travail", "Virtualisation & cloud", "Maintenance préventive", "Monitoring 24/7"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format",
    color: "bg-[#e0f2fe]", iconColor: "text-[#06b6d4]",
  },
  {
    icon: Shield, title: "Cybersécurité",
    desc: "Audit de sécurité, protection des données et mise en conformité de vos systèmes contre les menaces numériques.",
    features: ["Audit de sécurité complet", "Protection contre les malwares", "Gestion des accès & identités", "Conformité RGPD", "Formation des équipes"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format",
    color: "bg-[#fef3c7]", iconColor: "text-[#d97706]",
  },
  {
    icon: Wifi, title: "Réseaux & Connectivité",
    desc: "Déploiement de réseaux LAN/WAN, Wi-Fi d'entreprise et solutions de connectivité haute performance.",
    features: ["Réseaux LAN/WAN", "Wi-Fi d'entreprise", "VPN & accès distant", "Fibre optique", "Gestion de bande passante"],
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format",
    color: "bg-[#f0fdf4]", iconColor: "text-[#16a34a]",
  },
  {
    icon: Database, title: "Gestion de Données",
    desc: "Bases de données, sauvegarde, récupération et gestion de vos données critiques en local et dans le cloud.",
    features: ["Conception de bases de données", "Sauvegarde automatisée", "Migration vers le cloud", "Business Intelligence", "Récupération après sinistre"],
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&auto=format",
    color: "bg-[#fdf4ff]", iconColor: "text-[#a21caf]",
  },
  {
    icon: HeadphonesIcon, title: "Support & Maintenance",
    desc: "Assistance technique, support utilisateur et maintenance préventive de vos systèmes informatiques.",
    features: ["Helpdesk & ticketing", "Support à distance", "Maintenance préventive", "SLA garantis", "Formation utilisateurs"],
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format",
    color: "bg-[#fff1f2]", iconColor: "text-[#e11d48]",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto w-full border-b border-[#e8e6f0]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase mb-4">Nos Solutions</p>
            <h1 className="display text-[clamp(2.5rem,6vw,5rem)] text-[#0a0a0f]">
              Technologies<br />
              <span className="grad-text">Sur Mesure</span>
            </h1>
          </div>
          <p className="text-[#6b6880] leading-relaxed pb-2">
            Des solutions informatiques complètes pour digitaliser, sécuriser et optimiser votre entreprise au Cameroun.
          </p>
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, desc, features, img, color, iconColor }) => (
            <div key={title} className="group border border-[#e8e6f0] rounded-2xl overflow-hidden card-hover">
              <div className="relative h-48 bg-[#f3f2f8] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-[#0a0a0f] text-xl group-hover:text-[#7c3aed] transition-colors">{title}</h3>
                  <p className="text-[#6b6880] text-sm mt-2 leading-relaxed">{desc}</p>
                </div>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#6b6880] text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-[#7c3aed] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-1 text-[#7c3aed] font-semibold text-sm hover:underline">
                  Demander ce service <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-20 px-6 bg-[#7c3aed]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white">
              Démarrons Votre<br /><span className="text-white/40">Projet IT</span>
            </h2>
            <p className="text-white/60 text-sm max-w-sm">Audit gratuit et devis personnalisé sous 48h.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#ede9fe] transition-colors shrink-0">
            Demander un Audit Gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
