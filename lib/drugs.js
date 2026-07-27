// Maximally-specific tier: content pages by molecule and brand, because that
// is what people actually search, the name of the thing in the bottle, not
// "Schedule II coordination." Brand names appear descriptively only
// (nominative fair use), never as ours. See TRADEMARK_NOTICE.

export const TRADEMARK_NOTICE =
  "All product names are the property of their respective owners. Daykeep is not affiliated with, endorsed by, or partnered with any pharmaceutical manufacturer. Brand names are used only to describe the medication you already have.";

function base(molecule, brands, extra = {}) {
  return {
    slug: molecule.toLowerCase().replace(/[^a-z]+/g, "-"),
    molecule,
    brands,
    schedule: "Schedule II",
    ...extra,
  };
}

export const DRUGS = [
  base("Amphetamine", ["Adderall", "Adderall XR", "Mydayis"], {
    also: "A prescription stimulant used across ADHD and narcolepsy. Adderall is a mix of amphetamine salts; the loop is the same for all of them.",
    summary:
      "Amphetamine has no refills. Whichever brand or generic you take, the fill runs out on a schedule and the whole process starts again.",
  }),
  base("Lisdexamfetamine", ["Vyvanse"], {
    also: "A prescription stimulant used for ADHD and binge eating.",
    summary:
      "Lisdexamfetamine has no refills, and stock swings by manufacturer. The loop is the same twelve steps every cycle.",
  }),
  base("Methylphenidate", ["Ritalin", "Concerta", "Metadate", "Daytrana"], {
    also: "A prescription stimulant used for ADHD and narcolepsy.",
    summary:
      "Methylphenidate comes in many forms, and availability is form- and strength-specific. No form of it can be refilled.",
  }),
  base("Dextroamphetamine", ["Dexedrine", "Zenzedi", "ProCentra"], {
    also: "A prescription stimulant used for ADHD and narcolepsy.",
    summary:
      "Dextroamphetamine has no refills. The strength you need may be short even when the drug is not.",
  }),
  base("Dexmethylphenidate", ["Focalin", "Focalin XR"], {
    also: "A prescription stimulant used for ADHD.",
    summary:
      "Dexmethylphenidate runs the same monthly cycle: request, transmit, verify stock, and start again next month.",
  }),
];

export function getDrug(slug) {
  return DRUGS.find((d) => d.slug === slug) || null;
}

// The out-of-stock playbook is the same across molecules, the three rights.
export const OUT_OF_STOCK = [
  "Check stock before the script is routed, so it lands somewhere it can be filled.",
  "If it is stranded, use your transfer right, move it yourself, no trip back to your prescriber.",
  "If a counter has some but not all, ask for a partial fill and the rest within the window.",
];
