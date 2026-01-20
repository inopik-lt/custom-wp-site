import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Custom WP Site - Next.js + PostgreSQL",
  description: "A custom site built with Next.js and PostgreSQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
