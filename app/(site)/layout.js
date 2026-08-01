import { Bebas_Neue, Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { getSiteSettings } from "@/sanity/lib/queries";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const script = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600", "700"],
  variable: "--font-script",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export async function generateMetadata() {
  const site = await getSiteSettings();
  const role = site?.role?.join(" & ") || "Graphics & UI/UX Designer";
  return {
    title: `${site?.shortName || "Portfolio"} — ${role}`,
    description: site?.availability || "Portfolio site",
  };
}

export default function SiteLayout({ children }) {
  return (
    <div
      className={`${display.variable} ${script.variable} ${body.variable} ${mono.variable} bg-ink text-bone font-body antialiased`}
    >
      <CustomCursor />
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
}
