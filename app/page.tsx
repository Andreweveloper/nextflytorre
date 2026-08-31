import Link from 'next/link'
import { ArrowRight, Bot, Radar, Globe, Filter, BarChart3, TowerControl } from 'lucide-react'

const setores = [
  {
    href: '/torre/agentes',
    icone: Bot,
    titulo: 'Agentes',
    texto: 'Frota de agentes de IA com ficha, ferramentas e comando pronto para copiar.',
  },
  {
    href: '/torre/prospeccao',
    icone: Radar,
    titulo: 'Prospecção',
    texto: 'Comércios sem site no litoral de SC, com situação de cada lead marcada.',
  },
  {
    href: '/torre/site',
    icone: Globe,
    titulo: 'Site',
    texto: 'Estado de cada página do nextfly.com.br em um único quadro.',
  },
  {
    href: '/torre/crm',
    icone: Filter,
    titulo: 'CRM',
    texto: 'Funil do lead encontrado ao contrato fechado, com valores por etapa.',
  },
  {
    href: '/torre/trafego',
    icone: BarChart3,
    titulo: 'Tráfego',
    texto: 'Vereditos de campanha guiados pelas regras de escala da casa.',
  },
]

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <TowerControl className="size-5 text-primary" aria-hidden="true" />
          <span>
            Next<em className="not-italic text-primary">fly</em> Torre
          </span>
        </Link>
        <Link
          href="/torre"
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          Entrar na Torre
        </Link>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pb-24 pt-20 text-center md:pt-28">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Centro de operações Nextfly
          </p>
          <h1 className="text-balance text-5xl font-bold tracking-tight md:text-7xl">Nextfly Torre</h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Planeje, prospecte e acompanhe a operação de ponta a ponta — agentes de IA, varredura de comércios sem
            site, quadro do nextfly.com.br, funil de vendas e decisões de tráfego em um único espaço compartilhado.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/torre"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Entrar na Torre
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="#setores"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Ver setores
            </Link>
          </div>
        </section>

        <section id="setores" className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <h2 className="mb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            O que tem dentro
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {setores.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <s.icone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        {'© 2026 Nextfly · litoral de SC'}
      </footer>
    </div>
  )
}
