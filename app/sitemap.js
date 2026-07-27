import { STATES } from "@/lib/states";
import { RIGHTS_LONG } from "@/lib/site";
import { EMAILS } from "@/lib/emails";

const BASE = "https://daykeep.app";

const STATIC = [
  "",
  "/how-it-works",
  "/about",
  "/diagram",
  "/signup",
  "/tools",
  "/tools/countdown",
  "/tools/state-rules",
  "/tools/message",
  "/tools/calendar",
  "/report",
  "/pharmacies",
  "/the-map",
  "/caregiver",
  "/email",
  "/messages",
  "/rights",
  "/states",
  "/glossary",
  "/not-for",
  "/today",
  "/account",
  "/help",
  "/contact",
  "/safety",
  "/charter",
  "/health-data",
  "/privacy",
  "/terms",
  "/delete",
  "/accessibility",
  "/security",
  "/changelog",
];

export default function sitemap() {
  const paths = [
    ...STATIC,
    ...RIGHTS_LONG.items.map((r) => `/rights/${r.slug}`),
    ...STATES.map((s) => `/states/${s.slug}`),
    ...EMAILS.map((e) => `/email/${e.slug}`),
  ];
  return paths.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
