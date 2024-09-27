import { treeApi } from '@/api/backendApi';
import LoadingInfo from '@/components/general/error/LoadingInfo';
import BackLink from '@/components/general/links/BackLink';
import GeneralLink from '@/components/general/links/GeneralLink';
import Tabs from '@/components/general/Tabs';
import Sensor from '@/components/icons/Sensor';
import Tree from '@/components/icons/Tree';
import TreeGeneralData from '@/components/tree/TreeGeneralData';
import TreeSensorData from '@/components/tree/TreeSensorData';
import TreeWateringStatus from '@/components/tree/TreeWateringStatus';
import { useAuthHeader } from '@/hooks/useAuthHeader';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { File } from 'lucide-react';

export const Route = createFileRoute('/_protected/trees/$treeId')({
  component: SingleTree,

  loader: async ({ params }) => {
    return params.treeId;
  },
})

function SingleTree() {
  const treeId = useLoaderData({ from: '/_protected/trees/$treeId'});
  const authorization = useAuthHeader();

  const { data: tree, isLoading, isError } = useQuery({
    queryKey: ["tree", treeId],
    queryFn: () => treeApi.getTrees({ treeId, authorization }),
    enabled: !!treeId,
  });

  const tabs = [
    { 
      label: 'Bewässerungsdaten',
      icon: <Tree className="w-5 h-5" />,
      view: <TreeWateringStatus tree={tree} />
    },
    {
      label: 'Allgemeine Daten',
      icon: <File className="w-5 h-5" />,
      view: <TreeGeneralData tree={tree} />
    },
    {
      label: 'Sensordaten',
      icon: <Sensor className="w-5 h-5" />,
      view: <TreeSensorData tree={tree} />
    },
  ];

  return (
    <div className="container mt-6">
      {isLoading ? (
        <LoadingInfo label="Baumdaten werden geladen …" />
      ) : isError || !tree ? (
        <p className="text-red text-lg">Einen Baum mit der Baumnummer {treeId} gibt es nicht oder die Baumdaten konnten nicht geladen werden.</p>
      ) : (
        <div>
          <article className="mb-10 2xl:w-4/5">
            <BackLink url="/map" label="Zum Kataster" />
            <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
              Baum: {tree.number}
            </h1>
            <p className="text-dark-600 text-lg mb-4">
              <span>@TODO: Bewässerungsgruppe hinzufügen, </span>
              <span>@TODO: Adresse der Bewässerungsgruppe</span>
            </p>
            <GeneralLink
              url={`/map?lat=${tree.latitude}&lng=${tree.longitude}`}
              label="Auf der Karte anzeigen"
            />
          </article>
          {tree?.sensor ? (
            <Tabs tabs={tabs} />
          ) : (
            <TreeGeneralData tree={tree} />
          )}
        </div>
      )}
    </div>
  )
}
