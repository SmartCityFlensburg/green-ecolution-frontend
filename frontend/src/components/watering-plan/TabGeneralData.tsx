import {
  WateringPlan,
  WateringPlanStatus,
} from '@green-ecolution/backend-client'
import DetailedList from '../general/DetailedList'
import { format } from 'date-fns'
import GeneralStatusCard from '../general/cards/GeneralStatusCard'
import EntitiesStatusCard from '../general/cards/EntitiesStatusCard'
import { getWateringPlanStatusDetails } from '@/hooks/useDetailsForWateringPlanStatus'
import { useSuspenseQuery } from '@tanstack/react-query'
import { userQuery } from '@/api/queries'

interface TabGeneralDataProps {
  wateringPlan?: WateringPlan
}

const TabGeneralData: React.FC<TabGeneralDataProps> = ({ wateringPlan }) => {
  const userIdsString = wateringPlan?.userIds?.join(',') || ''
  const { data: userRes } = useSuspenseQuery(userQuery({ userIds: userIdsString }))
  
  const updatedDate = wateringPlan?.updatedAt
    ? format(new Date(wateringPlan.updatedAt), 'dd.MM.yyyy')
    : 'Keine Angabe'

  const wateringPlanData = [
    {
      label: 'Länge der Route',
      value: wateringPlan?.distance
        ? `${wateringPlan.distance} km`
        : 'Keine Angabe',
    },
    {
      label: 'Startpunkt',
      value: 'Schleswiger Straße, Hauptzentrale',
    },
    {
      label: 'Benötigte Liter Wasser',
      value: wateringPlan?.totalWaterRequired
        ? `${wateringPlan.totalWaterRequired} Liter`
        : 'Keine Angabe',
    },
    {
      label: 'Transporter',
      value: wateringPlan?.transporter
        ? wateringPlan.transporter.numberPlate
        : 'Keine Angabe',
    },
    {
      label: 'Zusätzlicher Anhänger',
      value: wateringPlan?.trailer
        ? wateringPlan.trailer.numberPlate
        : 'Keine Angabe',
    },
    {
      label: 'Anzahl der Bewässerungsgruppen',
      value: wateringPlan?.treeclusters?.length
        ? `${wateringPlan.treeclusters.length} Gruppe(n)`
        : 'Keine Angabe',
    },
    {
      label: 'Eingeteilte Mitarbeitende',
      value: userRes?.data?.length
        ? userRes.data.map((user) => `${user.firstName} ${user.lastName}`).join(', ')
        : 'Keine Angabe',
    },    
    {
      label: 'Zuletzt geupdated',
      value: updatedDate,
    },
  ]

  return (
    <>
      <ul className="space-y-5 md:space-y-0 md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <EntitiesStatusCard
            statusDetails={getWateringPlanStatusDetails(
              wateringPlan?.status ??
                WateringPlanStatus.WateringPlanStatusUnknown
            )}
            label="Aktueller Status des Einsatzes"
            hasPill
          />
        </li>
        {wateringPlan?.status ===
          WateringPlanStatus.WateringPlanStatusCanceled &&
          wateringPlan.cancellationNote && (
            <li>
              <div className="h-full space-y-3 bg-dark-50 rounded-xl p-6">
                <h2 className="text-sm text-dark-700 font-medium">
                  Notiz zum Abbruch
                </h2>
                <p className="text-sm">{wateringPlan.cancellationNote}</p>
              </div>
            </li>
          )}
        <li>
          <GeneralStatusCard
            overline="Länge der Route"
            value={`${wateringPlan?.distance} km`}
            isLarge
            description="Einsatz startet in der Schleswiger Straße"
          />
        </li>
      </ul>

      <section className="mt-16">
        <DetailedList
          headline="Daten zur Einsatzplanung"
          details={wateringPlanData}
        />
      </section>
    </>
  )
}

export default TabGeneralData
