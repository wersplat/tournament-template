import { getSchedule } from '@/lib/api/queries'
import { ScheduleClient } from '@/components/schedule/ScheduleClient'

export const revalidate = 60

export default async function SchedulePage({ params }: { params: { tournamentSlug: string } }) {
  const data = await getSchedule(params.tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Schedule</h1>
      {/* Client wrapper allows filters and view toggles */}
      <ScheduleClient data={data as any} />
    </div>
  )
}
