import * as Dialog from '@radix-ui/react-dialog'
import { PlusIcon } from 'lucide-react'

import { Activities } from './activities'
import { CreateActivityModal } from './create-activity-modal'
import { DestinationAndDateHeader } from './destination-and-date-header'
import { Guests } from './guests'
import { ImportantLinks } from './important-links'

export function TripDetailsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <DestinationAndDateHeader />

      <main className="grid-cols-main grid gap-16 px-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
                  <PlusIcon className="size-5" />
                  Cadastrar atividade
                </button>
              </Dialog.Trigger>

              <CreateActivityModal />
            </Dialog.Root>
          </div>

          <Activities />
        </div>

        <div className="space-y-6">
          <ImportantLinks />
          <div className="h-px w-full bg-zinc-800" />
          <Guests />
        </div>
      </main>
    </div>
  )
}
