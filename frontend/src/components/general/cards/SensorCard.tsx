import { Sensor } from '@green-ecolution/backend-client'
import { format, formatDistanceToNow } from 'date-fns'
import { de } from 'date-fns/locale';
import React from 'react'
import Pill from '../Pill'
import { getSensorStatusDetails } from '@/hooks/useDetailsForSensorStatus'
import { useQuery } from '@tanstack/react-query'
import { treeSensorIdQuery } from '@/api/queries'
import { Link } from '@tanstack/react-router'

interface SensorCard {
  sensor: Sensor
}

const SensorCard: React.FC<SensorCard> = ({ sensor }) => {
  const sensorId = String(sensor.id)

  const { data: treeRes } = useQuery(treeSensorIdQuery(sensorId));
  const statusDetails = getSensorStatusDetails(sensor.status)
  const createdDate = sensor?.createdAt
    ? format(new Date(sensor?.createdAt), 'dd.MM.yyyy')
    : 'Keine Angabe'
  const updatedDate = sensor?.createdAt
    ? formatDistanceToNow(sensor?.updatedAt, { locale: de })
    : 'Keine Angabe'

  return (
    <Link
      to={`/sensors/${sensor.id}`}
      className="bg-white border border-dark-50 p-6 rounded-xl shadow-cards flex flex-col gap-y-4 transition-all ease-in-out duration-300 hover:bg-green-dark-50 hover:border-green-dark lg:grid lg:grid-cols-[1fr,2fr,1fr,1fr] lg:items-center lg:gap-5 lg:py-10 xl:px-10"
    >
      <Pill label={statusDetails.label} theme={statusDetails.color} />
      <div>
        <h2 className="font-bold text-lg mb-0.5">ID: {sensor.id}</h2>
        {treeRes ? (
          <p className="text-dark-800 text-sm">
            <span className={`${treeRes.treeNumber ? 'block' : 'hidden'}`}>
              Baum: {treeRes.treeNumber}
            </span>
            <span className={`${treeRes.treeNumber ? 'block' : 'hidden'}`}>
              Ort: {treeRes.latitude}, {treeRes.longitude}
            </span>
          </p>
        ) : (
          <p className="text-red">Keine Verknüpfung</p>
        )}
      </div>
      <p className="text-dark-800">
        Erstellt am: <span className="lg:block">{createdDate}</span>
      </p>
      <p className="text-dark-800">
        Letztes Update: <span className="lg:block">{updatedDate}</span>
      </p>
    </Link>
  )
}

export default SensorCard
