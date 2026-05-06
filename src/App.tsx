import { useMemo, useState } from "react"
import { HabitForm } from "./components/habitform"
import { HabitList } from "./components/habitlist"
import { Header } from "./components/Header"
import { HabitProvider } from "./context/HabitProvider"
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns"

export default function App() {
  const [weekOffset, setWeekOffset] = useState(0)

  const visibleDates = useMemo(() => {
    const week = addWeeks(new Date(), weekOffset)

    return eachDayOfInterval({
      start: startOfWeek(week, { weekStartsOn: 1 }),
      end: endOfWeek(week, { weekStartsOn: 1 }),
    })
  }, [weekOffset])

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
        <HabitProvider>
          <Header
            visibleDates={visibleDates}
            onNext={() => setWeekOffset(o => o + 1)}
            onPrev={() => setWeekOffset(o => o - 1)}
          />
          <HabitForm />
          <HabitList visibleDates={visibleDates} />
        </HabitProvider>
      </div>
    </div>
  )
}