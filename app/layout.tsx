import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanstack Table Drizzle ORM",
  description: "A powerful data table built with TanStack Table and Drizzle ORM",
  openGraph: {
    title: "Tanstack Table Drizzle ORM",
    description: "A powerful data table built with TanStack Table and Drizzle ORM",
    url: "https://tanstack-table-drizzle-orm-example.vercel.app/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tanstack Table Drizzle ORM",
      },
    ],
    type: "website",
    siteName: "Tanstack Table Drizzle ORM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanstack Table Drizzle ORM",
    description: "A powerful data table built with TanStack Table and Drizzle ORM",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
