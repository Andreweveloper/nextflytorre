# Nextfly Torre

Centro de operações da Nextfly — um painel único onde a equipe acompanha agentes de IA, prospecção de comércios sem site, o status do site institucional, o funil de CRM e as decisões de tráfego pago.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui + Lucide React
- pnpm

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# instala o pnpm, se ainda não tiver
npm install -g pnpm

# instala as dependências do projeto
pnpm install

# sobe o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A landing page dá acesso à Torre em `/torre`.

## Estrutura

```
app/
  page.tsx              → Landing page
  torre/
    layout.tsx           → Shell com sidebar e header, comum a todos os setores
    page.tsx             → Dashboard geral (resumo de cada setor)
    agentes/page.tsx      → Frota de agentes de IA
    prospeccao/page.tsx   → Leads e cidades sem site no litoral de SC
    site/page.tsx         → Estado das páginas do nextfly.com.br
    crm/page.tsx          → Funil de vendas
    trafego/page.tsx      → Campanhas e regras de escala de budget

components/
  torre/
    torre-shell.tsx       → Navegação lateral entre os setores
    pecas.tsx              → Peças de UI reutilizáveis (Placa, Proa, Instrumento, selos de estado)
  ui/
    button.tsx             → Botão base do shadcn/ui

lib/
  data.ts                 → Toda a camada de dados (agentes, leads, campanhas, funil, etc.)
  utils.ts                → Helper cn() para classes Tailwind
```

## Setores

| Rota | O que mostra |
|---|---|
| `/torre` | Visão geral com um resumo de cada setor |
| `/torre/agentes` | Ficha de cada agente de IA — ferramentas, entrega e comando pronto para copiar |
| `/torre/prospeccao` | Comércios sem site, agrupados por cidade, com a situação de cada lead |
| `/torre/site` | Estado (ativo / espera / parado) de cada página do site |
| `/torre/crm` | Funil de vendas, do lead encontrado ao contrato fechado |
| `/torre/trafego` | Vereditos de campanha (escalar / manter / aguardar / matar) e as regras de escala da casa |

## Dados

Por enquanto todos os dados em `lib/data.ts` são estáticos (mock) — não há API nem banco de dados conectado. É o ponto de partida natural para uma futura integração.

## Scripts

```bash
pnpm dev     # ambiente de desenvolvimento
pnpm build   # build de produção
pnpm start   # roda o build de produção
```
