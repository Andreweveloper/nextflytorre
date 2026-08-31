import { leads, cidades } from '@/lib/data'
import { Proa, Placa, Instrumento, estadoLeadStyle } from '@/components/torre/pecas'
import { cn } from '@/lib/utils'

export default function ProspeccaoPage() {
  const totalLeads = cidades.reduce((acc, c) => acc + c.leads, 0)
  const totalSemSite = cidades.reduce((acc, c) => acc + c.semSite, 0)

  return (
    <>
      <Proa
        sobre="PR · Prospecção"
        titulo="Comércios sem site no litoral de SC"
        texto="Varredura por cidade e ramo, com a situação de cada lead marcada no Cais 47."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Instrumento rotulo="Leads mapeados" valor={String(totalLeads)} />
        <Instrumento rotulo="Sem site" valor={String(totalSemSite)} nota={`${Math.round((totalSemSite / totalLeads) * 100)}% do total`} />
        <Instrumento rotulo="Cidades cobertas" valor={String(cidades.length)} nota="litoral de SC" />
      </div>

      <Placa titulo="Por cidade" className="mb-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {cidades.map((c) => (
            <div key={c.nome} className="rounded-xl border border-border bg-background/40 p-3">
              <p className="text-sm font-medium">{c.nome}</p>
              <p className="mt-1 font-mono text-xl font-semibold tabular-nums">{c.leads}</p>
              <p className="text-xs text-muted-foreground">{c.semSite} sem site</p>
            </div>
          ))}
        </div>
      </Placa>

      <Placa titulo="Leads">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Nome</th>
                <th className="pb-2 pr-4 font-medium">Ramo</th>
                <th className="pb-2 pr-4 font-medium">Cidade</th>
                <th className="pb-2 pr-4 font-medium">Telefone</th>
                <th className="pb-2 font-medium">Situação</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.nome} className="border-b border-border/60 last:border-0">
                  <td className="py-2.5 pr-4 font-medium">{l.nome}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{l.ramo}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{l.cidade}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{l.fone}</td>
                  <td className="py-2.5">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
                        estadoLeadStyle[l.estado],
                      )}
                    >
                      {l.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Placa>
    </>
  )
}
