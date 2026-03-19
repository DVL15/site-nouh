import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nouhayla Hourrague – Neuropsychologue à [Ville]",
    template: "%s | Nouhayla Hourrague – Neuropsychologue",
  },
  description:
    "Nouhayla Hourrague, neuropsychologue en cabinet libéral. Bilans neuropsychologiques, troubles DYS, TDAH, TSA, accompagnement adulte. Prise en charge bienveillante et personnalisée.",
  keywords: [
    "neuropsychologue",
    "bilan neuropsychologique",
    "TDAH",
    "TSA",
    "troubles dys",
    "dyslexie",
    "neuropsychologue libéral",
    "Nouhayla Hourrague",
  ],
  authors: [{ name: "Nouhayla Hourrague" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Nouhayla Hourrague – Neuropsychologue",
    title: "Nouhayla Hourrague – Neuropsychologue",
    description:
      "Cabinet de neuropsychologie – bilans, accompagnements, enfants et adultes. Une approche douce et professionnelle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
