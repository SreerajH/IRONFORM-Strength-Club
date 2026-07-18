import type { Metadata } from "next";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import { gym } from "@/lib/gym";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(gym.url),
  title: "IRONFORM Strength Club — Marathahalli, Bengaluru",
  description:
    "Strength training, functional fitness and real coaching in Marathahalli, Bengaluru. Open 5 AM to 11 PM, 7 days. First session free. 4.9 rating across 245+ reviews.",
  keywords: [
    "IRONFORM Strength Club",
    "gym Marathahalli",
    "strength training Bengaluru",
    "functional fitness Bengaluru",
    "personal training Marathahalli",
    "fat loss coaching Bengaluru",
  ],
  openGraph: {
    title: "IRONFORM Strength Club — Earn Your Strong.",
    description:
      "Strength training, functional fitness and real coaching in a floor built for people who show up. First session free.",
    url: gym.url,
    siteName: gym.fullName,
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: gym.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: gym.fullName,
  telephone: gym.phone,
  url: gym.url,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: gym.address.street,
    addressLocality: gym.address.locality,
    addressRegion: gym.address.region,
    postalCode: gym.address.postalCode,
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: gym.hours.opens,
    closes: gym.hours.closes,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: gym.rating.score,
    reviewCount: gym.rating.count,
    bestRating: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
