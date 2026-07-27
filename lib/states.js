// 50-state (+ DC) data model. Every field starts UNVERIFIED. Per-state
// controlled-substance law must be entered from primary sources and reviewed
// by counsel before `verified` is flipped to true. We never fabricate law.
//
// To add verified data: fill the fields, set `verified: true`, set
// `lastReviewed`, and cite `sources`. The site surfaces an explicit
// "not yet verified" notice for any state still at verified:false.

export const FEDERAL_NOTE =
  "Federal telemedicine prescribing flexibilities for controlled substances are set to expire December 31, 2026. State rules may be stricter than federal rules, and are changing. Always confirm with your prescriber and pharmacist.";

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

// The shape every state carries. `null` means "not yet entered".
function blankState(name, abbr) {
  return {
    slug: slugify(name),
    name,
    abbr,
    verified: false,
    lastReviewed: null,
    // Each field is a short plain-language answer, or null until verified.
    transfer: null, // Patient-initiated Schedule II transfer — permitted? limits?
    expiration: null, // How long a Schedule II script stays valid to fill.
    telemedicine: null, // In-person exam requirement for Schedule II telemed.
    partialFill: null, // State rules on partial fills beyond the federal floor.
    notes: null, // Anything else a patient needs before acting.
    sources: [], // Primary-source URLs backing every field above.
  };
}

// Verified data, entered per state, overrides the blanks.
// Seed: New Jersey has a concrete, dated rule change worth carrying now.
const OVERRIDES = {
  "new-jersey": {
    telemedicine:
      "Effective February 16, 2026, New Jersey requires an initial in-person exam before a prescriber may issue Schedule II stimulants by telemedicine, plus an in-person visit at least every three months.",
    notes:
      "This entry reflects public reporting of the 2026 rule change. Confirm the current requirement with your prescriber before your cycle — the field is not yet counsel-reviewed.",
    sources: [
      "https://www.njconsumeraffairs.gov/",
    ],
    // Still verified:false until counsel reviews. Data present, flag honest.
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

// Fields rendered on a state page, in order.
export const STATE_FIELDS = [
  { key: "transfer", label: "Patient-initiated transfer" },
  { key: "expiration", label: "How long a script stays fillable" },
  { key: "telemedicine", label: "Telemedicine and in-person exams" },
  { key: "partialFill", label: "Partial fills" },
  { key: "notes", label: "Other notes" },
];
