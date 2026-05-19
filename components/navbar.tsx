"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const links = [
  { href: "/",         label: "Accueil",  num: "01" },
  { href: "/about",    label: "À Propos", num: "02" },
  { href: "/services", label: "Services", num: "03" },
  { href: "/team",     label: "Équipe",   num: "04" },
  { href: "/contact",  label: "Contact",  num: "05" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setOpen(false); setClosing(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  function close() { setClosing(true); setTimeout(() => { setOpen(false); setClosing(false); }, 400); }
  const visible = open || closing;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        open ? "bg-transparent" : scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[#e8e6f0] shadow-sm" : "bg-white"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#7c3aed] rounded-lg flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-[family-name:var(--font-inter)] font-bold text-base text-[#0a0a0f] tracking-tight">
              ID TITAND<span className="text-[#7c3aed]">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname === l.href ? "bg-[#ede9fe] text-[#7c3aed]" : "text-[#6b6880] hover:text-[#0a0a0f] hover:bg-[#f3f2f8]"
                }`}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact"
              className="hidden md:inline-flex items-center text-sm font-semibold px-5 py-2.5 bg-[#7c3aed] text-white rounded-full hover:bg-[#6d28d9] transition-colors">
              Consultation Gratuite
            </Link>
            <button onClick={() => open ? close() : setOpen(true)}
              className={`flex flex-col gap-[5px] p-2 ${open ? "is-open text-white" : "text-[#0a0a0f]"}`}
              aria-label="Menu">
              <span className="ham ham-t w-[22px]" />
              <span className="ham ham-m w-[15px]" />
              <span className="ham ham-b w-[22px]" />
            </button>
          </div>
        </div>
      </nav>

      {visible && (
        <div className={`fixed inset-0 z-40 bg-[#0a0a0f] flex flex-col ${closing ? "overlay-out" : "overlay-in"}`}>
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between w-full">
            <span className="font-[family-name:var(--font-inter)] font-bold text-base text-white">
              ID TITAND<span className="text-[#7c3aed]">.</span>
            </span>
            <button onClick={close} className="is-open flex flex-col gap-[5px] p-2 text-white" aria-label="Fermer">
              <span className="ham ham-t w-[22px]" />
              <span className="ham ham-m w-[15px]" />
              <span className="ham ham-b w-[22px]" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 space-y-1">
            {links.map((l, i) => (
              <Link key={l.href} href={l.href} onClick={close}
                className="nav-link group flex items-baseline gap-5 border-b border-white/10 py-5"
                style={{ animationDelay: `${0.07 + i * 0.07}s` }}>
                <span className="text-[#7c3aed] font-mono text-xs">{l.num}</span>
                <span className={`font-[family-name:var(--font-inter)] font-bold text-[clamp(2.5rem,7vw,5rem)] tracking-tight transition-colors ${
                  pathname === l.href ? "text-[#7c3aed]" : "text-white/50 group-hover:text-white"
                }`}>{l.label}</span>
              </Link>
            ))}
          </div>
          <div className="px-8 md:px-16 py-8 flex items-center justify-between border-t border-white/10">
            <p className="text-white/30 text-xs tracking-widest uppercase">Cameroun — IT & Informatique — 2021</p>
            <Link href="/contact" onClick={close}
              className="text-sm font-semibold px-5 py-2.5 bg-[#7c3aed] text-white rounded-full hover:bg-[#6d28d9] transition-colors">
              Consultation Gratuite
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
