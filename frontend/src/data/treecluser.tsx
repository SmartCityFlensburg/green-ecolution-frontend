import { EntitiesWateringStatus } from '@green-ecolution/backend-client'

export function treeclusterDemoData() {
  return [
    {
      id: 0,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: 'Friesischer Berg',
      treeCount: 34,
      sensorCount: 4,
      status: EntitiesWateringStatus.WateringStatusBad,
      description:
        'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 1,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: 'Engelsby',
      treeCount: 34,
      sensorCount: 4,
      status: EntitiesWateringStatus.WateringStatusBad,
      description:
        'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 3,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: 'Fruerlund',
      treeCount: 34,
      sensorCount: 4,
      status: EntitiesWateringStatus.WateringStatusModerate,
      description:
        'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 4,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: 'Mürwik',
      treeCount: 34,
      sensorCount: 4,
      status: EntitiesWateringStatus.WateringStatusGood,
      description:
        'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 4,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: 'Friesischer Berg',
      treeCount: 34,
      sensorCount: 4,
      status: EntitiesWateringStatus.WateringStatusModerate,
      description: '',
    },
    {
      id: 5,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: 'Neustadt',
      treeCount: 34,
      sensorCount: 4,
      status: EntitiesWateringStatus.WateringStatusGood,
      description: '',
    },
    {
      id: 5,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: 'Friesischer Berg',
      treeCount: 34,
      sensorCount: 4,
      status: EntitiesWateringStatus.WateringStatusModerate,
      description: '',
    },
  ]
}
