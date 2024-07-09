import { ArrowRightIcon, CalendarIcon, MapPinIcon } from 'lucide-react'

export function App() {
  return (
    <div className="bg-pattern flex min-h-screen items-center justify-center bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="" />

          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="shadow-shape flex h-16 items-center gap-5 rounded-xl bg-zinc-900 px-4">
          <div className="flex flex-1 items-center gap-2">
            <MapPinIcon className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <CalendarIcon className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Quando?"
              className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
            Continuar
            <ArrowRightIcon className="size-5" />
          </button>
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
