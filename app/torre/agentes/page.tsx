import { agentes } from '@/lib/data'
import { Proa, Placa, SeloEstado } from '@/components/torre/pecas'

export default function AgentesPage() {
  return (
    <>
      <Proa
        sobre="AG · Agentes"
        titulo="Frota de agentes de IA"
        texto="Cada agente com sua ficha completa: ferramentas, entrega esperada e o comando pronto para acionar."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {agentes.map((a) => (
          <Placa key={a.id} className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{a.codigo}</p>
                <h3 className="text-lg font-semibold">{a.nome}</h3>
                <p className="text-sm text-muted-foreground">{a.papel}</p>
              </div>
              <SeloEstado estado={a.estado} />
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-background/40 p-3 text-xs">
              <div>
                <p className="text-muted-foreground">Tarefa atual</p>
                <p className="mt-1 font-medium">{a.tarefa}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Tempo / métrica</p>
                <p className="mt-1 font-mono">{a.tempo} · {a.metrica}</p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Ferramentas</p>
              <div className="flex flex-wrap gap-1.5">
                {a.ferramentas.map((f) => (
                  <span key={f} className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">Entrega</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.entrega}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Como funciona</p>
              {a.pontos.map(([titulo, texto]) => (
                <div key={titulo} className="text-sm">
                  <span className="font-medium">{titulo}</span>{' '}
                  <span className="text-muted-foreground">{texto}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-background/40 p-3">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Antes de acionar, informe</p>
              <p className="mt-1 text-sm text-muted-foreground">{a.pedeAntes}</p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-3">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">Comando</p>
              <p className="font-mono text-xs leading-relaxed text-foreground">{a.comando}</p>
            </div>
          </Placa>
        ))}
      </div>
    </>
  )
}
