import { CircleDashedIcon, UserCogIcon } from 'lucide-react'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="max-w-60 space-y-1.5">
            <span className="font-medium">Jessica White</span>
            <span className="block truncate text-sm text-zinc-400">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashedIcon className="size-5 text-zinc-400" />
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-60 space-y-1.5">
            <span className="font-medium">Dr. Rita Pacocha</span>
            <span className="block truncate text-sm text-zinc-400">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          <CircleDashedIcon className="size-5 text-zinc-400" />
        </div>
      </div>

      <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
        <UserCogIcon className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  )
}
