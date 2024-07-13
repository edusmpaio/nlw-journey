import * as Dialog from '@radix-ui/react-dialog'
import { MailIcon, UserIcon, XIcon } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '../../components/button'

interface ConfirmTripModalProps {
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({ createTrip }: ConfirmTripModalProps) {
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
              Confirmar criação da viagem
            </Dialog.Title>

            <Dialog.Close>
              <XIcon className="size-5 text-zinc-400" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-bold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-bold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </Dialog.Description>
        </div>

        <form onSubmit={createTrip}>
          <div className="space-y-2">
            <div className="flex h-14 items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
              <UserIcon className="size-5 text-zinc-400" />
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className="flex-1 bg-transparent text-base leading-[140%] text-zinc-100 placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="flex h-14 items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
              <MailIcon className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
                className="flex-1 bg-transparent text-base leading-[140%] text-zinc-100 placeholder-zinc-400 outline-none"
              />
            </div>
          </div>

          <Button type="submit" size="full" className="mt-3">
            Confirmar criação da viagem
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
