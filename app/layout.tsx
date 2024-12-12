import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ErrorBoundary from "./ErrorBoundary";
import NavLinks from "./nav-links";

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
  title: "Resizer",
  description: "NextJS based image resizer",
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
        <ErrorBoundary>
          <NavLinks />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
