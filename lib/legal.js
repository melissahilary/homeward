// Compliance artifacts are public product surfaces, not footer debris.
// The Consumer Health Data Privacy Policy is a standalone document with a
// standalone homepage link, as Washington's My Health My Data Act requires.
// These are working policies written to the product's actual practices;
// final language should still be reviewed by counsel before launch.

export const HEALTH_DATA = {
  title: "Consumer Health Data Privacy Policy",
  updated: "July 2026",
  intro:
    "This policy is only about consumer health data, and it is separate from our general Privacy Policy on purpose. Washington's My Health My Data Act requires that. It covers what health-related data we collect, why, where it comes from, who we share it with, and how you take it back.",
  sections: [
    {
      h: "What we collect",
      body: "The medication, strength, and formulation you track. Your last fill date and days supply. Your pharmacy and prescriber name as you type them. Your ZIP. Your email. That is the whole list. We do not collect any clinical record or condition of yours, or a login to any portal of yours.",
    },
    {
      h: "Where it comes from",
      body: "You. Every field is entered by you at signup or in your account. We do not buy health data, and we do not pull it from a pharmacy, an insurer, or a prescriber.",
    },
    {
      h: "Why we use it",
      body: "To run your cycle: to count down from your last fill, to remind you on day 22, and to draft the messages you choose to send. That is the only purpose. We do not use it to advertise, profile, or predict.",
    },
    {
      h: "Who we share it with",
      body: "No one, for money — ever. We use a small number of processors to run the service: a payment processor (Stripe) that never receives your health data, an email provider to send your reminders, and cloud hosting. Each is bound to use your data only to run Daykeep. We list our specific processors and affiliates on request and keep the list current.",
    },
    {
      h: "The reliability map — only if you opt in",
      body: "If, and only if, you give a separate opt-in consent, we add your de-identified fill outcomes — which pharmacy, which manufacturer, filled or refused or out of stock — to the shared reliability map that helps other patients. This consent is its own checkbox, never bundled with anything else, and you can withdraw it any time. Identified health data is never part of the map, and the map is never sold.",
    },
    {
      h: "What we never do",
      body: "We do not sell consumer health data. We do not share it with data brokers. We do not send it to a pharmacy, prescriber, insurer, or advertiser. We hold no credential to your medical portal, so we could not transmit on your behalf even if asked.",
    },
    {
      h: "Your rights",
      body: "You can see the health data we hold, correct it, delete it, and withdraw your consent at any time. Deletion and withdrawal are self-service on our deletion page, not an email you have to chase. When you withdraw consent, we stop processing and delete, except where the law requires us to keep a limited record.",
    },
  ],
  contact: "Reach us any time through the contact form. We answer within one business day.",
};

export const PRIVACY = {
  title: "Privacy Policy",
  updated: "July 2026",
  intro:
    "This is our general privacy policy. Health data has its own, separate policy, because the law requires it. This one covers everything else.",
  sections: [
    { h: "Account data", body: "Your email and billing details, used to run your subscription and reach you about it. Billing is handled by Stripe; we do not store card numbers." },
    { h: "How we use it", body: "To provide the service, take payment, send the reminders you signed up for, and answer your support messages. Nothing else." },
    { h: "Cookies and tracking", body: "We keep this minimal. No third-party ad trackers. No selling of data. Our reminder emails carry no tracking pixels." },
    { h: "Retention", body: "We keep your data while your account is active and delete it when you ask, except where the law requires a limited record." },
    { h: "Your choices", body: "You can export your data, delete your account, and unsubscribe from email at any time from your account." },
  ],
};

export const TERMS = {
  title: "Terms of Service",
  updated: "July 2026",
  // Non-clinical declaration comes first, not buried.
  sections: [
    {
      h: "What Daykeep is, and is not",
      body: "Daykeep is a consumer software subscription for medication scheduling and paperwork. It is not a clinical service and gives no medical advice. We make no clinical judgment. We do not supply or dispense medication. We do not send anything to a prescriber or pharmacy for you. Every message you send, you send yourself. Nothing here is a substitute for your prescriber or pharmacist.",
    },
    { h: "Who may use it", body: "Adults who already have a valid script and manage their own refills. Daykeep is not a way to obtain medication, a clinical assessment, or a prescriber." },
    { h: "Your account", body: "Keep your login private. The information you enter is yours; you are responsible for its accuracy. We run your cycle from what you give us." },
    { h: "Payment", body: "A flat yearly charge, cash only, through Stripe. No insurance, no claims. Cancel anytime for a full refund within 30 days." },
    { h: "No warranty on outcomes", body: "We help with timing and paperwork. We do not control pharmacies, prescribers, insurers, or stock, and we cannot guarantee a fill. Availability of controlled medication is set by others." },
    { h: "Changes", body: "If these terms change, we will tell you by email before they take effect." },
  ],
};

export const DELETE = {
  title: "Delete your data · withdraw consent",
  intro:
    "This is a working page, not an email address. You can delete your data or withdraw your consent to health-data processing here, at any time. Both take effect right away.",
  options: [
    { label: "Delete my account and all my data", note: "Removes everything we hold. This cannot be undone." },
    { label: "Withdraw consent to health-data processing", note: "We stop processing your health data and delete it, and your cycle reminders end." },
    { label: "Export my data first", note: "Download everything we hold before you delete." },
  ],
};

export const SAFETY = {
  title: "If you cannot get your medication",
  intro:
    "This is a hard week, and you are not doing anything wrong. Here is the safe path. It runs through your prescriber and pharmacist, not around them.",
  crisis: {
    label: "If you are in crisis",
    body: "If you are thinking about harming yourself, call or text 988 for the Suicide and Crisis Lifeline. It is free, 24 hours, and confidential.",
    number: "988",
  },
  steps: [
    {
      h: "Talk to your prescriber about a bridge",
      body: "Your prescriber has options you do not: a different formulation, a different strength, a short bridge, or a non-stimulant cover for a gap. Ask them. This is a normal call to make.",
    },
    {
      h: "Ask the pharmacist what they can do",
      body: "A pharmacist can check other manufacturers, start a transfer, or set up a partial fill. They deal with this every day. Bring the message from our library.",
    },
    {
      h: "Never change your own dose",
      body: "Do not stretch a fill by cutting your dose, and do not take more to catch up. If you are out, a bridge from your prescriber is the safe answer, not rationing.",
    },
  ],
  refusals: {
    h: "What we will never point you toward",
    items: [
      "No international pharmacies.",
      "No online sellers that skip a script.",
      "No borrowing someone else's medication.",
      "No stretching or splitting doses to make a fill last.",
    ],
  },
};
