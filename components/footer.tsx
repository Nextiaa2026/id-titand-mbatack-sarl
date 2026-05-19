import Link from "next/link";
import { Terminal } from "lucide-react";

const nav = [
  { href: "/",         label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about",    label: "À Propos" },
  { href: "/team",     label: "Équipe" },
  { href: "/contact",  label: "Contact" },
];

const services = [
  "Développement Logiciel",
  "Infrastructure IT",
  "Cybersécurité",
  "Réseaux & Connectivité",
  "Gestion de Données",
  "Support & Maintenance",
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#7c3aed] rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-[family-name:var(--font-inter)] font-bold text-base text-white">
                ID TITAND<span className="text-[#7c3aed]">.</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Solutions informatiques innovantes pour propulser la transformation numérique des entreprises camerounaises depuis 2021.
            </p>
          </div>
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-white/50 text-sm hover:text-[#7c3aed] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5">Nos Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-white/50 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} ID TITAND MBATACK SARL. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition-colors">Confidentialité</a>
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
