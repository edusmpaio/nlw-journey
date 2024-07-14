import * as Dialog from '@radix-ui/react-dialog'
import { AtSignIcon, PlusIcon, XIcon } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'

interface InviteGuestsModalProps {
  emailsToInvite: string[]
  removeEmailToInvite: (emailToRemove: string) => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal({
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 space-y-5 rounded-xl bg-zinc-900 p-5"
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg font-semibold text-zinc-50">
              Selecionar convidados
            </Dialog.Title>

            <Dialog.Close>
              <XIcon className="size-5 text-zinc-400" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </Dialog.Description>
        </div>

        {emailsToInvite.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {emailsToInvite.map((email) => (
              <span
                key={email}
                className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5 text-zinc-300"
              >
                {email}
                <button
                  type="button"
                  onClick={() => removeEmailToInvite(email)}
                >
                  <XIcon className="size-4 text-zinc-400" />
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950 py-2.5 pl-4 pr-2.5"
        >
          <div className="flex-1">
            <Input
              icon={AtSignIcon}
              variant="transparent"
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
            />
          </div>
          <Button type="submit">
            Convidar
            <PlusIcon className="size-5" />
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
