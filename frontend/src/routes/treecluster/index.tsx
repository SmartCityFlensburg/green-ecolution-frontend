import { useEffect, useState } from 'react';
import TreeclusterCard from "@/components/general/cards/TreeclusterCard";
import Dialog from "@/components/general/filter/Dialog";
import { treeclusterDemoData } from "@/data/treecluster";
import { createFileRoute } from "@tanstack/react-router";
import useUrlParams from '@/hooks/useUrlParams';
import { mapStatusToOptions } from '@/types/WateringStatus';
import { mapRegionToOptions } from '@/types/Region';

export const Route = createFileRoute("/treecluster/")({
  component: Treecluster,
});

function Treecluster() {
  const initialTreecluster = treeclusterDemoData();
  const [filteredTreecluster, setFilteredTreecluster] = useState(initialTreecluster);
  const { getUrlParams } = useUrlParams();

  const handleFilter = () => {
    const urlParams = getUrlParams();
    const status = mapStatusToOptions(urlParams.status || []);
    const regions = mapRegionToOptions(urlParams.regions || []);

    const statusNames = status.map(item => item.name);
    const regionNames = regions.map(item => item.name);

    const filteredData = initialTreecluster.filter(cluster =>
      (statusNames.length === 0 || statusNames.includes(cluster.status)) &&
      (regionNames.length === 0 || regionNames.includes(cluster.region))
    );

    setFilteredTreecluster(filteredData);
  };

  useEffect(() => {
    handleFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUrlParams]);

  return (
    <div className="container mt-6">
      <article className="2xl:w-4/5">
        <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
          Auflistung aller verfügbaren Baumgruppen
        </h1>
        <p>
          Eine Baumgruppe besteht aus bis zu 40 Bäumen, die die gleichen Standortbedingungen vorweisen. 
          Mindestens fünf Bäume in einer Baumgruppe sind mit Sensoren ausgestattet. 
          Diese gelieferten Werte werden gemittelt, sodass eine Handlungsempfehlung für die Baumgruppe gegeben werden kann.
        </p>
      </article>

      <section className="mt-16">
        <div className="mb-8 flex items-center justify-end lg:mb-12">
          <Dialog
            headline="Filterung der Baumgruppen" 
            onApplyFilter={handleFilter}/>
        </div>

        <header className="hidden border-b pb-2 text-sm text-dark-800 px-8 border-b-dark-200 mb-5 lg:grid lg:grid-cols-[1fr,1.5fr,2fr,1fr] lg:gap-5 xl:px-10">
          <p>Status</p>
          <p>Name</p>
          <p>Standort</p>
          <p>Anzahl d. Bäume</p>
        </header>

        <ul>
          {filteredTreecluster.length === 0 ? (
            <li className="text-center text-dark-600 mt-10">
              <p>
                Keine Ergebnisse mit den eingestellten Filteroptionen gefunden.
              </p>
            </li>
          ) : (
            filteredTreecluster.map((treecluster, key) => (
              <li key={key} className="mb-5 last:mb-0">
                <TreeclusterCard
                  treecluster={treecluster} />
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}

export default Treecluster;
