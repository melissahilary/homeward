import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/site";
import { SignupProvider } from "@/components/SignupDrawer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://daykeep.app"),
  title: {
    default: `${BRAND.name}, Schedule II has no refills`,
    template: `%s, ${BRAND.name}`,
  },
  description:
    "The coordination layer for the monthly Schedule II loop. The timing, the paperwork, the transfer. For adults who already have a script.",
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#121210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink">
        <SignupProvider>{children}</SignupProvider>
      </body>
    </html>
  );
}
