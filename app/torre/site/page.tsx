import { site } from '@/lib/data'
import { Proa, Placa, Instrumento } from '@/components/torre/pecas'
import { cn } from '@/lib/utils'

const estadoStyle: Record<string, string> = {
  ativo: 'text-success border-success/40 bg-success/10',
  espera: 'text-warning border-warning/40 bg-warning/10',
  parado: 'text-muted-foreground border-border bg-muted',
}

export default function SitePage() {
  const ativas = site.paginas.filter((p) => p.estado === 'ativo').length

  return (
    <>
      <Proa
        sobre="ST · Site"
        titulo={site.dominio}
        texto="Estado de cada página do site em um único quadro."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Instrumento rotulo="Páginas ativas" valor={`${ativas} / ${site.paginas.length}`} />
        <Instrumento rotulo="Hospedagem" valor={site.hospedagem} />
        <Instrumento rotulo="Último deploy" valor={site.ultimoDeploy} />
      </div>

      <Placa titulo="Páginas">
        <ul className="flex flex-col divide-y divide-border">
          {site.paginas.map((p) => (
            <li key={p.rota} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium">{p.nome}</p>
                <p className="font-mono text-xs text-muted-foreground">{p.rota}</p>
              </div>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
                  estadoStyle[p.estado],
                )}
              >
                {p.estado}
              </span>
            </li>
          ))}
        </ul>
      </Placa>
    </>
  )
}
