import * as Dialog from '@radix-ui/react-dialog'
import { Link2Icon, TagIcon, XIcon } from 'lucide-react'
import { FormEvent } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { api } from '../../lib/axios'

export function RegisterImportantLinkModal() {
  const { tripId } = useParams()

  async function registerImportantLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
    })

    window.document.location.reload()
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
              Cadastrar link
            </Dialog.Title>

            <Dialog.Close>
              <XIcon className="size-5 text-zinc-400" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </Dialog.Description>
        </div>

        <form onSubmit={registerImportantLink}>
          <div className="space-y-2">
            <Input
              type="text"
              name="title"
              icon={TagIcon}
              placeholder="Título do link"
            />

            <Input type="text" name="url" icon={Link2Icon} placeholder="URL" />
          </div>

          <Button type="submit" size="full" className="mt-3">
            Salvar link
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
