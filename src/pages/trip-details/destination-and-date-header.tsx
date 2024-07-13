import { CalendarIcon, MapPinIcon, Settings2Icon } from 'lucide-react'

export function DestinationAndDateHeader() {
  return (
    <header className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <CalendarIcon className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 a 23 de Agosto</span>
        </div>

        <div className="h-6 w-px bg-zinc-800" />

        <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700">
          Alterar local/data
          <Settings2Icon className="size-5" />
        </button>
      </div>
    </header>
  )
}
