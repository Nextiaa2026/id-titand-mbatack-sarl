import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://idtitandmbatack.cm";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ID TITAND MBATACK SARL | Solutions Informatiques au Cameroun",
    template: "%s | ID TITAND MBATACK SARL",
  },
  description: "ID TITAND MBATACK SARL — solutions informatiques, développement logiciel, cybersécurité et services IT au Cameroun depuis 2021.",
  keywords: ["informatique Cameroun", "développement logiciel Douala", "IT solutions Cameroun", "cybersécurité", "infrastructure IT"],
  authors: [{ name: "ID TITAND MBATACK SARL", url: siteUrl }],
  openGraph: {
    type: "website", locale: "fr_CM", url: siteUrl,
    siteName: "ID TITAND MBATACK SARL",
    title: "ID TITAND MBATACK SARL | Solutions Informatiques",
    description: "Solutions informatiques innovantes au Cameroun depuis 2021.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ID TITAND MBATACK SARL" }],
  },
  twitter: { card: "summary_large_image", title: "ID TITAND MBATACK SARL | IT Solutions", description: "Solutions informatiques au Cameroun.", images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white text-[#0a0a0f] font-[family-name:var(--font-space-grotesk)] antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
