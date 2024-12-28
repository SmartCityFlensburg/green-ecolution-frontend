import { vehicleQuery } from '@/api/queries'
import { useSuspenseQuery } from '@tanstack/react-query'
import { z } from 'zod'

export const WateringPlanSchema = () => {
  const { data: transporters } = useSuspenseQuery(
    vehicleQuery({
      type: 'transporter',
    })
  )
  const { data: trailers } = useSuspenseQuery(
    vehicleQuery({
      type: 'trailer',
    })
  )

  return z.object({
    date: z.preprocess(
      (value) => {
        if (typeof value === 'string') {
          return new Date(value)
        }
        return value
      },
      z
        .date({
          required_error: 'Datum ist erforderlich.',
          invalid_type_error: 'Format inkorrekt.',
        })
        .refine((data) => data > new Date(), {
          message: 'Datum muss in der Zukunft liegen',
        })
    ),
    description: z.string().optional().default(''),
    //treeClusterIds: z.array(z.number()).default([]),
    transporterId: z.preprocess(
      (value) => parseInt(value as string, 10),
      z
        .number()
        .refine((value) =>
          transporters.data.some((transporter) => transporter.id === value)
        )
    ),
    trailerId: z
      .preprocess(
        (value) => parseInt(value as string, 10),
        z
          .number()
          .refine((value) =>
            trailers.data.some((trailer) => trailer.id === value)
          )
          .optional()
      )
      .or(z.literal('-1').or(z.literal(-1))),
  })
}

export type WateringPlanForm = z.infer<ReturnType<typeof WateringPlanSchema>>
