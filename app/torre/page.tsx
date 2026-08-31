import Link from 'next/link'
import { agentes, leads, cidades, campanhas, funil, site } from '@/lib/data'
import { Proa, Placa, Instrumento, SeloEstado, SeloVeredito } from '@/components/torre/pecas'

export default function TorrePage() {
  const agentesAtivos = agentes.filter((a) => a.estado === 'ativo').length
  const totalLeads = cidades.reduce((acc, c) => acc + c.leads, 0)
  const leadsSemSite = cidades.reduce((acc, c) => acc + c.semSite, 0)
  const fechados = funil[funil.length - 1]
  const valorFechado = fechados.valor
  const paginasAtivas = site.paginas.filter((p) => p.estado === 'ativo').length

  return (
    <>
      <Proa
        sobre="T · Torre"
        titulo="Visão geral"
        texto="Estado atual de cada setor da operação Nextfly, tudo em um único lugar."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Instrumento rotulo="Agentes ativos" valor={`${agentesAtivos} / ${agentes.length}`} nota="frota de IA" />
        <Instrumento rotulo="Leads mapeados" valor={String(totalLeads)} nota={`${leadsSemSite} sem site`} />
        <Instrumento rotulo="Páginas ativas" valor={`${paginasAtivas} / ${site.paginas.length}`} nota={site.dominio} />
        <Instrumento rotulo="Fechado (CRM)" valor={valorFechado > 0 ? `R$ ${valorFechado.toLocaleString('pt-BR')}` : '—'} nota={`${fechados.qtd} contratos`} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Placa titulo="Agentes">
          <ul className="flex flex-col gap-3">
            {agentes.map((a) => (
              <li key={a.id} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{a.nome}</p>
                  <p className="truncate text-xs text-muted-foreground">{a.tarefa}</p>
                </div>
                <SeloEstado estado={a.estado} />
              </li>
            ))}
          </ul>
          <Link href="/torre/agentes" className="mt-4 inline-block text-xs text-primary hover:underline">
            Ver todos os agentes →
          </Link>
        </Placa>

        <Placa titulo="Tráfego · Campanhas">
          <ul className="flex flex-col gap-3">
            {campanhas.map((c) => (
              <li key={c.nome} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{c.nome}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {c.conv} conv · CPA R$ {c.cpa.toFixed(1)}
                  </p>
                </div>
                <SeloVeredito veredito={c.veredito} />
              </li>
            ))}
          </ul>
          <Link href="/torre/trafego" className="mt-4 inline-block text-xs text-primary hover:underline">
            Ver painel de tráfego →
          </Link>
        </Placa>

        <Placa titulo="Prospecção · Leads recentes">
          <ul className="flex flex-col gap-3">
            {leads.slice(0, 5).map((l) => (
              <li key={l.nome} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{l.nome}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {l.ramo} · {l.cidade}
                  </p>
                </div>
                <span className="whitespace-nowrap text-xs text-muted-foreground">{l.estado}</span>
              </li>
            ))}
          </ul>
          <Link href="/torre/prospeccao" className="mt-4 inline-block text-xs text-primary hover:underline">
            Ver prospecção →
          </Link>
        </Placa>

        <Placa titulo="Site · nextfly.com.br">
          <ul className="flex flex-col gap-3">
            {site.paginas.map((p) => (
              <li key={p.rota} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{p.nome}</p>
                  <p className="truncate text-xs text-muted-foreground">{p.rota}</p>
                </div>
                <span className="whitespace-nowrap text-xs text-muted-foreground">{p.estado}</span>
              </li>
            ))}
          </ul>
          <Link href="/torre/site" className="mt-4 inline-block text-xs text-primary hover:underline">
            Ver quadro do site →
          </Link>
        </Placa>
      </div>
    </>
  )
}
