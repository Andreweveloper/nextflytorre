import { campanhas, regrasTrafego, fmtBRL } from '@/lib/data'
import { Proa, Placa, Instrumento, SeloVeredito } from '@/components/torre/pecas'

export default function TrafegoPage() {
  const gastoTotal = campanhas.reduce((acc, c) => acc + c.gasto, 0)
  const convTotal = campanhas.reduce((acc, c) => acc + c.conv, 0)
  const cpaMedio = gastoTotal / convTotal

  return (
    <>
      <Proa
        sobre="TF · Tráfego"
        titulo="Decisões de campanha"
        texto="Vereditos guiados pelas regras de escala da casa — nunca no achismo."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Instrumento rotulo="Gasto total" valor={fmtBRL(gastoTotal)} />
        <Instrumento rotulo="Conversões" valor={String(convTotal)} />
        <Instrumento rotulo="CPA médio" valor={`R$ ${cpaMedio.toFixed(1)}`} />
      </div>

      <Placa titulo="Campanhas" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Campanha</th>
                <th className="pb-2 pr-4 font-medium">Gasto</th>
                <th className="pb-2 pr-4 font-medium">Conv.</th>
                <th className="pb-2 pr-4 font-medium">CPA</th>
                <th className="pb-2 pr-4 font-medium">CVR</th>
                <th className="pb-2 pr-4 font-medium">Dias</th>
                <th className="pb-2 font-medium">Veredito</th>
              </tr>
            </thead>
            <tbody>
              {campanhas.map((c) => (
                <tr key={c.nome} className="border-b border-border/60 last:border-0">
                  <td className="py-2.5 pr-4 font-medium">{c.nome}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{fmtBRL(c.gasto)}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{c.conv}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">R$ {c.cpa.toFixed(1)}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{c.cvr}%</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{c.dias}d</td>
                  <td className="py-2.5">
                    <SeloVeredito veredito={c.veredito} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Placa>

      <Placa titulo="Regras de escala">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {regrasTrafego.map((r) => (
            <div key={r.n} className="flex gap-3 rounded-xl border border-border bg-background/40 p-3">
              <span className="font-mono text-lg font-semibold text-primary">{r.n}</span>
              <div>
                <p className="text-sm font-medium">{r.nome}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{r.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </Placa>
    </>
  )
}
