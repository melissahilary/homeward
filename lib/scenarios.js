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
  {
    slug: "prescriber-on-vacation",
    h1: "My prescriber is away and I need my refill.",
    title: "Prescriber on vacation? How to get your Schedule II refill",
    description:
      "Ask who covers for them, and whether they left dated scripts. Plan the request before they leave.",
    short:
      "A Schedule II script has no refills, so you need a fresh one each cycle. If your prescriber is away, someone usually covers for them. Ask the office who the covering prescriber is, and whether your prescriber left dated 90-day scripts you can still fill.",
    steps: [
      "Call the office. Ask for the covering or on-call prescriber, and explain it is a routine cycle, not an early request.",
      "Ask whether your prescriber already wrote dated scripts covering up to 90 days. If so, the pharmacy can fill the one whose date has arrived.",
      "If nobody covers, ask when your prescriber returns and whether a bridge is possible when they are back.",
      "Next cycle, send the request on day 22 so a vacation never lands on your empty week.",
    ],
    cite: "Dated scripts: 21 CFR 1306.12(b)",
    cta: { label: "Set a day-22 reminder", href: "/tools/countdown" },
  },
  {
    slug: "too-soon-to-fill",
    h1: "The pharmacy says it is too soon to fill.",
    title: "“Too soon to fill”: what it means and what to do",
    description:
      "This is usually an insurance rule, not a legal block. Your options, plainly.",
    short:
      "“Too soon to fill” is almost always an insurance edit, not a legal one. Your insurer will not pay until enough days have passed since your last fill. The medication is not blocked; the coverage is.",
    steps: [
      "Ask the pharmacist whether the block is insurance or law. Nearly always it is insurance.",
      "If you can, wait until the fill date. If you cannot, ask what the cash price is for this one fill.",
      "If the date looks wrong, it may be a mis-entered days supply. Ask the pharmacy to check, or your prescriber to confirm.",
      "If stock is the real worry, ask about a partial fill so you are covered while the date passes.",
    ],
    cite: "Partial fill: CARA §702 · 21 USC 829(f)",
    cta: { label: "Run your refill countdown", href: "/tools/countdown" },
  },
  {
    slug: "insurance-denied-or-prior-auth",
    h1: "My insurance denied it or wants a prior authorization.",
    title: "Insurance denied your ADHD medication? Prior auth, plainly",
    description:
      "A denial is an insurance step, not a legal wall. Prior auth, cash price, and appeal, explained.",
    short:
      "A denial or a prior authorization is an insurance process, not a legal wall. The script is valid; your insurer wants a form or a reason first. You have three real paths: the prior auth, the cash price, or an appeal.",
    steps: [
      "Ask the pharmacy exactly what the insurer wants: a prior authorization, a step-therapy note, or a quantity override.",
      "Loop in your prescriber's office; the prior auth is theirs to submit, and they do these often.",
      "While it clears, ask what the cash price is. For some strengths it is lower than people expect.",
      "If it is denied, your prescriber can appeal or note why this exact medication is needed.",
    ],
    cite: "Insurance process, not a controlled-substance rule",
    cta: { label: "Generate the prescriber message", href: "/tools/message" },
  },
];

export function getScenario(slug) {
  return SCENARIOS.find((s) => s.slug === slug) || null;
}
