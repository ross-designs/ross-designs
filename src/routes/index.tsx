import { useState, useCallback, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import casePersonas from "@/assets/case-personas.jpg";
import caseFlexibility from "@/assets/case-flexibility.jpg";
import caseIA from "@/assets/case-ia.jpg";
import caseAutomation from "@/assets/case-automation.jpg";
import rossProfile from "@/assets/ross-profile.jpg.asset.json";
import galleryDataSources from "@/assets/Data_Sources_-_Overview.png.asset.json";
import galleryGoogleAdsConn from "@/assets/Google_Ads_-_Connect-3.png.asset.json";
import galleryGoogleAdsConfig from "@/assets/Google_Ads_-_Configure-3.png.asset.json";
import galleryFbAccounts from "@/assets/Facebook_Ads_-_Accounts.png.asset.json";
import galleryFbPreview from "@/assets/Facebook_Ads_-_Field_Preview-2.png.asset.json";
import galleryFileTransport from "@/assets/File_Import_-_Transport_Type.png.asset.json";
import galleryFileUpload from "@/assets/File_Import_-_Upload.png.asset.json";
import galleryFileConfigure from "@/assets/File_Import_-_Configure.png.asset.json";
import gallerySheets from "@/assets/Google_Sheets_-_Connect.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ross Barrett — Senior Product Designer, SaaS" },
      {
        name: "description",
        content:
          "Product Designer with 10+ years in SaaS. I shipped redesigns that cut support tickets 45%, lifted landing page conversion 60%, and reduced churn 30%.",
      },
      { property: "og:title", content: "Ross Barrett — Senior Product Designer" },
      {
        property: "og:description",
        content:
          "10+ years designing SaaS products. Outcome-driven case studies from Funnel.",
      },
    ],
  }),
  component: Index,
});

const metrics = [
  { value: "45%", label: "Fewer support tickets", detail: "after core workflow redesign at Funnel" },
  { value: "+60%", label: "Landing page conversion", detail: "from content & UX initiatives" },
  { value: "30%", label: "Churn reduction", detail: "via health scoring & proactive CS" },
  { value: "2×", label: "SQL volume", detail: "through analytics-led campaign strategy" },
  { value: "4-day", label: "Feedback cycles", detail: "via rapid prototyping practice" },
  { value: "10+", label: "Years in SaaS", detail: "design, product, growth, CS" },
];

const cases = [
  {
    n: "01",
    img: casePersonas,
    tag: "Research · Strategy",
    title: "Designing personas that aligned an entire product org",
    blurb:
      "Built Funnel's customer personas from qualitative and quantitative research, giving three product lines a shared language for who they were building for.",
    outcome: "Adopted by Product, Marketing, and CS as the canonical customer model.",
    href: "/case/personas",
  },
  {
    n: "02",
    img: caseFlexibility,
    tag: "Workflow redesign",
    title: "Replacing destructive edits with a flexible data model",
    blurb:
      "Users had to delete and rebuild when their setup changed. I redesigned the core flow so configurations could evolve in place, without losing work.",
    outcome: "Eliminated a top-3 driver of support tickets and frustration.",
    href: "/case/flexibility",
  },
  {
    n: "03",
    img: caseIA,
    tag: "Information architecture",
    title: "Untangling a page that tried to be three things at once",
    blurb:
      "A single surface served as setup flow, overview, and workspace. I restructured the IA so each job got its own focused space — without splintering the experience.",
    outcome: "Boosted engagement on core feature; reduced time-to-first-value.",
    href: "/case/ia",
  },
  {
    n: "04",
    img: caseAutomation,
    tag: "Self-serve · Scale",
    title: "Letting the team focus on the hard problems",
    blurb:
      "CS was buried in simple, repetitive requests. I designed a self-serve solution that handled the long tail, freeing the team for high-impact work.",
    outcome: "Contributed to a 45% reduction in inbound support load.",
    href: "/case/automation",
  },
];

const experience = [
  { years: "2021 — Now", role: "Product Designer", company: "Funnel AB" },
  { years: "2018 — 2021", role: "Product Marketing Manager", company: "Funnel AB" },
  { years: "2015 — 2022", role: "Product Manager / CSM", company: "Qwaya (Funnel AB)" },
  { years: "2015 — 2018", role: "CSM / Product Specialist", company: "Funnel AB" },
];

const gallery = [
  { img: galleryDataSources.url, title: "Data Sources · Overview", caption: "The central hub where users manage every connected data source." },
  { img: galleryGoogleAdsConn.url, title: "Google Ads · Authenticate", caption: "Streamlined credential selection in the connection flow." },
  { img: galleryGoogleAdsConfig.url, title: "Google Ads · Configure", caption: "Guided configuration with contextual help built in." },
  { img: galleryFbAccounts.url, title: "Facebook Ads · Select accounts", caption: "Clear account selection with search, bulk actions, and premium upgrades in-context." },
  { img: galleryFbPreview.url, title: "Facebook Ads · Field preview", caption: "Confirmation step with a full preview of what will sync." },
  { img: galleryFileTransport.url, title: "File Import · Transport type", caption: "Choose how files reach Funnel — manual, email, or webhook — from a single step." },
  { img: galleryFileUpload.url, title: "File Import · Upload", caption: "A calm empty state that guides users to their first successful upload." },
  { img: galleryFileConfigure.url, title: "File Import · Configure", caption: "Spreadsheet-style mapping that turns raw files into usable data." },
  { img: gallerySheets.url, title: "Google Sheets · Select", caption: "Instant data preview to validate the sheet before connecting." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Metrics />
      <Work />
      <About />
      <Experience />
      <GallerySection />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Ross Barrett<span className="text-primary">.</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-card/80 transition-all shadow-sm whitespace-nowrap"
        >
          <span className="h-2 w-2 rounded-full bg-green-600" />
          Open to new roles
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 grain">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse at top right, oklch(0.7 0.18 250 / 0.25), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.85 0.06 240 / 0.5), transparent 55%)`,
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="reveal max-w-5xl">
            <h1 className="font-display text-balance text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Designing SaaS products that <em className="text-primary not-italic">earn</em><br />
              their numbers.
            </h1>
          <p className="mt-10 max-w-2xl text-lg text-pretty text-muted-foreground md:text-xl">
            I'm <span className="text-foreground">Ross Barrett</span> — a product designer with a decade
            inside SaaS, shaping workflows, research, and information architecture at Funnel. I ship work that moves the
            metrics teams actually care about: support load, conversion, retention.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              See selected work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-base font-medium text-foreground hover:bg-card transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
          <div className="reveal hidden lg:flex lg:items-center lg:justify-center">
            <img
              src={rossProfile.url}
              alt="Ross Barrett"
              className="h-72 w-72 rounded-full object-cover object-[75%_35%] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-baseline justify-between gap-6">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Outcomes, not outputs
          </h2>
          <span className="font-mono text-xs text-muted-foreground">/ 06</span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl bg-border md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background p-8 transition-colors hover:bg-card">
              <div className="font-display text-6xl text-primary md:text-7xl">{m.value}</div>
              <div className="mt-3 text-base font-medium text-foreground">{m.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="mb-16 flex items-end justify-between gap-6">
        <div>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected case studies
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Work that moved<br />the needle.
          </h2>
        </div>
        <div className="hidden text-right text-sm text-muted-foreground md:block">
          Four studies from<br />Funnel AB · 2021–2026
        </div>
      </div>

      <div className="space-y-24 md:space-y-32">
        {cases.map((c, i) => (
          <Link
            key={c.n}
            to={c.href}
            className={`group grid items-center gap-10 md:grid-cols-12 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span className="text-primary">{c.n}</span>
                <span className="h-px w-8 bg-border" />
                <span className="uppercase tracking-widest">{c.tag}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl md:text-4xl leading-tight tracking-tight text-balance">
                {c.title}
              </h3>
              <p className="mt-5 text-base text-muted-foreground text-pretty">{c.blurb}</p>
              <div className="mt-6 border-l-2 border-primary pl-4 text-sm">
                <div className="font-mono uppercase tracking-widest text-[10px] text-muted-foreground">
                  Outcome
                </div>
                <div className="mt-1 text-foreground">{c.outcome}</div>
              </div>
              <div className="mt-7 inline-flex items-center gap-2 text-sm text-primary">
                Read the case study
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-12 md:py-36">
        <div className="md:col-span-4">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About
          </div>
          <h2 className="font-display text-5xl leading-none tracking-tight">
            A designer<br />who's lived<br />on every<br />
            <em className="text-primary not-italic">side of the product.</em>
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">
          <p className="text-foreground text-pretty">
            Before I was a product designer, I was a leader in customer success, built a marketing function, and managed product roadmaps.
          </p>
          <p className="text-pretty">
            At Funnel, I defined the design vision across three product lines alongside the CDO,
            running continuous discovery and validating with rapid prototyping. I think in
            workflows and outcomes — what the user is actually trying to accomplish, and
            what changes in the business when we get it right.
          </p>
          <p className="text-pretty">
            Quant and qual research feed the same picture. I use AI prototyping to compress
            feedback cycles down to days, not sprints, so we can put real interfaces in front
            of real users before committing to a direction.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              "User-centered design",
              "Workflow & information architecture",
              "Quant & qual research",
              "Usability testing",
              "Traditional & AI prototyping",
              "Cross-functional leadership",
            ].map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trajectory
        </div>
        <h2 className="font-display text-5xl md:text-6xl tracking-tight">
          A decade of compounding context.
        </h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {experience.map((e) => (
          <div
            key={e.years + e.role}
            className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-card/50 px-2 -mx-2 rounded"
          >
            <div className="col-span-12 font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-3">
              {e.years}
            </div>
            <div className="col-span-12 font-display text-3xl tracking-tight md:col-span-6 md:text-4xl">
              {e.role}
            </div>
            <div className="col-span-12 text-right text-sm text-muted-foreground md:col-span-3">
              {e.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return ContactImpl();
}

function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  return (
    <section id="gallery" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Gallery
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
            A closer look at the product.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            A selection of screens from features I've shaped inside the Funnel app —
            from the data sources overview to the connection flows for Google Ads,
            Google Analytics, Facebook Ads, File Import and Google Sheets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {gallery.map((g, i) => (
            <figure
              key={g.title}
              className="group overflow-hidden rounded-2xl border border-border bg-background"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${g.title} full screen`}
                className="block w-full overflow-hidden cursor-zoom-in"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                />
              </button>
              <figcaption className="border-t border-border px-6 py-5">
                <div className="font-display text-lg tracking-tight">{g.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{g.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-10 backdrop-blur-sm animate-in fade-in"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIndex(null); }}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 rounded-full bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center text-xl"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)); }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIndex((i) => (i === null ? i : (i + 1) % gallery.length)); }}
            aria-label="Next"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center"
          >
            ›
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-[95vw] max-h-[90vh] flex flex-col items-center gap-4">
            <img
              src={gallery[openIndex].img}
              alt={gallery[openIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <figcaption className="text-center text-white/90">
              <div className="font-display text-lg tracking-tight">{gallery[openIndex].title}</div>
              <div className="mt-1 text-sm text-white/60">{gallery[openIndex].caption}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function ContactImpl() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, oklch(0.78 0.16 55 / 0.25), transparent 65%)`,
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
        <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Let's talk
        </div>
        <h2 className="font-display text-balance text-6xl leading-[0.95] tracking-tight md:text-8xl">
          Hiring for a senior<br />
          design role?<br />
          <em className="text-primary not-italic">I'd love to hear about it.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Open to senior and lead Product Designer roles in Stockholm or remote-friendly
          European teams.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:r_barrett1@hotmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Email
            <span>→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ross-designs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-base font-medium hover:bg-card transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-10 font-mono text-sm text-muted-foreground">
          {"\n"}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ross Barrett.</div>
        <div className="font-mono text-xs uppercase tracking-widest">
          {"\n"}
        </div>
      </div>
    </footer>
  );
}

