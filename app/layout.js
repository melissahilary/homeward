import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://homeward.com"),
  title: {
    default: "HOMEWARD — The Wellness House for Dogs",
    template: "%s — HOMEWARD",
  },
  description:
    "The wellness house for dogs. Rituals, instruments and formulas for the hours of their day. Nothing harmful added.",
  openGraph: {
    title: "HOMEWARD — The Wellness House for Dogs",
    description:
      "Rituals, instruments and formulas for the hours of their day. Nothing harmful added.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#F3EFE5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-ivory text-ink antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
