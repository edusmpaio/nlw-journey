import * as Dialog from '@radix-ui/react-dialog'
import { CalendarIcon, TagIcon, XIcon } from 'lucide-react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'

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
            <Input
              type="text"
              name="title"
              icon={TagIcon}
              placeholder="Qual a atividade?"
            />

            <Input
              icon={CalendarIcon}
              id="occurs_at"
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
            />
          </div>

          <Button type="submit" size="full" className="mt-3">
            Salvar atividade
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
