import { Link2Icon, PlusIcon } from 'lucide-react'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="max-w-60 space-y-1.5">
            <span className="font-medium">Reserva do AirBnB</span>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 hover:text-zinc-300"
              target="_blank"
              rel="noreferrer"
            >
              https://www.airbnb.com.br/rooms/1047000112121
            </a>
          </div>
          <Link2Icon className="size-5 text-zinc-400" />
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-60 space-y-1.5">
            <span className="font-medium">Regras da casa</span>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 hover:text-zinc-300"
              target="_blank"
              rel="noreferrer"
            >
              https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
            </a>
          </div>
          <Link2Icon className="size-5 text-zinc-400" />
        </div>
      </div>

      <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
        <PlusIcon className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  )
}
