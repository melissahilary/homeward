// 50-state (+ DC) data model.
//
// Two layers, kept honest and separate:
//   1. FEDERAL_BASELINE, uniform federal facts, true in every state, shown
//      on every state page. High confidence, cited to federal rule.
//   2. Per-state fields, the parts that genuinely vary (expiration window,
//      telemedicine exam rules). These carry a status:
//        verified, reviewed against a primary source / by counsel.
//        sourced , a value from a public legal compilation, not yet counsel-
//                   reviewed. Shown with its source and a confirm-locally note.
//        (neither), in review, not yet entered.
// We never fabricate law. A field with no trustworthy source stays empty.

export const FEDERAL_NOTE =
  "Federal telemedicine prescribing flexibilities for controlled substances are set to expire December 31, 2026. State rules may be stricter than federal rules, and are changing. Always confirm with your prescriber and pharmacist.";

// Applies in every state. Cited to federal rule.
export const FEDERAL_BASELINE = [
  {
    label: "No refills",
    body: "A Schedule II script cannot be refilled. Every fill needs its own script.",
    cite: "21 CFR 1306.12(a)",
  },
  {
    label: "90 days at once",
    body: "One visit can cover up to a 90-day supply as separate dated scripts, each marked with the earliest date a pharmacy may fill it.",
    cite: "21 CFR 1306.12(b)",
  },
  {
    label: "Move it yourself",
    body: "Since August 28, 2023, you can ask one pharmacy to transfer an unfilled electronic Schedule II script to another. One time, on the first fill. A few states add limits; where we have confirmed one, it appears below.",
    cite: "DEA final rule, Aug 28 2023",
  },
  {
    label: "Partial fill",
    body: "You can ask for part of a fill now and the rest within the allowed window.",
    cite: "CARA §702 · 21 USC 829(f)",
  },
];

const NAMES = [
  ["Alabama", "AL"], ["Alaska", "AK"], ["Arizona", "AZ"], ["Arkansas", "AR"],
  ["California", "CA"], ["Colorado", "CO"], ["Connecticut", "CT"], ["Delaware", "DE"],
  ["District of Columbia", "DC"], ["Florida", "FL"], ["Georgia", "GA"], ["Hawaii", "HI"],
  ["Idaho", "ID"], ["Illinois", "IL"], ["Indiana", "IN"], ["Iowa", "IA"],
  ["Kansas", "KS"], ["Kentucky", "KY"], ["Louisiana", "LA"], ["Maine", "ME"],
  ["Maryland", "MD"], ["Massachusetts", "MA"], ["Michigan", "MI"], ["Minnesota", "MN"],
  ["Mississippi", "MS"], ["Missouri", "MO"], ["Montana", "MT"], ["Nebraska", "NE"],
  ["Nevada", "NV"], ["New Hampshire", "NH"], ["New Jersey", "NJ"], ["New Mexico", "NM"],
  ["New York", "NY"], ["North Carolina", "NC"], ["North Dakota", "ND"], ["Ohio", "OH"],
  ["Oklahoma", "OK"], ["Oregon", "OR"], ["Pennsylvania", "PA"], ["Rhode Island", "RI"],
  ["South Carolina", "SC"], ["South Dakota", "SD"], ["Tennessee", "TN"], ["Texas", "TX"],
  ["Utah", "UT"], ["Vermont", "VT"], ["Virginia", "VA"], ["Washington", "WA"],
  ["West Virginia", "WV"], ["Wisconsin", "WI"], ["Wyoming", "WY"],
];

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
}

function blankState(name, abbr) {
  return {
    slug: slugify(name),
    name,
    abbr,
    verified: false,
    sourced: false,
    lastReviewed: null,
    expiration: null, // How long a Schedule II script stays fillable.
    telemedicine: null, // In-person exam requirement for Schedule II telemed.
    notes: null,
    sources: [],
  };
}

// Per-state data. Expiration windows below are from public legal
// compilations (sourced, not counsel-reviewed) and carry their sources.
const CS_SOURCES = [
  "https://legalclarity.org/how-long-are-prescriptions-valid-for/",
  "https://www.helloklarity.com/post/how-long-is-a-prescription-valid-for-a-controlled-substance/",
];

const OVERRIDES = {
  california: {
    sourced: true,
    lastReviewed: "July 2026",
    expiration: "A Schedule II script must be filled within 6 months of the date written.",
    sources: CS_SOURCES,
  },
  massachusetts: {
    sourced: true,
    lastReviewed: "July 2026",
    expiration: "A Schedule II script expires 30 days after the date written.",
    sources: CS_SOURCES,
  },
  "north-carolina": {
    sourced: true,
    lastReviewed: "July 2026",
    expiration: "A Schedule II script stays fillable for up to 6 months from the date written.",
    sources: CS_SOURCES,
  },
  louisiana: {
    sourced: true,
    lastReviewed: "July 2026",
    expiration: "A Schedule II script stays fillable for 90 days from the date written.",
    sources: CS_SOURCES,
  },
  "new-jersey": {
    sourced: true,
    lastReviewed: "July 2026",
    telemedicine:
      "Effective February 16, 2026, New Jersey requires an initial in-person exam before a prescriber may issue Schedule II stimulants by telemedicine, plus an in-person visit at least every three months.",
    notes:
      "Reflects public reporting of the 2026 rule change. Confirm the current requirement with your prescriber before your cycle.",
    sources: ["https://www.njconsumeraffairs.gov/"],
  },
};

export const STATES = NAMES.map(([name, abbr]) => {
  const base = blankState(name, abbr);
  const ov = OVERRIDES[base.slug];
  return ov ? { ...base, ...ov } : base;
});

export function getState(slug) {
  return STATES.find((s) => s.slug === slug) || null;
}

export function statusOf(state) {
  if (state.verified) return "verified";
  if (state.sourced) return "sourced";
  return "review";
}

// State-specific fields (the parts that vary). Federal facts live in
// FEDERAL_BASELINE and are shown separately.
export const STATE_FIELDS = [
  { key: "expiration", label: "How long a script stays fillable" },
  { key: "telemedicine", label: "Telemedicine and in-person exams" },
  { key: "notes", label: "Other notes" },
];
