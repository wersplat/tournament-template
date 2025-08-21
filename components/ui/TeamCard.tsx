import Image from 'next/image'
import Link from 'next/link'

export type Team = {
  slug: string
  name: string
  logo?: string
  record?: string
}

export function TeamCard({ team, tournamentSlug }: { team: Team; tournamentSlug: string }) {
  return (
    <Link
      href={`/${tournamentSlug}/teams/${team.slug}` as any}
      className="block rounded-lg border border-[color:var(--muted)]/20 bg-[var(--card)] p-4 hover:border-[color:var(--primary)]/40 transition"
    >
      <div className="flex items-center gap-3">
        {team.logo ? (
          <Image src={team.logo} alt="" width={40} height={40} className="rounded" />
        ) : (
          <div className="w-10 h-10 rounded bg-black/30" />
        )}
        <div>
          <div className="font-medium text-[color:var(--fg)]">{team.name}</div>
          {team.record && <div className="text-xs text-[color:var(--muted)]">{team.record}</div>}
        </div>
      </div>
    </Link>
  )
}
