// Lifecycle emails. Plain text, no images, no tracking pixels. A
// spam-foldered day-22 email is a product failure, so these stay light.
// The day-22 send is the most important asset in the company.

import { MESSAGES } from "./site";

const PRESCRIBER = MESSAGES.items.find((m) => m.slug === "prescriber-request").body;

// Sender identity: a human first name, and a reply-to a real person reads.
// Not a no-reply. Word of mouth is earned in the replies. (First name is a
// one-line placeholder — swap it for the real operator's.)
export const SENDER = {
  name: "Mara",
  from: "Mara at Daykeep <mara@daykeep.app>",
  replyTo: "mara@daykeep.app — a real person reads and answers this.",
};

export const EMAILS = [
  {
    slug: "day-22",
    name: "Day 22 — the trigger",
    when: "Fires on day 22 of the cycle, before you run out.",
    from: SENDER.from,
    subject: "Day 22 — time to set up your next fill",
    preheader: "The message is below. Copy it and send it from your portal.",
    body: `Hi [name],

You have about 8 days of [medication] left. Today is the day to ask, so the script is ready before you run out — not on day 31 in a parking lot.

Here is the message. Copy everything between the lines and send it from your prescriber's portal. We do not send it for you, and we never hold your login.

----- copy below this line -----
${PRESCRIBER}
----- end -----

Two minutes now saves the day-31 scramble.

One more thing. If your pharmacy might be short, reply STOCK and we will send the check-first message so the script lands somewhere it can actually be filled.

After you pick up, we will text one question — filled, refused, or out of stock. One tap. That is what builds the map of which counter actually works, for you and for everyone on the same loop.

— Mara

You are getting this because you set up a cycle. Change your reminders: [manage]. Stop these: [unsubscribe].`,
  },
  {
    slug: "day-27",
    name: "Day 27 — did it transmit",
    when: "Fires on day 27, to confirm the script landed.",
    from: SENDER.from,
    subject: "Did your script land?",
    preheader: "One quick check before the weekend.",
    body: `Hi [name],

Quick check: did the script for [medication] transmit, and to which pharmacy?

If yes, you are on track. If you are not sure, call the pharmacy and ask if they have it on file. If it is stuck, reply and we will send the transfer message so you can move it yourself.

— Mara

Change your reminders: [manage]. Stop these: [unsubscribe].`,
  },
  {
    slug: "day-29",
    name: "Day 29 — the escalation",
    when: "Fires on day 29 if stock is the risk.",
    from: SENDER.from,
    subject: "If it is out of stock, here is the move",
    preheader: "The transfer is your right. The message is inside.",
    body: `Hi [name],

You are close to zero on [medication]. If the pharmacy is out, you do not have to start over with your prescriber.

Since August 28, 2023, you can ask one pharmacy to transfer your unfilled electronic script straight to another. Once, on the first fill. Here is the message to hand a pharmacist:

----- copy below this line -----
I have an unfilled electronic Schedule II script on file here. I would like a one-time transfer to [destination pharmacy], where it is in stock. Can a pharmacist start that transfer?
----- end -----

If you are out right now and it is a hard day, the safe path is here: [safety link]. It runs through your prescriber and pharmacist, never around them.

— Mara

Stop these: [unsubscribe].`,
  },
  {
    slug: "cycle-close",
    name: "Cycle close — one question",
    when: "Fires after pickup. One tap.",
    from: SENDER.from,
    subject: "One tap: what did you get?",
    preheader: "Which manufacturer, and did the counter work.",
    body: `Hi [name],

You are through this cycle. One question, one tap:

Which manufacturer did you receive? [Teva] [Mallinckrodt] [SpecGx] [Other]
And how did the counter go? [Filled] [Refused] [Out of stock]

That single tap remembers what worked for you and sharpens the map for the next person on your loop.

— Mara

Stop these: [unsubscribe].`,
  },
  {
    slug: "renewal-30",
    name: "Renewal — 30 days out",
    when: "30 days before renewal, as promised on pricing.",
    from: SENDER.from,
    subject: "Your Daykeep renews in 30 days",
    preheader: "No surprises. Here is the date and the one-click cancel.",
    body: `Hi [name],

A heads-up, not a nudge: your Daykeep renews on [date] for [amount]. We told you we would say so 30 days out, so here it is.

Nothing to do if you are staying. If not, cancel in one click here: [account]. Full refund inside 30 days, no conversation.

— Mara`,
  },
  {
    slug: "nurture",
    name: "Pre-signup nurture (free tools)",
    when: "After someone uses a free tool, no account.",
    from: SENDER.from,
    subject: "The map, and the three rights you already hold",
    preheader: "No pitch. Two things worth knowing.",
    body: `Hi,

You used one of our free tools. No account needed, ever — that stands.

Two things worth knowing while you are here:

1. You hold three rights most people are never told about: dated fills from one visit, a transfer you can start yourself, and a partial fill. Plain-language rundown: [rights link].

2. The refill loop is twelve steps with three failure points. We drew it once, so you can see it is the system and not you: [diagram link].

That is it. No pitch.

— Mara

Stop these: [unsubscribe].`,
  },
  {
    slug: "rule-change",
    name: "State rule-change alert",
    when: "When a verified rule changes in your state.",
    from: SENDER.from,
    subject: "A rule changed in [state]",
    preheader: "What changed, and what it means for your cycle.",
    body: `Hi [name],

A Schedule II rule changed in [state], and it touches your cycle.

What changed: [plain summary].
What it means for you: [plain consequence].
Source: [link].

Nothing is different today unless we say so above. We only send this when a rule we have verified actually moves.

— Mara

Stop these: [unsubscribe].`,
  },
  {
    slug: "winback",
    name: "Win-back — 90 days lapsed",
    when: "90 days after a lapse.",
    from: SENDER.from,
    subject: "The loop is still twelve steps",
    preheader: "If it got easier, good. If not, the door is open.",
    body: `Hi [name],

It has been a few months. If your refills got easier on their own, that is genuinely good news and you can ignore this.

If day 31 is still a scramble, the door is open. Your cycle, your rights, and the message library are all where you left them: [account].

— Mara

Stop these: [unsubscribe].`,
  },
  {
    slug: "receipt",
    name: "Receipt — the one people screenshot",
    when: "Sent right after payment.",
    from: SENDER.from,
    subject: "Your Daykeep receipt",
    preheader: "Clean and clear. Keep it for your records.",
    body: `Hi [name],

Thank you. Here is your receipt.

    Daykeep — medication scheduling and paperwork
    Plan:     [yearly / monthly]
    Amount:   [amount]
    Date:     [date]
    Card:     •••• [last4]
    Renews:   [date]

We will email you 30 days before it renews, and again 7 days before. Cancel any time in one click, full refund inside 30 days.

Consumer software subscription for medication scheduling and paperwork. No insurance, no claims — cash only, on purpose.

Reply to this with anything at all. A real person reads it.

— Mara`,
  },
  {
    slug: "cancellation",
    name: "Cancellation — where word of mouth is earned",
    when: "Sent the moment someone cancels.",
    from: SENDER.from,
    subject: "You're cancelled — and refunded if you're owed one",
    preheader: "No guilt, no survey wall. The door stays open.",
    body: `Hi [name],

Done. Your Daykeep is cancelled, effective [date]. If you are inside the 30-day window, your full refund of [amount] is already on its way back to your card — nothing to ask for.

No exit survey, no retention call, no "are you sure." You cancelled; we cancelled. That is the whole transaction.

If the refills got easier, that is the best possible reason to leave, and we are glad. If something about Daykeep let you down, I would genuinely like to know — reply and tell me. A real person reads it.

Your cycle, your rights, and the message library stay free to use whenever you need them.

— Mara`,
  },
];

export function getEmail(slug) {
  return EMAILS.find((e) => e.slug === slug) || null;
}
