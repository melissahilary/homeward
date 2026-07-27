// Single source of truth for copy. Voice: second person, present tense,
// declarative. Grade-8 reading level, sentences under twenty words.
// Permitted vocabulary only: refill, pharmacy, timing, paperwork,
// coordination, stock, transfer, cycle, script, fill.

// --- Brand (working name — swap in ONE place) ---
export const BRAND = {
  name: "Daykeep",
  wordmark: "Daykeep",
};

// --- Pricing ---
export const PRICING = {
  year: "$99",
  perMonth: "$8.25",
  refundDays: 30,
};

// --- Hero ---
export const HERO = {
  headline: "Schedule II has no refills. You restart this twelve times a year.",
  subhead: "For adults who already have a script.",
  cta: "Get started",
};

// --- The free artifact: the message that starts the loop ---
export const TEMPLATE = {
  title: "The message that starts the loop",
  intro:
    "Most people are never told they can ask for this. Copy it. Paste it into your prescriber's portal or hand it over at the visit. You do not need an account to use it.",
  citation: "21 CFR 1306.12(b)",
  body: `Hello Dr. [name],

I'd like to set up my next [medication, strength, formulation] ahead of time, so there is no gap in the cycle.

Under 21 CFR 1306.12(b), one visit can cover up to a 90-day supply as a set of dated fills, each marked with the earliest date a pharmacy may fill it. Could you issue them that way?

    Fill 1  —  fillable now
    Fill 2  —  earliest fill date [date]
    Fill 3  —  earliest fill date [date]

Quantity per fill: [quantity].
Please send all of them to [pharmacy name and address].

Thank you.`,
};

// --- The three rights ---
export const RIGHTS = {
  title: "What your script already allows",
  intro:
    "Three rights sit inside the rules. Almost no one uses them. Each one is written down, with a citation you can read.",
  items: [
    {
      name: "Dated fills, one visit",
      cite: "21 CFR 1306.12(b)",
      body: "One visit can authorize up to a 90-day supply as dated fills. Three trips to the office collapse into one.",
    },
    {
      name: "Move it yourself",
      cite: "DEA rule, Aug 28 2023",
      body: "You can ask one pharmacy to transfer an electronic Schedule II script to another. Once, on the first fill, without going back to your prescriber.",
    },
    {
      name: "Take part now, part later",
      cite: "CARA §702 · 21 USC 829(f)",
      body: "You can ask for part of a fill now and the rest within the window. Useful when a pharmacy is short on stock.",
    },
  ],
};

// --- The twelve steps, days 20–33 ---
export const TIMELINE = {
  title: "The loop, laid out",
  intro:
    "Every cycle runs the same twelve steps across days 20 to 33. Here is where it breaks, and where the tool steps in.",
  phases: [
    {
      key: "anticipate",
      label: "Anticipate",
      days: "Days 20–24",
      steps: [
        { n: 1, text: "Count down from your last fill, not from an empty bottle." },
        { n: 2, text: "Check whether a valid unfilled script already exists.", right: true },
        { n: 3, text: "See if a visit is required this cycle, by your state." },
        { n: 4, text: "Send the request with the exact strength, form, and pharmacy." },
      ],
    },
    {
      key: "acquire",
      label: "Acquire",
      days: "Days 25–30",
      steps: [
        { n: 5, text: "Confirm the script arrived, and at which pharmacy." },
        { n: 6, text: "Check stock for the exact strength and maker.", breaks: true },
        { n: 7, text: "If it is out, find stock within a drivable radius.", breaks: true },
        { n: 8, text: "Move it using your own transfer right.", right: true },
      ],
    },
    {
      key: "close",
      label: "Close",
      days: "Days 28–33",
      steps: [
        { n: 9, text: "Clear the too-soon-to-fill and quantity edits." },
        { n: 10, text: "Decide on a partial fill if stock is short.", right: true },
        { n: 11, text: "Handle pickup: ID, hold window, expiration." },
        { n: 12, text: "Log what you got and what failed. That is next month's start." },
      ],
    },
  ],
};

// --- Who this is not for ---
export const NOT_FOR = {
  title: "Who this is not for",
  items: [
    "Not for finding a prescriber. We hold no directory and take no referral money.",
    "Not for getting diagnosed. We make no clinical judgment of any kind.",
    "Not for getting medication without a script. You bring your own.",
    "Not medical advice. We handle timing and paperwork, nothing more.",
  ],
};

// --- The charter (public page) ---
export const CHARTER = {
  title: "What we never do",
  intro:
    "These are rules, not preferences. They are the reason you can trust the tool with the one job it has.",
  rules: [
    {
      n: 1,
      title: "No clinician ever receives money or instruction from us.",
      body: "No prescriber directory. No 'find a provider'. No affiliate links, no sponsored placement. The prescriber field is free text you type. If a doctor asks to partner, the answer is a polite no.",
    },
    {
      n: 2,
      title: "We handle logistics, never access.",
      body: "There is a banned-phrase list, checked before anything is published. We do not promise speed, a green light, or a way around the rules. We help with timing, pharmacies, stock, and transfers.",
    },
    {
      n: 3,
      title: "Every prescriber contact is started by your tap.",
      body: "The tool drafts and reminds. It never sends. The send button lives in your own portal or email. We hold no login to anything of yours, so sending for you is impossible by design.",
    },
    {
      n: 4,
      title: "Cash only. No third-party payers.",
      body: "A flat yearly charge through Stripe. No claims, no prior auth, no billing your insurance. Your info coordinates your refill and nothing else.",
    },
    {
      n: 5,
      title: "No money from the supply side. Ever.",
      body: "Pharmacies will offer it. The answer is no, in writing, forever. It is a rule and not a decision because the first yes is the one that gets litigated.",
    },
  ],
};

// --- FAQ ---
export const FAQ = {
  title: "Questions",
  items: [
    {
      q: "Do you contact my doctor?",
      a: "No. We write the message. You send it, from your own portal. We never hold a login to anything of yours.",
    },
    {
      q: "Do you sell my data?",
      a: "No. We follow Washington's My Health My Data Act and California's CMIA. Your info coordinates your refill and nothing else.",
    },
    {
      q: "Do you work with pharmacies?",
      a: "No, and we will never take their money. That is a written rule, on our charter page, not a preference.",
    },
    {
      q: "Is this a clinical service?",
      a: "No. We are a logistics and paperwork tool. No diagnosis, no treatment, no medical advice.",
    },
    {
      q: "What if the shortage ends?",
      a: "Schedule II still has no refills. That part never changes. The shortage is the wedge; the no-refill rule is the reason we exist.",
    },
    {
      q: "Can I cancel?",
      a: "One click in settings. Full refund inside 30 days, no conversation.",
    },
  ],
};

// --- Signup ---
export const SIGNUP = {
  title: "Set up your cycle",
  intro: "Four fields. Under ninety seconds. Your last fill date is the only gate — an existing patient can produce it.",
  fields: [
    { name: "email", label: "Email", type: "email", placeholder: "you@email.com", autoComplete: "email" },
    { name: "med", label: "Medication and strength", type: "text", placeholder: "e.g. amphetamine XR 20mg" },
    { name: "lastFill", label: "Last fill date", type: "date" },
    { name: "zip", label: "ZIP", type: "text", placeholder: "94110", inputMode: "numeric" },
  ],
};

// --- Message library (each template ends in a usable artifact) ---
export const MESSAGES = {
  title: "The message library",
  intro:
    "Four messages carry the whole cycle. Copy the one you need. You send it — from your own portal, email, or the pharmacy counter. We never send for you.",
  items: [
    {
      slug: "prescriber-request",
      name: "Prescriber request",
      when: "Day 22, before you run out.",
      cite: "21 CFR 1306.12(b)",
      body: `Hello Dr. [name],

I'd like to set up my next [medication, strength, formulation] ahead of time, so there is no gap in the cycle.

Under 21 CFR 1306.12(b), one visit can cover up to a 90-day supply as a set of dated fills, each marked with the earliest date a pharmacy may fill it. Could you issue them that way?

    Fill 1  —  fillable now
    Fill 2  —  earliest fill date [date]
    Fill 3  —  earliest fill date [date]

Quantity per fill: [quantity].
Please send all of them to [pharmacy name and address].

Thank you.`,
    },
    {
      slug: "transfer-request",
      name: "Transfer request",
      when: "Stock is at a different pharmacy.",
      cite: "DEA rule, Aug 28 2023",
      body: `Hello,

I have an electronic Schedule II script on file at [origin pharmacy] that has not been filled yet. I'd like to request a one-time transfer of that script to [destination pharmacy], where the medication is in stock.

Since August 28, 2023, a patient may request that a DEA-registered pharmacy transfer an unfilled electronic Schedule II script directly to another pharmacy. Could a pharmacist there start that transfer with [origin pharmacy]?

My details:
    Name: [name]
    Date of birth: [dob]
    Medication and strength: [medication]

Thank you.`,
    },
    {
      slug: "partial-fill-request",
      name: "Partial fill request",
      when: "The pharmacy is short on stock.",
      cite: "CARA §702 · 21 USC 829(f)",
      body: `Hello,

You have my Schedule II script but not the full quantity in stock. I'd like to request a partial fill now, and the remainder within the window the rules allow.

Under Section 702 of CARA (21 USC 829(f)), a Schedule II script may be partially filled at the patient's request. Could you fill [quantity available] now, and hold the balance of [remaining quantity] for me to pick up when it arrives?

Name: [name]
Medication and strength: [medication]

Thank you.`,
    },
    {
      slug: "stock-inquiry",
      name: "Pharmacy stock inquiry",
      when: "Before a script is sent anywhere.",
      cite: "No citation — a plain question.",
      body: `Hello,

Before a script is sent your way, I want to check stock so it lands somewhere it can actually be filled. Could you tell me whether you currently have:

    [medication], [strength], [formulation], made by [manufacturer]

If not, do you have another manufacturer of the same strength, or a resupply date you can share? I understand you may not be able to hold it. I only need to know before the script is routed.

Thank you.`,
    },
  ],
};

// --- Rights reference (plain language, always accessible) ---
export const RIGHTS_LONG = {
  title: "What your script already allows",
  intro:
    "Three rules sit in your favor. Each is real, each is written down, and almost no one uses them. Here they are in plain language, with the citation.",
  items: [
    {
      slug: "sequential-scripts",
      name: "Dated fills from one visit",
      cite: "21 CFR 1306.12(b)",
      plain:
        "A practitioner can write more than one script on the same day, together covering up to a 90-day supply. Each one is marked with the earliest date a pharmacy may fill it. So one visit can carry you through the quarter, instead of three visits doing the same work.",
      why: "It collapses three cycles into one and cuts your visits by two-thirds.",
    },
    {
      slug: "patient-transfer",
      name: "Move it yourself",
      cite: "DEA rule, effective Aug 28 2023",
      plain:
        "Since August 28, 2023, you can ask one DEA-registered pharmacy to transfer an electronic Schedule II script straight to another pharmacy. It works once, on the first fill, and the script must stay fully electronic. You do not have to go back to your prescriber to cancel and reissue.",
      why: "When stock is stranded at the wrong pharmacy, this is how you free it — the slow path is going back to the doctor.",
    },
    {
      slug: "partial-fill",
      name: "Take part now, part later",
      cite: "CARA §702 · 21 USC 829(f)",
      plain:
        "You can ask a pharmacy to fill part of a Schedule II script now and give you the rest within the allowed window. This matters when a pharmacy has some of your quantity but not all of it.",
      why: "It gets medication in your hand today instead of sending you to drive across town on empty.",
    },
  ],
};

// --- Glossary ---
export const GLOSSARY = {
  title: "Plain words for the paperwork",
  terms: [
    { term: "EPCS", body: "Electronic Prescribing of Controlled Substances. The secure system a prescriber uses to send a controlled script straight to a pharmacy." },
    { term: "APQ", body: "Aggregate Production Quota. The federal cap on how much of a controlled drug may be made in a year. It is the reason stock is limited no matter the demand." },
    { term: "PDMP", body: "Prescription Drug Monitoring Program. A state database that tracks controlled scripts. Your prescriber and pharmacy check it." },
    { term: "Days supply", body: "How many days one fill is meant to last, based on the dose and quantity. Your cycle counts down from your last fill plus this number." },
    { term: "Too-soon-to-fill", body: "An insurance rule that blocks a fill until enough days have passed since the last one. A common reason a fill gets rejected at the counter." },
  ],
};

// --- Account & billing (demo state) ---
export const ACCOUNT = {
  title: "Your account",
  plan: "Daykeep — one tier",
  price: PRICING.year + " / year",
  renews: "March 3, 2027",
  status: "Active",
};

// --- Support ---
export const SUPPORT = {
  title: "Support",
  intro:
    "Self-service first. A real person within one business day. No chatbot, ever.",
  responseTime: "We reply to every message within one business day.",
  freshness: "State rules on this site were last reviewed July 2026.",
};
