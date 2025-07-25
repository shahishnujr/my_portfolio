// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

// --- Option 1: Use next/font/google (recommended, but NOT with Turbopack) ---
// import { Geist } from "next/font/google";
// const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahishnu J R Portfolio",
  description: "Portfolio website for Shahishnu J R",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Option 2: Use Google Fonts via <link> (works with Turbopack) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
