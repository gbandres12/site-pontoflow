import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { PhoneMockup } from "./PhoneMockup";
import {
  site, nav, hero, pains, steps, features, audience, differentials, pricing, faq, finalCta, whatsappLink,
} from "@/content/site";

const container = "mx-auto max-w-6xl px-4 sm:px-6";
const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-700/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400";
const btnGhost =
  "inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10";

function SectionTitle({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${dark ? "text-violet-100/80" : "text-slate-600"}`}>{subtitle}</p>}
    </Reveal>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07060d]/85 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <a href="#" className="flex items-center gap-3" aria-label="Ponto Flow — início">
          <img src="/logo-pontoflow.png" alt="Ponto Flow" width={160} height={41} className="h-8 w-auto mix-blend-lighten" />
        </a>
        <nav aria-label="Principal" className="hidden gap-7 text-sm text-violet-100/80 md:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-4">
          <img src="/logo-andres-tech.png" alt="Andres Technologies" width={120} height={32} className="hidden h-7 w-auto opacity-80 lg:block" />
          <a href={whatsappLink()} target="_blank" rel="noopener" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500">
            Demonstração
          </a>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07060d] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(192,132,252,.18),transparent_50%)]" aria-hidden="true" />
      <div className={`${container} relative grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28`}>
        <Reveal>
          <p className="inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-200">{hero.eyebrow}</p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-violet-300">Ponto Flow</span> — {hero.title}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-violet-100/80">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener" className={btnPrimary}>
              <Icon name="whatsapp" className="h-5 w-5" /> {hero.primary}
            </a>
            <a href="#planos" className={btnGhost}>{hero.secondary}</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-violet-100/80">
            {hero.badges.map((b) => (
              <li key={b} className="flex items-center gap-2"><Icon name="tick" className="h-4 w-4 text-violet-300" />{b}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150}><PhoneMockup /></Reveal>
      </div>
    </section>
  );
}

export function Pains() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className={container}>
        <SectionTitle title={pains.title} subtitle={pains.subtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pains.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-rose-50 text-rose-600"><Icon name={p.icon} /></div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-[#0d0a1c] py-20 text-white lg:py-24">
      <div className={container}>
        <SectionTitle title={steps.title} subtitle={steps.subtitle} dark />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="relative rounded-3xl border border-white/10 bg-white/5 p-8">
              <div>
                <span className="absolute right-6 top-5 text-5xl font-bold text-white/10" aria-hidden="true">{i + 1}</span>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500"><Icon name={s.icon} className="h-7 w-7" /></div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-violet-100/80">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="scroll-mt-16 bg-white py-20 lg:py-24">
      <div className={container}>
        <SectionTitle title={features.title} subtitle={features.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 5) * 60} className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-100 text-violet-700"><Icon name={f.icon} /></div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudienceAndDifferentials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className={container}>
        <SectionTitle title={audience.title} />
        <Reveal className="flex flex-wrap justify-center gap-3">
          {audience.items.map((a) => (
            <span key={a} className="rounded-full border border-violet-200 bg-white px-5 py-2 font-medium text-violet-800">{a}</span>
          ))}
        </Reveal>
        <div className="mt-20">
          <SectionTitle title={differentials.title} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.items.map((d, i) => (
              <Reveal key={d.title} delay={i * 80} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-300"><Icon name={d.icon} className="h-7 w-7" /></div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{d.title}</h3>
                <p className="mt-1 text-slate-600">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="planos" className="scroll-mt-16 bg-[#07060d] py-20 text-white lg:py-24">
      <div className={container}>
        <SectionTitle title={pricing.title} subtitle={pricing.subtitle} dark />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}
              className={`relative flex flex-col rounded-3xl p-8 ${p.highlight
                ? "bg-gradient-to-b from-violet-600 to-violet-800 shadow-2xl shadow-violet-700/40 lg:-my-4"
                : "border border-white/10 bg-white/5"}`}>
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-fuchsia-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#2a0d3d]">Mais escolhido</span>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-violet-100/80">{p.limit}</p>
              <p className="mt-6"><span className="text-4xl font-bold">{p.price}</span><span className="text-violet-100/80">{p.period}</span></p>
              {p.note && <p className="mt-1 text-sm text-violet-100/80">{p.note}</p>}
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3"><Icon name="tick" className="h-5 w-5 shrink-0 text-violet-300" />{f}</li>
                ))}
              </ul>
              <a href={whatsappLink(`Olá! Tenho interesse no plano ${p.name} do Ponto Flow.`)} target="_blank" rel="noopener"
                className={`mt-8 rounded-full py-3 text-center font-semibold transition ${p.highlight ? "bg-white text-violet-800 hover:bg-violet-50" : "border border-white/25 hover:bg-white/10"}`}>
                {pricing.cta}
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-col items-center gap-2 text-center text-violet-100/80">
          {pricing.extras.map((e) => <p key={e}>{e}</p>)}
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-3xl rounded-2xl border border-violet-400/30 bg-violet-500/10 p-6 text-center">
          <p className="text-lg font-medium text-violet-100">“{pricing.quote}”</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-white py-20 lg:py-24">
      <div className={`${container} max-w-3xl`}>
        <SectionTitle title={faq.title} />
        <div className="space-y-3">
          {faq.items.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {f.q}
                <span className="text-2xl text-violet-600 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-500 py-20 text-white">
      <Reveal className={`${container} text-center`}>
        <h2 className="text-3xl font-bold sm:text-4xl">{finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{finalCta.subtitle}</p>
        <a href={whatsappLink()} target="_blank" rel="noopener"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-violet-800 shadow-xl transition hover:bg-violet-50">
          <Icon name="whatsapp" className="h-5 w-5" /> {finalCta.button}
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const c = site.contact;
  return (
    <footer className="bg-[#07060d] py-14 text-violet-100/80">
      <div className={`${container} grid gap-10 md:grid-cols-3`}>
        <div>
          <img src="/logo-andres-tech.png" alt="Andres Technologies" width={160} height={42} className="h-10 w-auto" />
          <p className="mt-4 text-sm">Ponto Flow é um produto Andres Technologies.</p>
        </div>
        <div>
          <h2 className="font-semibold text-white">Contato</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={whatsappLink()} target="_blank" rel="noopener" className="hover:text-white">WhatsApp: {c.whatsappLabel}</a></li>
            <li><a href={`mailto:${c.email}`} className="hover:text-white">{c.email}</a></li>
            <li><a href={c.instagramUrl} target="_blank" rel="noopener" className="hover:text-white">Instagram {c.instagram}</a></li>
            <li>{c.city}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white">Navegação</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}
          </ul>
        </div>
      </div>
      <p className={`${container} mt-10 border-t border-white/10 pt-6 text-xs`}>
        © {new Date().getFullYear()} Andres Technologies. Ferramenta de gestão de jornada e controle interno.
      </p>
    </footer>
  );
}
