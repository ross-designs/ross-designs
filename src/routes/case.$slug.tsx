import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import casePersonas from "@/assets/pic02.jpg.asset.json";
import caseFlexibility from "@/assets/pic03.jpg.asset.json";
import caseIA from "@/assets/pic04.jpg.asset.json";
import caseAutomation from "@/assets/pic05.jpg.asset.json";
import bp1 from "@/assets/bp1.png.asset.json";
import bp2 from "@/assets/bp2.png.asset.json";
import bp3 from "@/assets/bp3.png.asset.json";
import atc1 from "@/assets/atc1.png.asset.json";
import atc2 from "@/assets/atc2.png.asset.json";
import atc3 from "@/assets/atc3.png.asset.json";
import scp1 from "@/assets/scp1.png.asset.json";
import ioe1 from "@/assets/ioe1.jpeg.asset.json";
import ioe2 from "@/assets/ioe2.png.asset.json";
import ioe3 from "@/assets/ioe3.png.asset.json";
import fpHero from "@/assets/Facebook_Ads_-_Data_Preview-2.png.asset.json";
import fpPrep from "@/assets/fp_prep_whiteboard.png.asset.json";
import fpPoc from "@/assets/First_stab_at_the_in-flow_data_preview.png.asset.json";

type SectionImage = { src: string; caption?: string };
type Section = { heading: string; body: string; images?: SectionImage[] };
type CaseStudy = {
  slug: string;
  n: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  imageCaption?: string;
  meta: { label: string; value: string }[];
  sections: Section[];
  outcome: string;
  metrics: { value: string; label: string }[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

const studies: Record<string, CaseStudy> = {
  personas: {
    slug: "personas",
    n: "02",
    tag: "Research · Strategy",
    title: "Who uses Funnel?",
    subtitle:
      "Building empathy and a shared customer model for marketing, sales, product and CS through buyer personas.",
    image: casePersonas.url,
    imageCaption: "Reference cards for the buyer personas",
    meta: [
      { label: "Role", value: "Lead designer & researcher" },
      { label: "Team", value: "Marketing, Sales, Product, CS" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: "Marketing was rethinking Funnel's positioning and needed a sharper view of existing customer segments: their goals, behaviours and attitudes. At the same time, Sales and CS were rolling out playbooks that lacked the customer attributes to make them land.",
      },
      {
        heading: "The idea",
        body: "Buyer personas were the most effective way to solve both problems at once, and it gave the whole company a shared, empathetic view of who we were building for.",
      },
      {
        heading: "The scope",
        body: "We focused on existing customer segments rather than aspirational ones. Keep it simple and small, then iterate. The biggest fear was personas that either got ignored or ossified and went stale.",
      },
      {
        heading: "The process",
        body: "I started by collecting internal preconceptions through interviews and workshops with sales teams across our global offices, then aligned with marketing and sales stakeholders on the questions we needed to answer: what challenge are customers trying to solve, what's the buying context, what would they use instead. From there I ran qualitative interviews with recently converted customers and mined the CRM for quantitative signal.",
        images: [{ src: bp1.url, caption: "Our slightly chaotic workspace in Miro" }],
      },
      {
        heading: "Launch & conclusions",
        body: "Five distinct buyer personas. We marketed them internally with printed cards, posters, presentations and company meeting slots, and they became the canonical customer model across product, marketing and CS, referenced in workshops, daily conversations and roadmap decisions.",
        images: [{ src: bp2.url, caption: "V1 of the buyer personas presented in Google Slides" }],
      },
      {
        heading: "Reflections",
        body: "Once adopted, it became clear people were using buyer personas as user personas. The people who buy Funnel aren't always the people who use it. That insight set up the next initiative: user personas built on top of this foundation.",
        images: [{ src: bp3.url, caption: "Internal presentation of the user personas" }],
      },
    ],
    outcome:
      "Adopted across Product, Marketing and CS as the canonical customer model, referenced daily in roadmap, GTM and support conversations.",
    metrics: [
      { value: "5", label: "Buyer personas shipped" },
      { value: "3", label: "Teams aligned" },
      { value: "100%", label: "Adoption across GTM" },
    ],
  },
  flexibility: {
    slug: "flexibility",
    n: "03",
    tag: "Workflow redesign",
    title: "Adapting to change",
    subtitle:
      "Replacing destructive edits with a flexible data model so users could evolve their setup without starting over.",
    image: caseFlexibility.url,
    imageCaption: "Our workspace in FigJam",
    meta: [
      { label: "Role", value: "Product designer" },
      { label: "Team", value: "Product, Engineering, Support" },
    ],
    sections: [
      {
        heading: "Context",
        body: "In Funnel, users manually upload data when an automated connection isn't available. To do that, they configure the dataset: fields, types, the shape of the data. That configuration is reused for every future upload.",
      },
      {
        heading: "The challenge",
        body: "Once set, the configuration couldn't be changed. Renaming a field or fixing a type meant deleting everything and starting over, or filing a support ticket so we could patch it from the backend. Painful and slow for the user; expensive for us.",
      },
      {
        heading: "The idea",
        body: "Let users edit the configuration. Less frustration for them, fewer support tickets for us.",
      },
      {
        heading: "The scope",
        body: "Making everything editable in one go meant a long development cycle while customers kept struggling. We chose to ship one editable option first and learn.",
        images: [{ src: atc3.url, caption: "The manual data upload configuration in Funnel" }],
      },
      {
        heading: "The process",
        body: "I reviewed historic support conversations, feature requests and system events to find the most-needed edit: adding and removing schema fields. I ran interviews with affected users to sharpen the problem and pulled developers in so they could feel the friction first-hand. We prototyped three approaches in Figma and tested them, picking the one that felt closest to the existing configuration setup. I spent a lot of time scenario-mapping in FigJam to nail how edits would behave across dataset states.",
        images: [
          { src: atc2.url, caption: "V2 prototypes in Figma for three different scenarios" },
          { src: atc1.url, caption: "Technical scenario mapping in FigJam" },
        ],
      },
      {
        heading: "Launch & conclusions",
        body: "We released carefully, with clear copy around which options were editable and which weren't. Inbound tickets on this surface dropped sharply, and users started experimenting with their datasets in ways they previously couldn't, which surfaced the next round of edits worth unlocking.",
      },
    ],
    outcome:
      "Eliminated a top-3 driver of support tickets and unlocked a continuous editing roadmap.",
    metrics: [
      { value: "−45%", label: "Tickets on this surface" },
      { value: "3", label: "Prototypes tested" },
      { value: "1→N", label: "Incremental editability" },
    ],
  },
  ia: {
    slug: "ia",
    n: "04",
    tag: "Information architecture",
    title: "A simplified connection process",
    subtitle:
      "Untangling a page that tried to be a setup flow, an overview, and a workspace, without splintering the experience.",
    image: caseIA.url,
    imageCaption: "V1 prototype in Figma",
    meta: [
      { label: "Role", value: "Lead designer" },
      { label: "Team", value: "Cross-team feature" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: "Funnel's file import feature made users hop between several similar pages to complete a single goal. The same pages morphed depending on the phase, and two pages, owned by different teams, displayed the same things. The whole flow was incredibly complicated.",
      },
      {
        heading: "The idea",
        body: "Three simplifications: merge the two duplicate pages under a single owner; uncouple the connection flow, the overview and the workspace; and make pages that users revisit stay static, so they could always find what they needed.",
      },
      {
        heading: "The scope",
        body: "Too big to ship at once. I broke it into smaller, independently valuable pieces we could release incrementally without disrupting other surfaces.",
      },
      {
        heading: "The process",
        body: "I walked through Funnel screen by screen, capturing hundreds of screenshots to ground the user journeys I drew up. Then I deconstructed the feature, built a prototype of the target state, and user-tested it against the existing flow to surface more friction. I sliced the design into independent GitHub issues and kept the engineering team close throughout so we shipped with shared conviction.",
        images: [{ src: scp1.url, caption: "My workspace in FigJam" }],
      },
      {
        heading: "Launch & conclusions",
        body: "The first slice landed with an immediate, measurable drop in clicks and session time. By the time the full initiative shipped, the experience had been transformed: completion rate up, support tickets down, abandoned sessions down. We even got unsolicited positive feedback from customers.",
      },
      {
        heading: "Reflections",
        body: "Ambitious, long-term targets broken into achievable steps beat narrow point-fixes. Every slice paid for itself, and the cumulative outcome was a step-change in the feature.",
      },
    ],
    outcome:
      "Dramatic reduction in clicks and session time, higher completion rate, fewer abandoned sessions, plus unsolicited customer praise.",
    metrics: [
      { value: "↓↓", label: "Clicks & session time" },
      { value: "+", label: "Completion rate" },
      { value: "−", label: "Support requests" },
    ],
  },
  automation: {
    slug: "automation",
    n: "05",
    tag: "Self-serve · Scale",
    title: "Increasing operational efficiency",
    subtitle:
      "Letting Integration Engineering focus on the hard problems by giving customers a self-serve path through the long tail.",
    image: caseAutomation.url,
    imageCaption: "Funnel's file import section",
    meta: [
      { label: "Role", value: "Product designer" },
      { label: "Team", value: "Integration Engineering, Product" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: "Funnel's Integration Engineering team builds custom connectors when the core offering and self-service tools fall short. Demand kept growing, but a huge slice of their time was being spent on simple, repetitive requests, not the trickier cases that actually needed them.",
        images: [{ src: ioe1.url, caption: "Funnel's Integration Engineering team at Camp Funnel, Barcelona 2022" }],
      },
      {
        heading: "The idea",
        body: "Expand Funnel's self-serve offering so the long tail of simple requests handled itself. Customers get unblocked faster; Integration Engineering reclaims time for high-impact work.",
      },
      {
        heading: "The scope",
        body: "Focus first on the request patterns that dominated the queue, the boring 80%. Ship the self-serve flow, measure the deflection, then expand.",
      },
      {
        heading: "The process",
        body: "I sat with Integration Engineering to understand which request shapes were most common and where the existing UI was missing affordances. I prototyped a self-serve flow that mirrored the patterns they were already executing manually, then validated it with both customers and the engineers themselves before shipping.",
        images: [
          { src: ioe2.url, caption: "Workshop in FigJam" },
          { src: ioe3.url, caption: "Prototypes in Figma" },
        ],
      },
      {
        heading: "Launch & conclusions",
        body: "The self-serve flow handled the repetitive long tail, contributing to a ~45% reduction in inbound support load on this surface and freeing Integration Engineering to focus on the cases that genuinely need them.",
      },
    ],
    outcome:
      "Contributed to a ~45% reduction in inbound support load and reclaimed engineering capacity for high-impact custom work.",
    metrics: [
      { value: "−45%", label: "Inbound requests" },
      { value: "↑", label: "IE capacity for hard work" },
      { value: "Self-serve", label: "Long-tail coverage" },
    ],
  },
  "field-preview": {
    slug: "field-preview",
    n: "01",
    tag: "Cross-team · Discovery",
    title: "Breaking the guess-and-check loop",
    subtitle:
      "A cross-team hack-day initiative that let users preview the fields and data they'd get from a source, before committing to a connection.",
    image: fpHero.url,
    imageCaption: "The field & data preview design in Figma",
    meta: [
      { label: "Role", value: "Lead designer" },
      { label: "Team", value: "Connect, Data-In, Key" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: "Users found it difficult to understand what they'd actually get when connecting a new data source. They didn't know which fields a given configuration would produce, or what the underlying data would look like, so the standard workflow was: connect a source, check the Data Explorer, reconfigure, repeat. A slow, frustrating guess-and-check loop that also drove avoidable support load.",
      },
      {
        heading: "The idea",
        body: "Break, or at least drastically shorten, that loop by surfacing a preview inside the connect flow itself. Two candidate approaches: a live data preview using the current configuration, and a searchable field listing based on that configuration.",
      },
      {
        heading: "Research",
        body: "I partnered with Solutions, Support and the PLG team to gather insights, sifted through Slack and Intercom for recurring requests, and looked at how competitors handled the same problem. I built early prototypes in Figma ahead of the hack-day so we could react to a concrete design rather than a blank page.",
      },
      {
        heading: "Preparations",
        body: "Before hacking, we reviewed the research together, walked through the prototypes and mapped pros and cons for each problem space (quota concerns, per-connector effort, backend readiness) so the split into two focused teams was grounded in trade-offs, not guesses.",
        images: [{ src: fpPrep.url, caption: "Mapping pros and cons for field listing vs. data preview" }],
      },
      {
        heading: "Group 1: Data preview",
        body: "We tested with Instagram Insights: a limited download entry point returned a live sample directly to a new preview step between configuration and connect, complete with pretty field names pulled from the connector schema.",
        images: [{ src: fpPoc.url, caption: "First stab at the in-flow data preview" }],
      },
      {
        heading: "Group 2: Field listing",
        body: "Inspired by our Google Analytics field picker, we explored a full field picker for Google Ads. Technically possible, but custom fields, attribution windows and filters made it too heavy for the time-box. We pivoted to a simple, configuration-driven field list that shipped the same insight with a fraction of the complexity.",
      },
      {
        heading: "Launch & conclusions",
        body: "We shipped both a data preview and a searchable field list, A/B tested which one users saw first, and instrumented the flow with lightweight tracking. Fullstory sessions confirmed the feature was being used as intended, which in this case was enough signal to be confident it was solving the problem without creating a heavy measurement setup.\n\nFor the data sources which this new feature was implemented for, we saw an 80% decline in relevant support tickets.",
      },
      {
        heading: "Reflections",
        body: "After reviewing user sessions in FullStory, it was clear that field listing and data previews aren't competing solutions; users flick between them. We decided to update the order to fields first and the data preview second, as this best suited the user's mental model.",
      },
    ],
    outcome:
      "A reusable preview framework live across three connectors and rolling out to the rest, turning a guess-and-check loop into a confident, one-shot connection.",
    metrics: [
      { value: "3", label: "Connectors live at launch" },
      { value: "-80%", label: "Reduction in support tickets" },
      { value: "A/B", label: "Validated in-flow" },
    ],
  },
};

const order = ["field-preview", "personas", "flexibility", "ia", "automation"];
for (const slug of order) {
  const i = order.indexOf(slug);
  const prev = order[i - 1];
  const next = order[i + 1];
  if (prev) studies[slug].prev = { slug: prev, title: studies[prev].title };
  if (next) studies[slug].next = { slug: next, title: studies[next].title };
}

export const Route = createFileRoute("/case/$slug")({
  loader: ({ params }): CaseStudy => {
    const study = studies[params.slug];
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Ross Barrett` },
          { name: "description", content: loaderData.subtitle },
          { property: "og:title", content: `${loaderData.title} | Ross Barrett` },
          { property: "og:description", content: loaderData.subtitle },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-5xl">Case study not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary">← Back to portfolio</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Something broke</h1>
      <p className="mt-4 text-muted-foreground">
        {error instanceof Error ? error.message : String(error)}
      </p>
      <Link to="/" className="mt-6 inline-block text-primary">← Back to portfolio</Link>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const study = Route.useLoaderData() as CaseStudy;
  const lightboxImages = useMemo<SectionImage[]>(() => {
    const imgs: SectionImage[] = [{ src: study.image, caption: study.imageCaption }];
    for (const s of study.sections) {
      if (s.images) imgs.push(...s.images);
    }
    return imgs;
  }, [study]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + lightboxImages.length) % lightboxImages.length)),
    [lightboxImages.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % lightboxImages.length)),
    [lightboxImages.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, prev, next]);

  const indexOfSectionImage = (src: string) => lightboxImages.findIndex((im) => im.src === src);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <CaseNav />
      <article>
        <header className="relative overflow-hidden border-b border-border">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              backgroundImage: `radial-gradient(ellipse at top right, oklch(0.75 0.14 250 / 0.25), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.9 0.04 240 / 0.6), transparent 55%)`,
            }}
          />
          <div className="mx-auto max-w-5xl px-6 pt-32 pb-16 md:pt-44 md:pb-24">
            <h1 className="mt-6 font-display text-5xl leading-[1] tracking-tight text-balance md:text-7xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-muted-foreground text-pretty md:text-2xl">
              {study.subtitle}
            </p>
            <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {study.meta.map((m) => (
                <div key={m.label} className="border-l-2 border-primary/70 pl-4">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-base text-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-40px_oklch(0.5_0.18_255_/_0.35)] cursor-zoom-in"
          >
            <img
              src={study.image}
              alt={study.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </button>
          {study.imageCaption && (
            <p className="mt-3 text-center text-sm italic text-muted-foreground">
              {study.imageCaption}
            </p>
          )}
        </div>

        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-border">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-background p-5 text-center">
                <div className="font-display text-3xl text-primary md:text-4xl">{m.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24 md:pb-32">
          <div className="space-y-14">
            {study.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                  {s.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                  {s.body}
                </p>
                {s.images && s.images.length > 0 && (
                  <div className="mt-8 space-y-8">
                    {s.images.map((img, i) => (
                       <figure key={i}>
                         <button
                           type="button"
                           onClick={() => setOpenIndex(indexOfSectionImage(img.src))}
                           className="block w-full overflow-hidden rounded-xl border border-border bg-card cursor-zoom-in"
                         >
                           <img
                             src={img.src}
                             alt={img.caption ?? ""}
                             loading="lazy"
                             className="w-full h-auto"
                           />
                         </button>
                        {img.caption && (
                          <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              Outcome
            </div>
            <p className="mt-2 text-xl text-foreground text-pretty">{study.outcome}</p>
          </div>
        </section>

        <nav className="border-t border-border bg-card/40">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2">
            {study.prev ? (
              <Link
                to="/case/$slug"
                params={{ slug: study.prev.slug }}
                className="group rounded-xl border border-border bg-background p-6 transition-colors hover:bg-card"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  ← Previous
                </div>
                <div className="mt-2 font-display text-2xl tracking-tight group-hover:text-primary">
                  {study.prev.title}
                </div>
              </Link>
            ) : <div />}
            {study.next ? (
              <Link
                to="/case/$slug"
                params={{ slug: study.next.slug }}
                className="group rounded-xl border border-border bg-background p-6 text-right transition-colors hover:bg-card"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Next →
                </div>
                <div className="mt-2 font-display text-2xl tracking-tight group-hover:text-primary">
                  {study.next.title}
                </div>
              </Link>
            ) : <div />}
          </div>
        </nav>
      </article>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            ← Back to portfolio
          </Link>
          <a href="mailto:r_barrett1@hotmail.com" className="hover:text-foreground transition-colors">
            r_barrett1@hotmail.com
          </a>
        </div>
      </footer>
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={close}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(dx) > 50) {
              if (dx < 0) next();
              else prev();
            }
          }}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full bg-white/10 text-white w-10 h-10 flex items-center justify-center hover:bg-white/20"
          >
            ✕
          </button>
          {lightboxImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white w-10 h-10 flex items-center justify-center hover:bg-white/20"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white w-10 h-10 flex items-center justify-center hover:bg-white/20"
              >
                ›
              </button>
            </>
          )}
          <figure className="max-w-[95vw] max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImages[openIndex].src}
              alt={lightboxImages[openIndex].caption ?? ""}
              className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg"
            />
            {lightboxImages[openIndex].caption && (
              <figcaption className="mt-3 text-center text-sm italic text-white/80">
                {lightboxImages[openIndex].caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </main>
  );
}

function CaseNav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Ross Barrett<span className="text-primary">.</span>
        </Link>
        <Link
          to="/"
          hash="work"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← All work
        </Link>
      </div>
    </header>
  );
}