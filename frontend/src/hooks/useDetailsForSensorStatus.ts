import { SensorStatus } from '@green-ecolution/backend-client'

const SensorStatusProperties = {
  [SensorStatus.SensorStatusUnknown]: {
    color: 'dark-400',
    label: 'Unbekannt',
    description: 'Der Status ist unbekannt.',
  },
  [SensorStatus.SensorStatusOffline]: {
    color: 'red',
    label: 'Offline',
    description: 'Einige Sensoren haben Probleme und benötigen eine Wartung.',
  },
  [SensorStatus.SensorStatusOnline]: {
    color: 'green-light',
    label: 'Online',
    description: 'Alle Sensoren sind online und können Daten senden.',
  },
} as const

type SensorStatusDetails = (typeof SensorStatusProperties)[SensorStatus]

export const getSensorStatusDetails = (
  status: SensorStatus
): SensorStatusDetails => {
  return SensorStatusProperties[status]
}
