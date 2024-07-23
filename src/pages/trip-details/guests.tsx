import * as Dialog from '@radix-ui/react-dialog'
import { CircleCheckIcon, CircleDashedIcon, UserCogIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../lib/axios'
import { ManageGuestsModal } from './manage-guests-modal'

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        {participants?.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between"
          >
            <div className="max-w-60 space-y-1.5">
              <span className="block truncate font-medium">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block truncate text-sm text-zinc-400">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CircleCheckIcon className="size-5 text-lime-300" />
            ) : (
              <CircleDashedIcon className="size-5 text-zinc-400" />
            )}
          </div>
        ))}
      </div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button size="full" variant="secondary">
            <UserCogIcon className="size-5" />
            Gerenciar convidados
          </Button>
        </Dialog.Trigger>

        <ManageGuestsModal />
      </Dialog.Root>
    </div>
  )
}
