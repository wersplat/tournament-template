import { getSchedule } from '@/lib/api/queries'
import { MatchList } from '@/components/composition/MatchList'

export const revalidate = 60

export default async function SchedulePage({ params }: { params: { tournamentSlug: string } }) {
  const data = await getSchedule(params.tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Schedule</h1>
      <MatchList data={data} />
    </div>
  )
}
