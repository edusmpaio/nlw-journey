import { CircleDashedIcon, UserCogIcon } from 'lucide-react'

import { Button } from '../../components/button'

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

      <Button size="full" variant="secondary">
        <UserCogIcon className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
