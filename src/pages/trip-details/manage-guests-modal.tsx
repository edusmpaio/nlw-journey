import * as Dialog from '@radix-ui/react-dialog'
import { AtSignIcon, LoaderCircleIcon, XIcon } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { api } from '../../lib/axios'

export function ManageGuestsModal() {
  const { tripId } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  async function inviteNewParticipant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    try {
      setIsLoading(true)
      await api.post(`/trips/${tripId}/invites`, {
        email,
      })

      window.document.location.reload()
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-[540px] -translate-x-1/2 -translate-y-1/2 space-y-5 rounded-xl bg-zinc-900 p-5"
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg font-semibold text-zinc-50">
              Gerenciar Convidados
            </Dialog.Title>

            <Dialog.Close>
              <XIcon className="size-5 text-zinc-400" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-zinc-400">
            Adicione um novo convidado para a viagem.
          </Dialog.Description>
        </div>

        <form onSubmit={inviteNewParticipant}>
          <Input
            type="email"
            name="email"
            icon={AtSignIcon}
            placeholder="Digite o e-mail do novo convidado"
          />

          <Button
            type="submit"
            size="full"
            className="mt-3"
            disabled={isLoading}
          >
            {isLoading ? (
              <LoaderCircleIcon className="size-5 animate-spin" />
            ) : (
              'Adicionar'
            )}
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
