import 'react-day-picker/dist/style.css'

import * as Dialog from '@radix-ui/react-dialog'
import { format } from 'date-fns'
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
  XIcon,
} from 'lucide-react'
import { useContext } from 'react'
import { DayPicker } from 'react-day-picker'

import { Button } from '../../../components/button'
import { Input } from '../../../components/input'
import { CreateTripContext } from '..'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  const { setDestination, setEventStartAndEndDates, eventStartAndEndDates } =
    useContext(CreateTripContext)

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(' até ')
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null

  return (
    <div className="flex h-16 items-center gap-5 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="h-full flex-1">
        <Input
          type="text"
          icon={MapPinIcon}
          variant="transparent"
          placeholder="Para onde você vai?"
          className="text-lg"
          disabled={isGuestsInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            disabled={isGuestsInputOpen}
            className="flex w-60 items-center gap-2 text-left"
          >
            <CalendarIcon className="size-5 text-zinc-400" />
            <span className="w-40 flex-1 text-lg text-zinc-400">
              {displayedDate || 'Quando?'}
            </span>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60" />

          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 space-y-5 rounded-xl bg-zinc-900 px-6 py-5 text-zinc-50">
            <div className="flex items-start justify-between">
              <Dialog.Title className="text-lg font-semibold text-zinc-50">
                Selecionar data
              </Dialog.Title>

              <Dialog.Close>
                <XIcon className="size-5 text-zinc-400" />
              </Dialog.Close>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2Icon className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRightIcon className="size-5" />
        </Button>
      )}
    </div>
  )
}
