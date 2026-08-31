import { TorreShell } from '@/components/torre/torre-shell'

export default function TorreLayout({ children }: { children: React.ReactNode }) {
  return <TorreShell>{children}</TorreShell>
}
