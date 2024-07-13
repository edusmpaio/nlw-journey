import * as Dialog from '@radix-ui/react-dialog'
import {
  ArrowRightIcon,
  AtSignIcon,
  CalendarIcon,
  MailIcon,
  MapPinIcon,
  PlusIcon,
  Settings2Icon,
  UserIcon,
  UserRoundPlusIcon,
  XIcon,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite((state) => [...state, email])
    event.currentTarget.reset()
  }

  function removeEmailToInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )
    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="" />

          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex h-16 items-center gap-5 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPinIcon className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai?"
                className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="flex items-center gap-2">
              <CalendarIcon className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="h-6 w-px bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2Icon className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Continuar
                <ArrowRightIcon className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
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
                        Os convidados irão receber e-mails para confirmar a
                        participação na viagem.
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
                      <AtSignIcon className="size-5 text-zinc-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Digite o e-mail do convidado"
                        className="flex-1 bg-transparent text-base leading-[140%] text-zinc-100 placeholder-zinc-400 outline-none"
                      />
                      <button
                        type="submit"
                        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
                      >
                        Convidar
                        <PlusIcon className="size-5" />
                      </button>
                    </form>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
                    Confirmar viagem
                    <ArrowRightIcon className="size-5" />
                  </button>
                </Dialog.Trigger>

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

                    <form>
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

                      <button
                        type="submit"
                        className="mt-3 flex h-11 w-full items-center justify-center rounded-lg bg-lime-300 font-medium text-lime-950 hover:bg-lime-400"
                      >
                        Confirmar criação da viagem
                      </button>
                    </form>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos{' '}
          <a href="#" className="text-zinc-300 underline underline-offset-2">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline underline-offset-2">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  )
}
