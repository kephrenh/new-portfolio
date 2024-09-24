import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import favicon from "./favicon.ico";
import thumbnail from "@/public/assets/images/portfolio-thumbnail.png";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amoussamohamed.fr"),
  keywords: [
    "Mohamed Amoussa",
    "Développeur Web",
    "Intégateur Web",
    "Front-End",
    "Web Development",
  ],
  authors: [{ name: "Mohamed Amoussa", url: "https://amoussamohamed.fr" }],
  creator: "Mohamed Amoussa",
  publisher: "Mohamed Amoussa",
  referrer: "origin-when-cross-origin",
  robots: { index: true, follow: true },
  title: {
    default: "Mohamed Amoussa | Développeur Intégrateur Web",
    template: "%s | Mohamed Amoussa | Développeur Intégrateur Web",
  },
  description: "Mon portfolio montrant mes compétences et mes projets",
  icons: {
    icon: favicon.src,
  },

  openGraph: {
    type: "website",
    url: "https://amoussamohamed.fr",
    title: "Mohamed Amoussa | Développeur Front-End",
    description: "Portfolio de Mohamed Amoussa, Développeur Front-End",
    images: [
      {
        url: thumbnail.src,
        width: 800,
        height: 600,
        alt: "Front-End Developer",
      },
    ],
    siteName: "Mohamed Amoussa",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script id="schema-org-markup-website" type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "ProfessionalService",
              "name": "Mohamed Amoussa",
              "url": "https://aamoussamohamed.fr",
              "image": "${thumbnail.src}",
              "description": "Développeur Intégrateur Web, Créateur de sites Web responsive et adaptatifs.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "23 rue de la Bruyère",
                "addressLocality": "Poissy",
                "addressRegion": "Ile-de-France",
                "postalCode": "78300",
                "addressCountry": "FR"
              },
                "telephone": "+33 6 50 25 02 60"
              }
            `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-base antialiased`}>
        <div className="min-h-screen w-full mx-auto flex flex-col max-w-7xl justify-center items-center">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
