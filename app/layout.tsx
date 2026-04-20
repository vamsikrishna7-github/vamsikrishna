import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vamsikrishna — Portfolio",
  description:
    "Welcome to Vamsikrishna's portfolio. Built with Next.js + Tailwind CSS, hosted on Vercel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
