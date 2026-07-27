// Scenario pages: the maximally-specific SEO tier. We do not fight Medfinder
// for "find Adderall in stock near you" (they have domain age and a content
// team). We take the procedure and rights questions nobody owns, which also
// convert better: someone searching "can a pharmacy refuse to transfer my
// prescription" is at a counter mid-confrontation and will act in two minutes.
//
// Answer-first, always. The short answer sits directly under the H1. No one
// scrolls to find out. H1s match the real search query (SEO tier), so they
// use the searcher's own words.

export const SCENARIOS = [
  {
    slug: "can-a-pharmacy-refuse-to-transfer",
    h1: "Can a pharmacy refuse to transfer my prescription?",
    title: "Can a pharmacy refuse to transfer my prescription? What to do",
    description:
      "Yes, sometimes, but not just because they would rather not. Your one-time transfer right, and the exact words to use at the counter.",
    short:
      "Sometimes, yes, but not just because they would rather not. Since August 28, 2023, you can ask a pharmacy to transfer your unfilled electronic Schedule II script to another pharmacy, one time. A pharmacist can decline for a real reason, they cannot verify it, it was already filled, they are out. “We do not do that” is not a real reason.",
    steps: [
      "Ask the pharmacist, not the technician. This is a pharmacist decision.",
      "Name the right plainly: a one-time transfer of an unfilled electronic Schedule II script, permitted since August 28, 2023.",
      "Give them the destination pharmacy and its phone number, so they can start it there and then.",
      "If they still refuse, ask for the reason. A real reason is specific. If it is not, call the destination pharmacy and ask them to pull the transfer instead.",
    ],
    cite: "DEA final rule, Aug 28 2023",
    cta: { label: "Generate the transfer request", href: "/tools/message" },
  },
  {
    slug: "pharmacy-out-of-stock",
    h1: "My pharmacy is out of stock. What do I do?",
    title: "Pharmacy out of stock: what to do when your fill is not there",
    description:
      "Do not restart with your prescriber. Move the script yourself, or ask for a partial fill. The exact steps.",
    short:
      "Do not restart with your prescriber yet. If the script is unfilled and electronic, you can move it yourself to a pharmacy that has it, one time. If a counter has some of your quantity but not all, ask for a partial fill now and the rest within the window.",
    steps: [
      "Before anything moves, call ahead and confirm the other pharmacy has your exact strength and maker.",
      "Ask your current pharmacy for a one-time transfer to that pharmacy. You hold this right; you do not need your prescriber to redo it.",
      "If the new pharmacy has only part of your quantity, ask for a partial fill and the balance within the allowed window.",
      "Log which pharmacy and which maker worked, so next month starts ahead of the shortage.",
    ],
    cite: "Transfer: DEA 2023 · Partial fill: CARA §702",
    cta: { label: "Generate the messages", href: "/tools/message" },
  },
  {
    slug: "script-sent-to-wrong-pharmacy",
    h1: "My prescription was sent to the wrong pharmacy.",
    title: "Prescription sent to the wrong pharmacy? Move it yourself",
    description:
      "You do not have to go back to your prescriber. Request a one-time transfer to the right pharmacy. Here is the wording.",
    short:
      "You do not have to go back to your prescriber. If it is unfilled and electronic, request a one-time transfer from the wrong pharmacy to the right one. It is your right, and it saves you the whole reissue.",
    steps: [
      "Confirm the script is still unfilled at the wrong pharmacy. The one-time transfer applies before the first fill.",
      "Call the correct pharmacy first and confirm they have your strength in stock.",
      "Ask either pharmacy to start the transfer, pharmacist to pharmacist, at your request.",
      "If the wrong pharmacy already filled it, that transfer window has closed; ask your prescriber to send the next cycle to the right place.",
    ],
    cite: "DEA final rule, Aug 28 2023",
    cta: { label: "Generate the transfer request", href: "/tools/message" },
  },
  {
    slug: "traveling-with-a-controlled-substance",
    h1: "Traveling with a controlled substance.",
    title: "Traveling with a controlled substance: filling in another state",
    description:
      "Keep it in the labeled bottle, plan the fill before you leave, and know that out-of-state fills vary by pharmacy and state.",
    short:
      "Keep it in the original labeled bottle and carry only what you need. A fill in another state is possible but harder: a script from one state can often be filled in another, but pharmacies and state rules vary. Plan the fill before you leave, not after you land.",
    steps: [
      "Travel with the medication in its original pharmacy-labeled container. In carry-on, not checked, for anything you cannot replace.",
      "If you will need a fill away from home, ask your home pharmacy or prescriber to help set it up before the trip.",
      "Out-of-state fills are at the pharmacy’s discretion and depend on state rules. Call ahead to the destination pharmacy and confirm.",
      "If you are cutting it close, ask about a partial fill before you go, so you are not empty in an unfamiliar city.",
    ],
    cite: "Partial fill: CARA §702 · State rules vary",
    cta: { label: "Check your state's rules", href: "/states" },
  },
];

export function getScenario(slug) {
  return SCENARIOS.find((s) => s.slug === slug) || null;
}
