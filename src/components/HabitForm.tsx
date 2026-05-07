import { useState, type FormEvent } from "react"
import { Button } from "./Button"
import { useHabits } from "../context/useHabits"

export function HabitForm() {
  const [name, setName] = useState("")
  const { addHabit } = useHabits()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (name.trim() === "") return
    setName("")
    addHabit(name)
  }

  return (
    <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        className="flex-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white placeholder-white/50 outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:border-white/50"
        placeholder="New habit..."
      />
      <Button
        type="submit"
        disabled={name.trim() === ""}
        className="rounded-lg px-4 py-2 font-medium"
      >
        Add Habit
      </Button>
    </form>
  )
}