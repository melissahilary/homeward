// The Collection — every product in the house, in shop order.
// Copy is written in the house voice: short declaratives, no exclamation,
// the dog is "they/them". Images map to /public/images filenames.

export const CATEGORIES = [
  { key: "rituals", label: "Rituals" },
  { key: "instruments", label: "Instruments" },
  { key: "formulas", label: "Formulas" },
  { key: "home", label: "Home" },
  { key: "water", label: "Water" },
  { key: "kit", label: "The Recovery Kit" },
];

// Bundles render as tonal charcoal panels (no photograph).
export const RITUALS = [
  {
    slug: "the-morning-ritual",
    name: "The Morning Ritual",
    descriptor: "The day, opened well.",
    price: "$96",
    tonal: true,
    contents: ["Shield", "Hydrate", "The Threshold"],
    body: [
      "Morning is a threshold. They cross it once, and the day takes its shape from how they cross it.",
      "Sun answered before the walk. Water made worth drinking. The paws returned clean to the floor they sleep on.",
      "Three quiet acts, kept in order. Nothing rushed, nothing skipped.",
    ],
  },
  {
    slug: "the-evening-ritual",
    name: "The Evening Ritual",
    descriptor: "The day, set down.",
    price: "$104",
    tonal: true,
    contents: ["The Soak", "Rest", "The Chew"],
    body: [
      "The evening asks less of them and gives more. It is the hour the house was built for.",
      "Salt for the muscles that carried them. A mist for the room. Something long and slow to work at while the light goes.",
      "By the time the lamps are low, the day is already behind them.",
    ],
  },
  {
    slug: "the-night-system",
    name: "The Night System",
    descriptor: "Sleep, engineered quietly.",
    price: "$168",
    tonal: true,
    contents: ["Rest", "Sleep Silk", "Ground", "Calm"],
    body: [
      "Sleep is not the absence of the day. It is a practice, and it can be built.",
      "The bed cooled and drawn in silk. The nervous system brought down to earth. The room told, plainly, that it is time.",
      "A full system for the deepest hours. Set it once. Let the night do the rest.",
    ],
  },
];

export const INSTRUMENTS = [
  {
    slug: "sweep",
    name: "Sweep",
    displayName: "Sweep — the gua sha",
    descriptor: "Lymph, moved by hand.",
    price: "$68",
    image: "/images/dog_guasha.png",
    alt: "Sweep — a smooth stone gua sha resting on folded linen",
    body: [
      "A single piece of cool stone, cut to the lines of a body that walks on four.",
      "Drawn slowly along the coat, it moves what stillness lets settle. The lymph answers. The muscle lets go.",
      "Five minutes in the evening. They will lean into it before you finish.",
    ],
    ritual: "After the walk, warm your hands and the stone. Draw from the spine outward, slow and light, following the coat. Ten passes to a side.",
    inside: "Bian stone. Nothing applied, nothing to wash off. Not for use over injury or swelling — see a veterinarian first.",
    care: "Wipe with a dry cloth. Keep from the cold that would chill the stone past comfort.",
  },
  {
    slug: "cool",
    name: "Cool",
    displayName: "Cool — the cooling wand",
    descriptor: "Heat, drawn out.",
    price: "$72",
    image: "/images/cooling_wand.png",
    alt: "Cool — a slender steel wand on a pale stone surface",
    body: [
      "Steel holds cold the way stone holds quiet. This wand keeps it, and gives it back slowly.",
      "Rolled along the belly, the ears, the pads, it meets the heat of a long day and takes it down.",
      "Kept in the door of the refrigerator, ready before they ask.",
    ],
    ritual: "Chill for an hour. Roll along the inner thighs, the belly, and the ears — where the blood runs close. Never press; let the weight do it.",
    inside: "Solid stainless steel, food-grade. No gels, no coolant, nothing to leak or spoil.",
    care: "Rinse and dry. Store cold. It will outlast the summer, and the next.",
  },
  {
    slug: "the-chew",
    name: "The Chew",
    displayName: "The Chew",
    descriptor: "The long task, well made.",
    price: "$34",
    image: "/images/the_chew_.png",
    alt: "The Chew — a natural chew object on charcoal stone",
    body: [
      "Chewing is how they think. It settles the jaw, and the jaw settles everything above it.",
      "Long, dense, and honest — made to be worked at, not finished in a hurry.",
      "Give it in the evening, when the house wants to be quiet and they want something to do.",
    ],
    ritual: "Offer on their bed, or on the Slab. Let them take it to the floor. This is their task, not yours — leave them to it.",
    inside: "Single ingredient, sourced without additive. No rawhide, no glue, no scent.",
    care: "Retire and replace when it wears down to a size they could swallow.",
  },
  {
    slug: "the-stand",
    name: "The Stand",
    displayName: "The Stand — the nail scratcher",
    descriptor: "Nails, on their terms.",
    price: "$58",
    image: "/images/nail_scratcher.png",
    alt: "The Stand — an angled scratch board on a wooden base",
    body: [
      "The clipper is a struggle. The file is a chore. The Stand is neither.",
      "They press, they scratch, they file their own nails against a board angled to invite it. Cooperative care, made into a game they win.",
      "No holding, no bracing, no dread on either side of the leash.",
    ],
    ritual: "Set a treat at the top edge. Let them reach for it. The forward paw does the work. Reward the try, not the result.",
    inside: "Sustainable board, replaceable grit, hardwood base. No motor, no noise.",
    care: "Peel and renew the grit pad when it smooths. The base lasts for good.",
  },
];

export const FORMULAS = [
  {
    slug: "soak",
    name: "The Soak",
    displayName: "Soak — the bath salts",
    descriptor: "After the trail, the water.",
    price: "$42",
    image: "/images/bath_salts.png",
    alt: "The Soak — smoked glass jar of mineral salts on travertine",
    body: [
      "A long walk is a good thing spent. The Soak is where it is repaid.",
      "Magnesium-rich mineral salt, drawn into warm water. It eases the muscle and quiets the skin without a single essential oil.",
      "The bath becomes the last good thing of the day, not the fight it used to be.",
    ],
    ritual: "A capful into a warm, shallow bath. Let them stand and settle for five minutes. Rinse lightly, or not at all. Dry warm.",
    inside: "Magnesium and mineral salts, colloidal oat. No essential oils. No fragrance. No sulfates.",
    care: "Keep the jar closed and dry. The scoop lives inside.",
  },
  {
    slug: "rest",
    name: "Rest",
    displayName: "Rest — the bedtime spray",
    descriptor: "The room, turned down.",
    price: "$38",
    image: "/images/bedtime_spray.png",
    alt: "Rest — an amber glass mist bottle beside a made bed",
    body: [
      "A room can be told it is time. Rest is how you tell it.",
      "Two passes over the bed, and the space changes register — the same cue, every night, until the body reads it without thinking.",
      "Not a fragrance. A signal, safe to breathe, made for the way a dog reads a room.",
    ],
    ritual: "Mist the bedding twice from a hand's length, an hour before sleep. Let it settle. Dim the lights as you go.",
    inside: "Water, hydrosol, canine-safe humectants. No essential oils. No alcohol bite. Xylitol-free.",
    care: "Store from the sun. Shake before use.",
  },
  {
    slug: "calm",
    name: "Calm",
    displayName: "Calm — the calming mist",
    descriptor: "The nerves, brought down.",
    price: "$40",
    image: "/images/calming_mist_.png",
    alt: "Calm — a frosted mist bottle on a stone ledge",
    body: [
      "Some days arrive loud. The doorbell, the storm, the long drive. Calm meets them.",
      "A mist for the coat and the carrier, made to settle the nervous system before it climbs.",
      "Kept by the door and in the car, for the moment before the moment.",
    ],
    ritual: "Mist the carrier, the bedding, or a cloth ten minutes ahead of the trigger. Never spray toward the face.",
    inside: "Water, calming hydrosols, canine-safe humectants. No essential oils. No sedatives. Xylitol-free.",
    care: "Store cool and dark. For daily unease, speak with your veterinarian.",
  },
  {
    slug: "shield",
    name: "Shield",
    displayName: "Shield — the nose and coat SPF",
    descriptor: "The sun, answered.",
    price: "$44",
    image: "/images/spf__nose_and_coat_spray_.png",
    alt: "Shield — a matte spray bottle on a sunlit terrace",
    body: [
      "A pale nose burns. A thin coat lets the sun through. Shield stands between.",
      "A light spray for the bridge of the nose, the ear tips, the belly — the places the sun finds first. It absorbs clean and does not draw the tongue.",
      "The terrace, the trail, the long window of the afternoon. Covered.",
    ],
    ritual: "Spray a little onto the hand and press onto the nose, ear tips, and any thin-coated skin. Reapply after water or a long exposure.",
    inside: "Non-nano mineral filters, canine-safe base. Zinc-free. No essential oils. Formulated so it is safe if they lick.",
    care: "Shake well. Keep from freezing. Not a substitute for shade at midday.",
  },
  {
    slug: "hydrate",
    name: "Hydrate",
    displayName: "Hydrate — the water minerals",
    descriptor: "Water, made worth drinking.",
    price: "$36",
    image: "/images/hydration_minerals.png",
    alt: "Hydrate — a matte jar of pale mineral powder with a small scoop",
    body: [
      "Dogs drink for taste as much as thirst. Hydrate gives the bowl a reason.",
      "A whisper of electrolyte mineral, stirred into fresh water. It draws them back to the bowl through the heat of the day.",
      "For the summer, the recovery, the dog who forgets to drink.",
    ],
    ritual: "One level scoop into a full bowl of fresh water, stirred. Refresh daily. Offer more on the hot days and the long days.",
    inside: "Balanced electrolyte minerals, faintly savory. No xylitol. No sweetener. No salt overload.",
    care: "Keep dry and closed. The gel and syringe travel; the jar stays home.",
  },
  {
    slug: "restore",
    name: "Restore",
    displayName: "Restore — the food topper",
    descriptor: "The bowl, quietly bettered.",
    price: "$46",
    image: "/images/food_topper_.png",
    alt: "Restore — a small dish of amber food topper beside a bowl",
    body: [
      "The bowl is the one appointment they never miss. Restore meets them there.",
      "A savory topper of gut-kind ingredients, folded over the usual food. It settles digestion and makes the ordinary meal worth finishing.",
      "Not a supplement they tolerate. A course they wait for.",
    ],
    ritual: "A spoonful over the meal, once a day. Warm the food a little first; the smell does the persuading.",
    inside: "Single-source protein, pre- and probiotic, bone broth. No filler. No xylitol. No additive.",
    care: "Refrigerate after opening. Use within the month.",
  },
];

export const HOME = [
  {
    slug: "the-slab",
    name: "The Slab",
    displayName: "The Slab — the cooling stone",
    descriptor: "A cold place to lie.",
    price: "$120",
    image: "/images/cooling_slab.png",
    alt: "The Slab — a honed stone cooling mat on a shoji-lit floor",
    body: [
      "Every house should hold one cold place. This is it.",
      "A honed slab of natural stone that stays cool without power, without gel, without a plug. They find it in the heat and do not leave.",
      "The centre of the room in summer. The quietest object you will own.",
    ],
    ritual: "Set it where the light falls in the afternoon. Let them come to it. In the deep heat, keep it in shade so the cool runs deeper.",
    inside: "A single piece of natural stone, honed and sealed. No electronics. No coolant. No noise.",
    care: "Wipe clean. It will never wear out. It only gets more theirs.",
  },
  {
    slug: "ground",
    name: "Ground",
    displayName: "Ground — the grounding mat",
    descriptor: "Earth, brought indoors.",
    price: "$88",
    image: "/images/grounding_mat_f.png",
    alt: "Ground — a woven grounding mat on a pale floor",
    body: [
      "The nervous system settles against the earth. Ground brings a little of it inside.",
      "A woven mat for the bed or the crate, made to steady a body that never quite comes down.",
      "For the anxious sleeper, the storm nights, the dog who paces.",
    ],
    ritual: "Lay it beneath the bedding or inside the crate. Let it become part of the furniture. Consistency is the whole of it.",
    inside: "Natural conductive weave, washable cover. No batteries. No electronics.",
    care: "Cover machine-washes cold. Air dry flat.",
  },
  {
    slug: "sleep-silk",
    name: "Sleep Silk",
    displayName: "Sleep Silk — the silk bed cover",
    descriptor: "The bed, in silk.",
    price: "$110",
    image: "/images/dog_silk_bed_cover.png",
    alt: "Sleep Silk — a silk bed cover draped over a low dog bed",
    body: [
      "Silk is kind to a coat the way nothing woven coarser can be.",
      "A washable silk cover for the bed they already love. It keeps the coat smooth, the skin calm, the shedding down.",
      "The turndown, made literal.",
    ],
    ritual: "Draw it over the bed at night, part of the evening's close. In the morning, fold it back. The bed becomes a made bed.",
    inside: "Mulberry silk, hidden zip, washable. No synthetic pile. No treatment.",
    care: "Machine-wash cold on delicate. Line dry. It softens with every wash.",
  },
  {
    slug: "renew",
    name: "Renew",
    displayName: "Renew — the copper bed cover",
    descriptor: "The bed, kept clean.",
    price: "$114",
    image: "/images/copper_bed_cover.png",
    alt: "Renew — a copper-threaded bed cover folded on a bench",
    body: [
      "Copper keeps a surface honest. Woven into the bed, it works while they sleep.",
      "A cover threaded with copper fibre, naturally resistant to what a warm bed gathers. It keeps the sleeping place fresher, longer.",
      "For the senior, the recovering, the dog who lives on their bed.",
    ],
    ritual: "Fit it over the bed and leave it to work. Wash it on the usual cycle, no more than the rest.",
    inside: "Copper-threaded weave, washable. No chemical antimicrobial. No coating.",
    care: "Machine-wash cold. Air dry. The copper does not wash out.",
  },
  {
    slug: "cone-liner",
    name: "Cone Liner",
    displayName: "The Cone Liner",
    descriptor: "The indignity, softened.",
    price: "$28",
    image: "/images/cone_liner.png",
    alt: "The Cone Liner — a soft fabric liner for a recovery cone",
    body: [
      "The cone is a hard thing at a soft time. The liner is the apology.",
      "A padded fabric sleeve for the recovery cone, so the edge that rubs becomes an edge that cushions.",
      "A small mercy for the fortnight it is needed.",
    ],
    ritual: "Slip it over the rim of the cone. Wash it when the day has been long. Retire it when the cone comes off, gladly.",
    inside: "Soft brushed cotton, washable. No hard seam. Fits most standard cones.",
    care: "Machine-wash warm. Tumble low.",
  },
];

export const WATER = [
  {
    slug: "still",
    name: "Still",
    displayName: "Still — the slow feeder",
    descriptor: "The meal, slowed.",
    price: "$54",
    image: "/images/slow_feeder.png",
    alt: "Still — a stone-toned slow feeder bowl on a pale floor",
    body: [
      "A meal gone in seconds is a meal that was never tasted. Still slows it down.",
      "A feeder cut with quiet channels, so the food must be found. The pace steadies the gut and gives the mind a task.",
      "Eating, returned to something worth doing.",
    ],
    ritual: "Fill the channels with the meal. Set it on the floor and step back. The work is theirs; the calm is the reward.",
    inside: "Food-safe stone-toned resin, non-slip base. No BPA. No bright plastic.",
    care: "Top-rack dishwasher, or wash by hand. Dry fully before the next meal.",
  },
  {
    slug: "the-threshold",
    name: "The Threshold",
    displayName: "The Threshold — the paw cleaner",
    descriptor: "The outside, left outside.",
    price: "$62",
    image: "/images/paw_cleaner.png",
    alt: "The Threshold — a cylindrical paw cleaner by a door",
    body: [
      "The door is a line. What crosses it should be only them, not the street they walked.",
      "A gentle cylinder that cleans each paw in a turn — the mud, the salt, the grit of the pavement — before it reaches the floor they sleep on.",
      "The last act of the walk. The first act of the house.",
    ],
    ritual: "Fill to the line with warm water. One paw at a time, a soft twist, then dry on the mat. Kept by the door, used every return.",
    inside: "Soft silicone bristles, spill-guard, no additive needed. No harsh detergent.",
    care: "Empty and rinse after use. Air dry open. Bristles lift out to clean.",
  },
];

// The Recovery Kit — its own editorial object.
export const RECOVERY_KIT = {
  slug: "the-recovery-kit",
  name: "The Recovery Kit",
  descriptor: "For the day they come home.",
  price: "$125",
  image: "/images/recovery_kit.png",
  bagImage: "/images/recovery_kit__bag_only_.png",
  alt: "The Recovery Kit — a charcoal bag with its contents laid out on stone",
  included: [
    "Calm — the calming mist",
    "Hydrate — the gel and syringe",
    "Restore — the food topper",
    "The Cone Liner",
    "Sweep — the gua sha",
    "The card of instructions, written plainly",
  ],
  body: [
    "There is a day that comes to most houses. The procedure, the anaesthetic, the drive home with them quiet in the back.",
    "The Recovery Kit is for that day and the ones just after. Everything the first week asks for, gathered into one charcoal bag, so you are not searching the cupboard at nine at night.",
    "Nothing clinical about how it looks. Everything careful about what it holds.",
  ],
};

// Flat lookup for the product page template.
export const ALL_PRODUCTS = [
  ...RITUALS,
  ...INSTRUMENTS,
  ...FORMULAS,
  ...HOME,
  ...WATER,
  {
    ...RECOVERY_KIT,
    body: RECOVERY_KIT.body,
    ritual:
      "Open it the day before, not the day of. Read the card. Lay the pieces where you will reach for them. Then let the week be slow.",
    inside:
      "Calm, Hydrate gel and syringe, Restore, the Cone Liner, Sweep, and the instruction card. No medication — those come from your veterinarian.",
    care: "Refill the formulas as they run down. The bag is yours to keep and pack again.",
    contents: RECOVERY_KIT.included,
  },
];

export function getProduct(slug) {
  return ALL_PRODUCTS.find((p) => p.slug === slug) || null;
}

// Cross-sell: three complements for the product page.
export function completesTheRitual(slug) {
  const pool = [...INSTRUMENTS, ...FORMULAS, ...HOME, ...WATER].filter(
    (p) => p.slug !== slug
  );
  // Deterministic pick based on slug length so builds are stable.
  const start = slug.length % Math.max(1, pool.length - 3);
  return pool.slice(start, start + 3);
}
