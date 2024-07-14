import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
} from 'lucide-react'

import { Button } from '../../../components/button'
import { Input } from '../../../components/input'

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
        />
      </div>

      <Input
        type="text"
        icon={CalendarIcon}
        variant="transparent"
        placeholder="Quando?"
        className="w-40 text-lg"
        disabled={isGuestsInputOpen}
      />

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
