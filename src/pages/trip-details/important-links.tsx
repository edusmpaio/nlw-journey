import * as Dialog from '@radix-ui/react-dialog'
import { Link2Icon, PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../lib/axios'
import { RegisterImportantLinkModal } from './register-important-link-modal'

interface Link {
  id: string
  title: string
  url: string
}

export function ImportantLinks() {
  const { tripId } = useParams()
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>

      <div className="space-y-5">
        {links.length === 0 && (
          <span className="text-sm text-zinc-500">
            Nenhum link importante cadastrado.
          </span>
        )}
        {links.map((link) => (
          <div key={link.id} className="flex items-center justify-between">
            <div className="max-w-60 space-y-1.5">
              <span className="font-medium">{link.title}</span>
              <a
                href={link.url}
                className="block truncate text-xs text-zinc-400 hover:text-zinc-300"
                target="_blank"
                rel="noreferrer"
              >
                {link.url}
              </a>
            </div>
            <Link2Icon className="size-5 text-zinc-400" />
          </div>
        ))}
      </div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button size="full" variant="secondary">
            <PlusIcon className="size-5" />
            Cadastrar novo link
          </Button>
        </Dialog.Trigger>

        <RegisterImportantLinkModal />
      </Dialog.Root>
    </div>
  )
}
