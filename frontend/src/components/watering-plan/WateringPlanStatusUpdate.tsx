import BackLink from '../general/links/BackLink'
import {
  WateringPlanStatus,
  WateringStatus,
} from '@green-ecolution/backend-client'
import { useInitFormQuery } from '@/hooks/form/useInitForm'
import { wateringPlanIdQuery } from '@/api/queries'
import { format } from 'date-fns'
import PrimaryButton from '../general/buttons/PrimaryButton'
import FormError from '../general/form/FormError'
import Select from '../general/form/types/Select'
import {
  getWateringPlanStatusDetails,
  WateringPlanStatusOptions,
} from '@/hooks/details/useDetailsForWateringPlanStatus'
import Pill from '../general/Pill'
import Textarea from '../general/form/types/Textarea'
import { useWaterinPlanForm } from '@/hooks/form/useWateringPlanForm'
import { useFormSync } from '@/hooks/form/useFormSync'
import {
  WateringPlanForm,
  WateringPlanSchema,
} from '@/schema/wateringPlanSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler } from 'react-hook-form'
import { getWateringStatusDetails } from '@/hooks/useDetailsForWateringStatus'
import Input from '../general/form/types/Input'

interface WateringPlanStatusUpdateProps {
  wateringPlanId: string
}

const WateringPlanStatusUpdate = ({
  wateringPlanId,
}: WateringPlanStatusUpdateProps) => {
  const { mutate, isError, error } = useWaterinPlanForm(
    'update',
    wateringPlanId
  )
  const { initForm, loadedData } = useInitFormQuery(
    wateringPlanIdQuery(wateringPlanId),
    (data) => ({
      date: new Date(data.date),
      description: data.description,
      transporterId: data.transporter.id,
      trailerId: data.trailer?.id,
      treeClusterIds: data.treeclusters.map((cluster) => cluster.id),
      status: data.status,
      cancellationNote: data.cancellationNote,
      userIds: data.userIds,
      evaluation: data.treeclusters?.map(cluster => ({
        consumedWater: (cluster.treeIds?.length ?? 0) * 120,
        treeClusterId: cluster.id,
        wateringPlanId: Number(wateringPlanId),
      })),
    })
  )

  const date = loadedData?.date
    ? format(new Date(loadedData?.date), 'dd.MM.yyyy')
    : 'Keine Angabe'
  const statusDetails = getWateringPlanStatusDetails(loadedData?.status)

  const { register, handleSubmit, formState, watch } =
    useFormSync<WateringPlanForm>(
      initForm,
      zodResolver(WateringPlanSchema(false))
    )
  console.log("initForm:", initForm);

  const onSubmit: SubmitHandler<WateringPlanForm> = async (data) => {
    const evaluation = loadedData?.treeclusters.map((cluster, index) => ({
      consumedWater: data.evaluation[index].consumedWater,
      treeClusterId: cluster.id,
      wateringPlanId: Number(wateringPlanId),
    }))

    mutate({
      ...data,
      date: data.date.toISOString(),
      trailerId:
        data.trailerId && data.trailerId !== -1 ? data.trailerId : undefined,
      evaluation: evaluation
    })
  }

  const selectedStatus = watch('status')

  console.log("Treeclusters:", loadedData?.treeclusters);
  console.log("Evaluation:", loadedData?.evaluation); // Why is this empty? Shouldnt there be something in it?

  return (
    <>
      <article className="2xl:w-4/5">
        <BackLink
          label="Zurück zum Einsatzplan"
          link={{
            to: `/watering-plans/$wateringPlanId`,
            params: { wateringPlanId: wateringPlanId?.toString() },
          }}
        />
        <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
          Status vom Einsatzplan {date} bearbeiten
        </h1>
        <p className="space-x-3 mb-5">
          <strong>Aktueller Status:</strong>
          <Pill
            label={statusDetails?.label ?? 'Keine Angabe'}
            theme={statusDetails?.color ?? 'dark-400'}
          />
        </p>
        <p>
          Der Status eines Einsatzes beschreibt, ob er Einsatz beispielsweise
          aktiv ausgeführt wird, beendet ist oder abgebrochen wurde. Diese
          Angabe hilft dabei die erstellen Einsätze zu kategorisieren und eine
          Auswertung anzulegen. Sobald ein Einsatz beendet wird, kann zudem
          angegeben werden, mit wie viel Wasser die zugehörigen
          Bewässerungsgruppen bewässert wurden.
        </p>
      </article>

      <section className="mt-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6 lg:w-1/2">
            <Select
              options={WateringPlanStatusOptions}
              placeholder="Wählen Sie einen Status aus"
              label="Status des Einsatzes"
              required
              error={formState.errors.status?.message}
              {...register('status')}
            />
            {selectedStatus ===
              WateringPlanStatus.WateringPlanStatusCanceled && (
                <Textarea
                  placeholder="Warum wurde der Einsatz abgebrochen?"
                  label="Grund des Abbruchs"
                  error={formState.errors.cancellationNote?.message}
                  {...register('cancellationNote')}
                />
              )}
            {selectedStatus ===
              WateringPlanStatus.WateringPlanStatusFinished && (
                <div className="space-y-3">
                  {loadedData?.treeclusters?.map((cluster, index) => (
                    <div key={cluster.id} className="flex items-center gap-x-4">
                      <div className="w-full flex justify-between gap-x-6 bg-white border border-dark-50 shadow-cards px-4 py-3 rounded-lg">
                        <h3
                          className={`relative font-medium pl-7 before:absolute before:w-4 before:h-4 before:rounded-full before:left-0 before:top-[0.22rem] before:bg-${getWateringStatusDetails(
                            cluster.wateringStatus ?? WateringStatus.WateringStatusUnknown,
                          ).color}`}
                        >
                          <strong className="font-semibold">Bewässerungsgruppe:</strong> {cluster.name} ·{" "}
                          {cluster.id}
                        </h3>
                      </div>
                      <div className="flex items-center">
                        <Input
                          error={formState.errors.evaluation?.[index]?.consumedWater?.message}
                          {...register(`evaluation.${index}.consumedWater`)}
                        />
                        <span className="ml-2">Liter</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>

          <FormError
            show={isError}
            error={error?.message}
          />

          <PrimaryButton
            type="submit"
            label="Speichern"
            disabled={!formState.isValid}
            className="mt-10"
          />
        </form>
      </section>
    </>
  )
}

export default WateringPlanStatusUpdate
