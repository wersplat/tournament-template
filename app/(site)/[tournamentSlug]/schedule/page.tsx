import { getSchedule } from '@/lib/api/queries'
import { ScheduleClient } from '@/components/schedule/ScheduleClient'

export const revalidate = 60

export default async function SchedulePage({ params }: { params: Promise<{ tournamentSlug: string }> }) {
  const { tournamentSlug } = await params
  const data = await getSchedule(tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Schedule</h1>
      {/* Client wrapper allows filters and view toggles */}
      <ScheduleClient data={data as any} />
    </div>
  )
}
