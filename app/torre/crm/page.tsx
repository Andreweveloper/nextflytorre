import { funil, fmt, fmtBRL } from '@/lib/data'
import { Proa, Placa, Instrumento } from '@/components/torre/pecas'

export default function CrmPage() {
  const encontrados = funil[0].qtd
  const fechado = funil[funil.length - 1]
  const taxaConversao = ((fechado.qtd / encontrados) * 100).toFixed(1)
  const valorTotal = funil.reduce((acc, e) => acc + e.valor, 0)

  return (
    <>
      <Proa
        sobre="CR · CRM"
        titulo="Funil de vendas"
        texto="Do lead encontrado ao contrato fechado, com valores por etapa."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Instrumento rotulo="Leads encontrados" valor={fmt(encontrados)} />
        <Instrumento rotulo="Taxa de conversão" valor={`${taxaConversao}%`} nota={`${fechado.qtd} fechados`} />
        <Instrumento rotulo="Valor em pipeline" valor={fmtBRL(valorTotal)} />
      </div>

      <Placa titulo="Etapas do funil">
        <div className="flex flex-col gap-3">
          {funil.map((etapa, i) => {
            const largura = Math.max(8, Math.round((etapa.qtd / encontrados) * 100))
            return (
              <div key={etapa.etapa}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">
                    {i + 1}. {etapa.etapa}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {fmt(etapa.qtd)} {etapa.valor > 0 ? `· ${fmtBRL(etapa.valor)}` : ''}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${largura}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </Placa>
    </>
  )
}
