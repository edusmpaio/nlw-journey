import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRightIcon, UserRoundPlusIcon } from 'lucide-react'
import { FormEvent } from 'react'

import { ConfirmTripModal } from '../confirm-trip-modal'
import { InviteGuestsModal } from '../invite-guests-modal'

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  removeEmailToInvite: (emailToRemove: string) => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsStep({
  emailsToInvite,
  removeEmailToInvite,
  addNewEmailToInvite,
  createTrip,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center justify-between gap-5 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button" className="flex items-center gap-2">
            <UserRoundPlusIcon className="size-5 text-zinc-400" />
            {emailsToInvite.length > 0 ? (
              <span className="text-left text-lg text-zinc-100">
                {emailsToInvite.length} pessoa(s) convidada(s)
              </span>
            ) : (
              <span className="text-left text-lg text-zinc-400">
                Quem estará na viagem?
              </span>
            )}
          </button>
        </Dialog.Trigger>

        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          removeEmailToInvite={removeEmailToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
        />
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            disabled={emailsToInvite.length < 1}
            className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 enabled:hover:bg-lime-400 disabled:opacity-60"
          >
            Confirmar viagem
            <ArrowRightIcon className="size-5" />
          </button>
        </Dialog.Trigger>

        <ConfirmTripModal createTrip={createTrip} />
      </Dialog.Root>
    </div>
  )
}
