import * as Dialog from '@radix-ui/react-dialog'
import {
  Calendar,
  CalendarIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  Link2Icon,
  MapPinIcon,
  PlusIcon,
  Settings2Icon,
  TagIcon,
  UserCogIcon,
  XIcon,
} from 'lucide-react'

export function TripDetailsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <header className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPinIcon className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700">
            Alterar local/data
            <Settings2Icon className="size-5" />
          </button>
        </div>
      </header>

      <main className="grid-cols-main grid gap-16 px-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
                  <PlusIcon className="size-5" />
                  Cadastrar atividade
                </button>
              </Dialog.Trigger>

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
                        <Calendar className="size-5 text-zinc-400" />
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
            </Dialog.Root>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheckIcon className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Corrida de Kart</span>
                  <span className="ml-auto text-sm text-zinc-400">14:00h</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheckIcon className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Corrida de Kart</span>
                  <span className="ml-auto text-sm text-zinc-400">14:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
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
          <div className="h-px w-full bg-zinc-800" />
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="max-w-60 space-y-1.5">
                  <span className="font-medium">Jessica White</span>
                  <span className="block truncate text-sm text-zinc-400">
                    jessica.white44@yahoo.com
                  </span>
                </div>
                <CircleDashedIcon className="size-5 text-zinc-400" />
              </div>
              <div className="flex items-center justify-between">
                <div className="max-w-60 space-y-1.5">
                  <span className="font-medium">Dr. Rita Pacocha</span>
                  <span className="block truncate text-sm text-zinc-400">
                    lacy.stiedemann@gmail.com
                  </span>
                </div>
                <CircleDashedIcon className="size-5 text-zinc-400" />
              </div>
            </div>

            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
              <UserCogIcon className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
