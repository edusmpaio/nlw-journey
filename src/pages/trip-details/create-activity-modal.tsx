import * as Dialog from '@radix-ui/react-dialog'
import { CalendarIcon, TagIcon, XIcon } from 'lucide-react'

export function CreateActivityModal() {
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
              Cadastrar atividade
            </Dialog.Title>

            <Dialog.Close>
              <XIcon className="size-5 text-zinc-400" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades.
          </Dialog.Description>
        </div>

        <form>
          <div className="space-y-2">
            <div className="flex h-14 items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
              <TagIcon className="size-5 text-zinc-400" />
              <input
                type="text"
                name="title"
                placeholder="Qual a atividade?"
                className="flex-1 bg-transparent text-base leading-[140%] text-zinc-100 placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="flex h-14 flex-1 items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
              <CalendarIcon className="size-5 text-zinc-400" />
              <input
                id="occurs_at"
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horário da atividade"
                className="flex-1 bg-transparent text-base leading-[140%] text-zinc-100 placeholder-zinc-400 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 flex h-11 w-full items-center justify-center rounded-lg bg-lime-300 font-medium text-lime-950 hover:bg-lime-400"
          >
            Salvar atividade
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
