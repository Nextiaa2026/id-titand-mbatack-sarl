import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Audit Gratuit & Consultation IT",
  description: "Contactez ID TITAND MBATACK SARL pour vos besoins en solutions informatiques au Cameroun. Audit gratuit sous 48h.",
  alternates: { canonical: "https://idtitandmbatack.cm/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto w-full border-b border-[#e8e6f0]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#7c3aed] text-xs font-semibold tracking-widest uppercase mb-4">Parlons-nous</p>
            <h1 className="display text-[clamp(2.5rem,6vw,5rem)] text-[#0a0a0f]">
              Démarrons Votre<br />
              <span className="grad-text">Projet IT</span>
            </h1>
          </div>
          <p className="text-[#6b6880] leading-relaxed pb-2">
            Vous avez un projet informatique ? Notre équipe d&apos;experts est prête à vous accompagner avec un audit gratuit et un devis personnalisé sous 48h.
          </p>
        </div>
      </section>

      {/* ══ CONTENT ══ */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Adresse",   value: "Cameroun" },
                { icon: Mail,   label: "Email",     value: "contact@idtitandmbatack.cm" },
                { icon: Phone,  label: "Téléphone", value: "+237 000 000 000" },
                { icon: Clock,  label: "Horaires",  value: "Lun – Ven : 8h00 – 18h00" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={label} className={`flex items-start gap-4 pb-4 ${i < 3 ? "border-b border-[#e8e6f0]" : ""}`}>
                  <div className="w-10 h-10 bg-[#ede9fe] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#7c3aed]" />
                  </div>
                  <div>
                    <p className="text-[#6b6880] text-xs uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-[#0a0a0f] font-semibold text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden h-48 bg-[#f3f2f8]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80&auto=format"
                alt="Équipe IT" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="bg-[#7c3aed] rounded-2xl p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-white/60 text-xs tracking-widest uppercase">Audit Gratuit</p>
                <h2 className="font-bold text-2xl text-white leading-tight">
                  Décrivez votre projet, nous vous répondons sous 48h.
                </h2>
              </div>
              <a href="mailto:contact@idtitandmbatack.cm"
                className="flex items-center justify-center bg-white text-[#7c3aed] font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#ede9fe] transition-colors w-full">
                Envoyer un Email
              </a>
              <p className="text-white/40 text-xs text-center">Ou appelez-nous : +237 000 000 000</p>
            </div>

            <div className="border border-[#e8e6f0] rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-[#0a0a0f] text-lg">Nos 6 Domaines d&apos;Expertise</h3>
              <ul className="space-y-2.5">
                {["Développement Logiciel","Infrastructure IT","Cybersécurité","Réseaux & Connectivité","Gestion de Données","Support & Maintenance"].map((s, i) => (
                  <li key={s} className="flex items-center gap-3 text-[#6b6880] text-sm">
                    <span className="text-[#7c3aed] font-mono text-[10px] w-5 shrink-0">0{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#e8e6f0] rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-[#0a0a0f] text-lg">Pourquoi ID TITAND ?</h3>
              <ul className="space-y-2.5">
                {["Réponse sous 48h garantie","Audit gratuit et sans engagement","Équipe d'ingénieurs certifiés","Solutions adaptées au marché africain","Support continu inclus"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#6b6880] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
