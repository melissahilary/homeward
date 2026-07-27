import DocPage from "@/components/DocPage";

export const metadata = {
  title: "Accessibility",
  description:
    "How Daykeep is built to be operated one-handed, on a dying phone, by someone who is depleted.",
};

const SECTIONS = [
  { h: "The standard", body: "We target WCAG 2.1 AA. Text contrast is at least 4.5 to 1. Every control has a visible focus state and a real label." },
  { h: "Operable one-handed", body: "The whole site works by keyboard and by touch. Nothing depends on a hover, a drag, or a precise gesture. Tap targets are large." },
  { h: "No motion", body: "There are no animations, no parallax, and no autoplay. If a page ever adds motion, it will honor your reduce-motion setting and default to still." },
  { h: "Readable", body: "Body text starts at 18 pixels. Lines are kept short. Language is plain. You should never have to fight the page to use it." },
  { h: "Tell us where it fails", body: "If any part of this is hard to use, that is a bug to us, not to you. Send it through support and we will fix it." },
];

export default function AccessibilityPage() {
  return <DocPage title="Accessibility" intro="Being usable when you are depleted is the whole promise. This page says how we hold to it." sections={SECTIONS} />;
}
