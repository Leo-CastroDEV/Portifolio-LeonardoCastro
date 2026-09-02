import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Inter, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter_display = Inter({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--display-family",
});

const inter_body = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--body-family",
});

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

const siteUrl =
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000";

const title = "Leonardo Castro | Portfólio";
const description =
  "Portfólio de Desenvolvedor Full Stack. Confira meus projetos, habilidades e experiências.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "./",
    siteName: title,
    images: "/og.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter_display.variable} ${inter_body.variable} ${fira_code.variable} scroll-smooth shadcn`}
    >
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
