import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre Équipe — Ingénieurs & Experts IT",
  description: "Rencontrez l'équipe tech d'ID TITAND MBATACK SARL — ingénieurs, développeurs et experts IT au Cameroun.",
  alternates: { canonical: "https://idtitandmbatack.cm/team" },
};

const team = [
  { name: "Directeur Général", role: "CEO & CTO", bio: "Ingénieur informaticien, il dirige la vision technologique de la société depuis 2021.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80&auto=format", stack: ["Strategy", "Architecture"] },
  { name: "Lead Developer", role: "Développeur Full Stack", bio: "Expert React/Node.js, il conçoit des applications robustes et scalables pour nos clients.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80&auto=format", stack: ["React", "Node.js", "TypeScript"] },
  { name: "Ingénieur Réseau", role: "Network Engineer", bio: "Spécialiste des infrastructures réseau et des solutions de connectivité d'entreprise.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80&auto=format", stack: ["Cisco", "Linux", "VPN"] },
  { name: "Expert Cybersécurité", role: "Security Analyst", bio: "Garant de la sécurité des systèmes, il protège les données de nos clients.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&auto=format", stack: ["Security", "Audit", "RGPD"] },
  { name: "Administrateur Systèmes", role: "SysAdmin & DevOps", bio: "Gestion et maintenance des serveurs et infrastructures cloud de nos clients.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80&auto=format", stack: ["Cloud", "DevOps", "Docker"] },
  { name: "Technicien Support", role: "IT Support Specialist", bio: "Premier point de contact pour l'assistance technique, il résout les problèmes rapidement.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80&auto=format", stack: ["Support", "Hardware", "Helpdesk"] },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto w-full border-b border-[#e8e6f0]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase mb-4">Notre Équipe</p>
            <h1 className="display text-[clamp(2.5rem,6vw,5rem)] text-[#0a0a0f]">
              Les Esprits<br />
              <span className="grad-text">Derrière ID TITAND</span>
            </h1>
          </div>
          <p className="text-[#6b6880] leading-relaxed pb-2">
            Des ingénieurs et experts passionnés par la technologie et l&apos;innovation numérique, dédiés à transformer les entreprises camerounaises.
          </p>
        </div>
      </section>

      {/* ══ TEAM BANNER ══ */}
      <section className="px-6 py-10 max-w-6xl mx-auto w-full">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-[#f3f2f8]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80&auto=format"
            alt="Équipe ID TITAND" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/80 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-12 flex items-end">
            <p className="font-bold text-white text-xl md:text-2xl max-w-md leading-tight">
              Passionnés par l&apos;excellence et les résultats extraordinaires pour nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* ══ TEAM GRID ══ */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group bg-white border border-[#e8e6f0] rounded-2xl overflow-hidden card-hover">
              <div className="relative h-56 bg-[#f3f2f8] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.img} alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-bold text-[#0a0a0f] text-lg group-hover:text-[#7c3aed] transition-colors">{member.name}</h3>
                  <p className="text-[#7c3aed] text-xs font-semibold mt-0.5">{member.role}</p>
                </div>
                <p className="text-[#6b6880] text-sm leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.stack.map((s) => (
                    <span key={s} className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#7c3aed] bg-[#ede9fe] px-2 py-0.5 rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ JOIN US ══ */}
      <section className="py-20 px-6 bg-[#7c3aed]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <p className="text-white/60 text-xs tracking-widest uppercase">Rejoignez-nous</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] text-white">
              Construisons<br />l&apos;Avenir Numérique<br /><span className="text-white/40">Ensemble</span>
            </h2>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Vous êtes développeur, ingénieur ou expert IT ? Rejoignez une équipe qui transforme le Cameroun.
            </p>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#ede9fe] transition-colors shrink-0">
            Nous Contacter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
