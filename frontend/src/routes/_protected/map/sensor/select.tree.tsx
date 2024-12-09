import { treeApi } from '@/api/backendApi'
import { sensorIdQuery, treeIdQuery } from '@/api/queries'
import queryClient from '@/api/queryClient'
import SelectedCard from '@/components/general/cards/SelectedCard'
import MapSelectTreesModal from '@/components/map/MapSelectTreesModal'
import SensorMarker from '@/components/map/marker/SensorMarker'
import WithAllTrees from '@/components/map/marker/WithAllTrees'
import useToast from '@/hooks/useToast'
import { Tree, TreeUpdate as TreeUpdateReq } from "@green-ecolution/backend-client"
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useCallback, useState } from 'react'

export const Route = createFileRoute('/_protected/map/sensor/select/tree')({
  component: LinkTreeToSensor,
  meta: () => [{ title: 'Vegetation verlinken' }],
})

function LinkTreeToSensor() {
  const [treeId, setTreeId] = useState<number | undefined>()
  const [showDefault, setShowDefault] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate({ from: Route.fullPath })
  const showToast = useToast()
  const { sensorId } = Route.useSearch()
  const { data: sensor } = useSuspenseQuery(sensorIdQuery(String(sensorId)))

  const { mutate } = useMutation({
    mutationFn: (tree: TreeUpdateReq) =>
      treeApi.updateTree({
        treeId: String(treeId),
        body: tree,
      }),
    onSuccess: () => handleOnUpdateSuccess,
    onError: (error: Error) => {
      console.error('Error updating tree data:', error);
      setErrorMessage("Es ist leider etwas schief gelaufen. Bitte probieren Sie es später erneut.");
    },
  })

  const handleOnUpdateSuccess = (data: Tree) => {
    navigate({
      to: '/tree/$treeId',
      params: { treeId: data.id.toString() },
      search: { resetStore: false },
      replace: true,
    })
    showToast('Der Baum wurde erfolgreich editiert')
    queryClient.invalidateQueries(treeIdQuery(String(treeId)))
  }

  const handleNavigateBack = useCallback(() => {
    return navigate({
      to: `/sensors/$sensorId`,
      params: { sensorId: sensorId?.toString() ?? '' },
      search: { resetStore: false },
    })
  }, [navigate, sensorId])

  const handleSave = async () => {
    setErrorMessage(null);

    if (!treeId) {
      setShowDefault(true);
      return;
    }
  
    try {
      const data = await queryClient.fetchQuery(treeIdQuery(String(treeId)));
      mutate({
        ...data,
        sensorId: sensorId,
      });
      handleNavigateBack()
      showToast("Vegetation wurde erfolgreich verlinkt")
    } catch (error) {
      console.error('Error fetching tree data:', error);
      setErrorMessage("Die Baumdaten konnten nicht geladen werden. Bitte probieren Sie es später erneut.");
    }
  };

  return (
    <>
      <MapSelectTreesModal
        onSave={handleSave}
        onCancel={() => handleNavigateBack()}
        disabled={!treeId}
        title="Ausgewählte Bäume:"
        content={
          <>
            {!treeId || showDefault ? (
              <p className="text-dark-600 font-semibold text-sm">
                Hier können Sie die zugehörige Vegetation verlinken.
              </p>
            ) : (
                <SelectedCard treeId={treeId} onClick={() => setTreeId(undefined)} />
            )}
            {errorMessage && (
              <p className="text-red font-semibold text-sm mt-2">{errorMessage}</p>
            )}
          </>
        }
      />
      <WithAllTrees selectedTrees={treeId ? [treeId] : []} onClick={(tree: Tree) => setTreeId(tree.id)} />
      <SensorMarker
        sensor={sensor}
      />
    </>
  )
}
