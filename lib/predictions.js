// Demo data for the prediction engine. In production this is generated only
// by real patients reporting real outcomes at real counters, it exists
// nowhere to be bought or scraped. Every recommendation shows its sample size.
// The output is a probability, never a phone book.

export const DEMO_METRO = "San Francisco Bay Area";
export const DEMO_DRUG = "amphetamine XR 20mg";

export const PREDICTIONS = [
  {
    name: "Elm Street Pharmacy",
    area: "Mission",
    completion: 89,
    attempts: 47,
    windowDays: 90,
    reason: "Fills this strength reliably. Transfers completed without pushback in 9 of 10 recorded attempts.",
  },
  {
    name: "Bayview Community Rx",
    area: "Bayview",
    completion: 76,
    attempts: 31,
    windowDays: 90,
    reason: "Usually in stock. One recorded wrongful refusal of a lawful transfer in the last 90 days.",
  },
  {
    name: "Parkside Drug",
    area: "Sunset",
    completion: 61,
    attempts: 22,
    windowDays: 90,
    reason: "Stock is inconsistent by manufacturer. Best odds midweek, per recorded attempts.",
  },
  {
    name: "Harbor Chain #204",
    area: "SoMa",
    completion: 38,
    attempts: 54,
    windowDays: 90,
    reason: "High volume, frequent out-of-stock on this strength. Transfers often stall at the counter.",
  },
];

export const MANUFACTURERS = ["Teva", "Mallinckrodt", "SpecGx", "Not sure"];

export const OUTCOMES = [
  { key: "filled", label: "Filled", tone: "stock" },
  { key: "out", label: "Out of stock", tone: "pending" },
  { key: "refused", label: "Wrongly refused", tone: "expired" },
];

// The five datasets no one else holds.
export const DATASETS = [
  "Per-pharmacy transfer completion rate.",
  "Per-pharmacy fill reliability by drug, strength, and manufacturer.",
  "Per-pharmacy staff accuracy, who wrongly refuses a lawful request.",
  "Per-state written rule versus operating reality.",
  "Sequential-script grant rate by prescriber type, anonymized.",
];
