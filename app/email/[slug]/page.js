import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EMAILS, getEmail } from "@/lib/emails";

export function generateStaticParams() {
  return EMAILS.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }) {
  const e = getEmail(params.slug);
  if (!e) return { title: "Not found" };
  return { title: `${e.name} — email preview`, description: e.subject };
}

export default function EmailPreviewPage({ params }) {
  const email = getEmail(params.slug);
  if (!email) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <Link href="/email" className="link mb-8 inline-block text-base text-ink-soft">
          All emails
        </Link>

        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {email.name}
          </h1>
          <p className="mt-2 text-base text-ink-soft">{email.when}</p>
        </div>

        {/* Faithful inbox frame. */}
        <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-line bg-white">
          <dl className="divide-y divide-line border-b border-line text-base">
            <Header2 label="From" value={email.from} />
            <Header2 label="Subject" value={email.subject} />
            <Header2 label="Preview" value={email.preheader} muted />
          </dl>
          <pre className="max-w-full overflow-x-auto whitespace-pre-wrap px-5 py-6 font-sans text-[1.02rem] leading-relaxed text-ink">
            {email.body}
          </pre>
        </div>

        <p className="mt-4 max-w-2xl text-sm text-ink-faint">
          Plain text. No images, no tracking pixels. Bracketed values are filled
          in per person at send time.
        </p>
      </main>
      <Footer />
    </>
  );
}

function Header2({ label, value, muted }) {
  return (
    <div className="flex gap-4 px-5 py-2.5">
      <dt className="w-20 shrink-0 font-mono text-sm text-ink-faint">{label}</dt>
      <dd className={`text-base ${muted ? "text-ink-soft" : "text-ink"}`}>{value}</dd>
    </div>
  );
}
