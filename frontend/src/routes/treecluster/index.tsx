import TreeclusterCard from "@/components/general/cards/TreeclusterCard";
import Dialog from "@/components/general/filter/Dialog";
import RegionsFieldset from "@/components/general/filter/fieldsets/RegionsFieldset";
import StatusFieldset from "@/components/general/filter/fieldsets/StatusFieldset";
import { Region } from "@/types/Region";
import { WateringStatus } from "@/types/WateringStatus";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/treecluster/")({
  component: Treecluster,
});

function Treecluster() {

  const treecluster = [
    {
      id: 0,
      headline: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.bad,
    },
    {
      id: 1,
      headline: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.bad,
    },
    {
      id: 3,
      headline: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.moderate,
    },
    {
      id: 4,
      headline: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.good,
    },
    {
      id: 4,
      headline: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.good,
    },
    {
      id: 5,
      headline: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.good,
    },
    {
      id: 5,
      headline: 'Westliche Höhe/Exe',
      number: '12345678XY',
      address: 'Friesische Straße 31 - 40',
      region: Region.friesischerBerg,
      treeCount: 34,
      sensorCount: 4,
      status: WateringStatus.good,
    },
  ];

  return (
    <div className="container mt-6">
      <article className="2xl:w-4/5">
        <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
          Auflistung aller verfügbaren Baumgruppen
        </h1>
        <p>
          Eine Baumgruppe besteht aus bis zu 40 Bäumen, die die gleichen Standortbedingungen vorweisen. 
          Mindestes fünf Bäume in einer Baumgruppe ist mit Sensoren ausgestattet. 
          Diese gelieferten Werte werden gemittelt, sodass eine Handlungsempfehlung für die Baumgruppe gegeben werden kann.
        </p>
      </article>

      <section className="mt-16">
        <div className="mb-8 flex items-center justify-end lg:mb-12">
          <Dialog headline="Filterung der Baumgruppen">
            <StatusFieldset />
            <RegionsFieldset />
          </Dialog>
        </div>

        <header className="hidden border-b pb-2 text-sm text-dark-800 px-8 border-b-dark-200 mb-5 lg:grid lg:grid-cols-[1fr,1.5fr,2fr,1fr] lg:gap-5 xl:px-10">
          <p>Status</p>
          <p>Name</p>
          <p>Standort</p>
          <p>Anzahl d. Bäume</p>
        </header>

        <ul>
          {treecluster.map((singleCluster, key) => (
            <li key={key} className="mb-5 last:mb-0">
              <TreeclusterCard
                id={singleCluster.id} 
                headline={singleCluster.headline}
                number={singleCluster.number}
                address={singleCluster.address}
                region={singleCluster.region}
                treeCount={singleCluster.treeCount}
                sensorCount={singleCluster.sensorCount}
                status={singleCluster.status}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
