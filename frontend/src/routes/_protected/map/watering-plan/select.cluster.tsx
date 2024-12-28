import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { TreeCluster } from '@green-ecolution/backend-client'
import { useCallback, useState } from 'react'
import SelectedCard from '@/components/general/cards/SelectedCard'
import useFormStore, { FormStore } from '@/store/form/useFormStore'
import { WateringPlanForm } from '@/schema/wateringPlanSchema'
import MapSelectEntitiesModal from '@/components/map/MapSelectEntitiesModal'
import WithAllClusters from '@/components/map/marker/WithAllClusters'

export const Route = createFileRoute(
  '/_protected/map/watering-plan/select/cluster'
)({
  component: SelectTrees,
  meta: () => [{ title: 'Bewässerungsgruppen auswählen' }],
})

function SelectTrees() {
  const { form, storeTreeIds, set, type } = useFormStore(
    (state: FormStore<WateringPlanForm>) => ({
      form: state.form,
      storeTreeIds: state.form?.treeClusterIds ?? [],
      set: state.commit,
      type: state.type,
    })
  )
  const [clusterIds, setClusterIds] = useState<number[]>(storeTreeIds)
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate({ from: Route.fullPath })
  //const { wateringPlanId } = Route.useSearch()

  const handleNavigateBack = useCallback(() => {
    switch (type) {
      case 'new':
        return navigate({
          to: '/watering-plans/new',
          search: { resetStore: false },
        })
      // case 'edit':
      //   return navigate({
      //     to: `/watering-plans/$wateringPlanId/edit`,
      //     params: { wateringPlanId: wateringPlanId?.toString() ?? '' },
      //     search: { resetStore: false },
      //   })
      default:
        return navigate({
          to: '/watering-plans/new',
          search: { resetStore: false },
        })
    }
  }, [navigate, type])

  const handleSave = () => {
    if (clusterIds.length === 0) {
      setShowError(true)
      return
    }
    form &&
      set({
        ...form,
        clusterIds,
      })

    handleNavigateBack()
  }

  const handleCancel = () => handleNavigateBack()

  const handleDelete = (clusterId: number) => {
    setClusterIds((prev) => prev.filter((id) => id !== clusterId))
  }

  const handleClick = (cluster: TreeCluster) => {
    if (clusterIds.includes(cluster.id)) {
      setClusterIds((prev) => prev.filter((id) => id !== cluster.id))
    } else {
      setClusterIds((prev) => [...prev, cluster.id])
    }
  }

  return (
    <>
      <MapSelectEntitiesModal
        onSave={handleSave}
        onCancel={handleCancel}
        disabled={clusterIds.length === 0}
        title="Ausgewählte Bewässerungsgruppen:"
        content={
          <ul>
            {(clusterIds?.length || 0) === 0 || showError ? (
              <li className="text-dark-600 font-semibold text-sm">
                <p>Hier können Sie zugehörigen Gruppen verlinken.</p>
              </li>
            ) : (
              clusterIds.map((clusterId, key) => (
                <li key={key}>
                  <SelectedCard
                    type="cluster"
                    id={clusterId}
                    onClick={handleDelete}
                  />
                </li>
              ))
            )}
          </ul>
        }
      />
      <WithAllClusters onClick={handleClick} hasHighlightedCluster={1} />
    </>
  )
}
