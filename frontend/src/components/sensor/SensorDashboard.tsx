import { sensorIdQuery, treeSensorIdQuery } from '@/api/queries'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import EntitiesStatusCard from '@/components/general/cards/EntitiesStatusCard'
import GeneralStatusCard from '@/components/general/cards/GeneralStatusCard'
import BackLink from '@/components/general/links/BackLink'
import GeneralLink from '../general/links/GeneralLink'
import { getSensorStatusDetails } from '@/hooks/useDetailsForSensorStatus'
import { getVoltageQualityDetails } from '@/hooks/useDetailsForSensorBattery'
import { format, formatDistanceToNow } from 'date-fns'
import { de } from 'date-fns/locale'

interface SensorDashboardProps {
  sensorId: string
}

const SensorDashboard = ({ sensorId }: SensorDashboardProps) => {
  // TODO: use real data
  const exampleSensorData = {
    battery: 3.1,
  }

  const { data: sensor } = useSuspenseQuery(sensorIdQuery(sensorId))
  const { data: linkedTree } = useQuery(treeSensorIdQuery(sensorId))

  const createdDate = sensor?.createdAt
    ? format(new Date(sensor?.createdAt), 'dd.MM.yyyy')
    : 'Keine Angabe'
  const updatedDate = sensor?.createdAt
    ? formatDistanceToNow(sensor?.updatedAt, { locale: de })
    : 'Keine Angabe'

  const generalSensorData = [
    {
      label: 'Anzahl verbaute Sensoren',
      value: '3 Sensoren',
    },
    {
      label: 'Erstellt am',
      value: createdDate ?? 'Keine Angabe',
    },
    {
      label: 'Letztes Update',
      value: updatedDate ?? 'Keine Angabe',
    },
    {
      label: 'Latitude',
      value: sensor.latitude ?? 'Keine Angabe',
    },
    {
      label: 'Longitude',
      value: sensor.longitude ?? 'Keine Angabe',
    },
  ]

  return (
    <>
      <BackLink link={{ to: '/sensors' }} label="Zu allen Sensoren" />
      <article className="space-y-6 2xl:space-y-0 2xl:flex 2xl:items-center 2xl:space-x-10">
        <div className="2xl:w-4/5">
          <h1 className="font-lato font-bold text-3xl mb-4 flex flex-wrap items-center gap-4 lg:text-4xl xl:text-5xl">
            Sensor ID: {sensor.id}
          </h1>
          <p>
            Jeder Sensor sollte mit einer Vegetationsform verknüpft sein. Auf
            dieser Untersichtsseite wird veranschaulicht, ob der aktuelle Sensor
            Daten liefern kann, wann der Sensor das letzte Mal Daten geliefert
            hat und wie der aktuelle Akkustand des Sensors ist. Falls der Sensor
            zu keinem Baum oder Beet hinzugefügt worden ist, kann hier die
            Verknüpfung manuell hergestellt werden.
          </p>
        </div>
      </article>

      <section className="mt-10">
        <ul className="space-y-5 md:space-y-0 md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <EntitiesStatusCard
              statusDetails={getSensorStatusDetails(sensor.status)}
              label="Status des Sensors"
            />
          </li>
          <li>
            <EntitiesStatusCard
              statusDetails={getVoltageQualityDetails(
                exampleSensorData.battery
              )}
              label="Akkustand"
            />
          </li>
          <li>
            <GeneralStatusCard
              overline="Letzte Messung"
              value={updatedDate}
              description="Letzte Datenübermittlung"
            />
          </li>
        </ul>
      </section>

      <section className="mt-16 md:grid md:gap-x-11 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-lato font-bold mb-4">Daten zum Sensor</h2>
          <dl className="text-lg">
            {generalSensorData.map((data, index) => (
              <div
                key={index}
                className="py-4 border-b border-b-dark-200 group md:last:border-b-transparent last:border-b-transparent"
              >
                <dt className="font-bold sm:inline">{data.label}:</dt>
                <dd className="sm:inline sm:px-2">{data.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={`h-max space-y-3 rounded-xl p-6 ${linkedTree ? 'bg-dark-50' : 'bg-red-50'}`}
        >
          <h2 className="text-sm text-dark-700 font-medium">
            Verknüpfte Vegetation
          </h2>
          {linkedTree ? (
            <div>
              <p className="font-bold text-3xl mb-2">
                Baum: {linkedTree.treeNumber}
              </p>
              <p className="text-sm mb-4">
                Longitude: {linkedTree.longitude} <br />
                Latitude: {linkedTree.latitude}
              </p>
              <GeneralLink
                label="Zur verknüpften Vegetation"
                link={{
                  to: '/tree/$treeId',
                  params: { treeId: String(linkedTree.id) },
                }}
              />
            </div>
          ) : (
            <div>
              <p className="font-bold text-3xl text-red mb-2">
                Keine Verknüpfung
              </p>
              <p className="text-sm mb-4">
                Es war nicht möglich anhand der GPS-Daten den Sensor einem Baum
                oder einem Beet zuzuweisen oder er wurde manuell unverknüpft.
              </p>
              <GeneralLink
                theme="grey"
                label="Vegetation verknüpfen"
                link={{
                  to: '/map/sensor/select/tree',
                  search: {
                    lat: sensor.latitude,
                    lng: sensor.longitude,
                    zoom: 18,
                    sensorId: sensor.id,
                  },
                }}
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default SensorDashboard
