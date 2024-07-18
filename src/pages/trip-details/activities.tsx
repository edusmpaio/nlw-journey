import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CircleCheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../lib/axios'

interface Acitivity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities() {
  const { tripId } = useParams()
  const [acitivities, setAcitivities] = useState<Acitivity[]>([])

  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then((response) => setAcitivities(response.data.activities))
  }, [tripId])

  return (
    <div className="space-y-8">
      {acitivities.map((category) => (
        <div key={category.date} className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-300">
              Dia {format(category.date, 'd')}
            </span>
            <span className="text-xs text-zinc-500">
              {format(category.date, 'EEEE', { locale: ptBR })}
            </span>
          </div>
          {category.activities.length > 0 ? (
            <div className="space-y-3">
              {category.activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape"
                >
                  <CircleCheckIcon className="size-5 text-lime-300" />
                  <span className="text-zinc-100">{activity.title}</span>
                  <span className="ml-auto text-sm text-zinc-400">
                    {format(activity.occurs_at, 'HH:mm')}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500">
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
