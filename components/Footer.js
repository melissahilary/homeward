import Link from "next/link";
import SignUpForm from "./SignUpForm";

const PROMISES = [
  { label: "Considered Returns", icon: "return" },
  { label: "Careful Delivery", icon: "delivery" },
  { label: "Members' Early Access", icon: "key" },
  { label: "The Silent Walks", icon: "walk" },
  { label: "Formulated for Dogs", icon: "leaf" },
];

function PromiseIcon({ name }) {
  const common = { width: 34, height: 34, viewBox: "0 0 34 34", fill: "none", "aria-hidden": true };
  const stroke = { stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "return":
      return (
        <svg {...common}>
          <path d="M9 13a8 8 0 1 1-1.2 6" {...stroke} />
          <path d="M6 8v5h5" {...stroke} />
        </svg>
      );
    case "delivery":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="15" height="12" {...stroke} />
          <path d="M20 15h5l4 4v4h-9" {...stroke} />
          <circle cx="11" cy="25" r="2.2" {...stroke} />
          <circle cx="24" cy="25" r="2.2" {...stroke} />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="12" cy="17" r="5" {...stroke} />
          <path d="M16.5 17H29M25 17v4M29 17v5" {...stroke} />
        </svg>
      );
    case "walk":
      return (
        <svg {...common}>
          <path d="M8 26c3-1 5-4 6-8M20 10c1 4 3 8 6 10" {...stroke} />
          <circle cx="16" cy="8" r="2" {...stroke} />
          <path d="M14 26h8" {...stroke} />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M25 8c0 9-6 15-15 16 0-9 6-15 15-16Z" {...stroke} />
          <path d="M10 24C15 19 19 15 22 11" {...stroke} />
        </svg>
      );
    default:
      return <svg {...common} />;
  }
}

export default function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-warmwhite">
      {/* Promises row */}
      <div className="border-b hairline-light">
        <ul className="mx-auto grid max-w-[1500px] grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-5 md:px-10">
          {PROMISES.map((p) => (
            <li key={p.label} className="flex flex-col items-center gap-4 text-center">
              <span className="text-travertine">
                <PromiseIcon name={p.icon} />
              </span>
              <span className="caps text-[0.6rem] text-steel">{p.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="border-b hairline-light">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-6 px-6 py-20 text-center md:px-10">
          <p className="eyebrow eyebrow-camel">Be the first to know</p>
          <h2 className="max-w-xl font-serif text-3xl font-light leading-display md:text-4xl">
            Sign up to The Turndown.
          </h2>
          <p className="max-w-md font-serif text-lg leading-body text-steel">
            New rituals, essays and openings. One letter, each Sunday evening.
          </p>
          <div className="mt-2 flex justify-center">
            <SignUpForm variant="dark" placeholder="Email address" button="Sign Up" />
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <FooterCol
          title="The House"
          links={[
            { label: "The Journal", href: "/journal" },
            { label: "The House", href: "/house" },
            { label: "The Exhibition", href: "/exhibition" },
            { label: "Our Standard", href: "/standard" },
          ]}
        />
        <FooterCol
          title="Shop"
          links={[
            { label: "Rituals", href: "/shop#rituals" },
            { label: "Instruments", href: "/shop#instruments" },
            { label: "Formulas", href: "/shop#formulas" },
            { label: "The Recovery Kit", href: "/shop#kit" },
          ]}
        />
        <FooterCol
          title="Care"
          links={[
            { label: "Care & Safety", href: "/standard" },
            { label: "Considered Returns", href: "/standard" },
            { label: "Stockists", href: "/house" },
            { label: "Contact", href: "/journal" },
          ]}
        />
        <div>
          <h3 className="caps mb-5 text-[0.62rem] text-steel">The Standard</h3>
          <p className="max-w-xs font-serif text-lg italic leading-body text-warmwhite/85">
            Nothing harmful added. No essential oils, xylitol-free, zinc-free.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t hairline-light">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row md:px-10">
          <Link href="/" className="wordmark text-[0.72rem] text-warmwhite">
            Homeward
          </Link>
          <div className="flex items-center gap-6">
            <span className="caps text-[0.58rem] text-steel">Follow us</span>
            <span className="caps text-[0.58rem] text-steel">Instagram</span>
            <span className="caps text-[0.58rem] text-steel">Journal</span>
          </div>
          <p className="caps text-[0.58rem] text-steel">© 2026 Homeward</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="caps mb-5 text-[0.62rem] text-steel">{title}</h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="font-serif text-lg text-warmwhite/85 transition-opacity duration-500 hover:opacity-60"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
