import { Region } from "@/types/Region";
import { WateringStatus } from "@/types/WateringStatus";

export function treeclusterDemoData() {
  return [
    {
      id: 0,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.bad,
      description: 'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 1,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.engelsby,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.bad,
      description: 'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 3,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.fruerlund,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.moderate,
      description: 'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 4,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.muerwik,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.good,
      description: 'Diese Bewässserungsgruppe bedindet sich an Position XY und beinhlatet XY viele Bäume. Hier ist zudem noch Platz für mehr Inhalt, den ich noch nicht kenne.',
    },
    {
      id: 4,
      name: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.good,
      description: '',
    },
  ];
}
