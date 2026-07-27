const BASE = "https://daykeep.app";

const ROUTES = [
  "",
  "/signup",
  "/messages",
  "/rights",
  "/glossary",
  "/today",
  "/account",
  "/support",
  "/safety",
  "/charter",
  "/health-data",
  "/privacy",
  "/terms",
  "/delete",
  "/accessibility",
  "/security",
];

export default function sitemap() {
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
