import {
  createFileRoute,
  useLoaderData,
  useNavigate,
} from '@tanstack/react-router'
import MapButtons from '@/components/map/MapButtons'
import { Tree, TreeCluster } from '@green-ecolution/backend-client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { WithTreesAndClusters } from '@/components/map/TreeMarker'
import { treeClusterQuery, treeQuery } from '@/api/queries'
import { useRef, useState } from 'react'
import Dialog from '@/components/general/filter/Dialog'
import { useMapMouseSelect } from '@/hooks/useMapMouseSelect'
import { useMap } from 'react-leaflet'
import StatusFieldset from '@/components/general/filter/fieldsets/StatusFieldset'
import { getWateringStatusDetails } from '@/hooks/useDetailsForWateringStatus'
import useFilter from '@/hooks/useFilter'
import FilterProvider from '@/context/FilterContext'
import { z } from 'zod'
import ClusterFieldset from '@/components/general/filter/fieldsets/ClusterFieldset'
import PlantingYearFieldset from '@/components/general/filter/fieldsets/PlantingYearFieldset'

const mapFilterSchema = z.object({
  status: z.array(z.string()).optional(),
  hasCluster: z.boolean().optional(),
  plantingYears: z.array(z.number()).optional(),
})

function MapView() {
  const navigate = useNavigate({ from: '/map' })
  const map = useMap()
  const dialogRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState(true)
  const { data: cluster } = useSuspenseQuery(treeClusterQuery())
  const { data: trees } = useSuspenseQuery(treeQuery())
  const { filters } = useFilter()

  const handleTreeClick = (tree: Tree) => {
    navigate({ to: `/tree/$treeId`, params: { treeId: tree.id.toString() } })
  }

  const handleClusterClick = (cluster: TreeCluster) => {
    navigate({
      to: `/treecluster/$treeclusterId`,
      params: { treeclusterId: cluster.id.toString() },
    })
  }

  useMapMouseSelect((_, e) => {
    const target = e.originalEvent.target as HTMLElement
    if (dialogRef.current?.contains(target)) {
      map.dragging.disable()
      map.scrollWheelZoom.disable()
    } else {
      map.dragging.enable()
      map.scrollWheelZoom.enable()
    }
  })

  const filterData = () => {
    return trees.data.filter((tree) => {
      const statusFilter =
        filters.statusTags.length === 0 ||
        filters.statusTags.includes(
          getWateringStatusDetails(tree.wateringStatus).label
        )

      const hasCluster =
        filters.hasCluster === undefined ||
        (filters.hasCluster && tree.treeClusterId) ||
        (!filters.hasCluster && !tree.treeClusterId)

      const plantingYearsFilter =
        filters.plantingYears.length === 0 ||
        filters.plantingYears.includes(tree.plantingYear);
      
      return statusFilter && hasCluster && plantingYearsFilter
    })
  }

  const [filteredData, setFilteredData] = useState<Tree[]>(filterData())

  const handleFilter = () => {
    const data = filterData()
    setActiveFilter(true)
    setFilteredData(data)
  }

  const handleReset = () => {
    setActiveFilter(false)
    setFilteredData(trees.data)
  }

  return (
    <>
      <div className="absolute top-6 left-4">
        <Dialog
          ref={dialogRef}
          headline="Bäume filtern"
          isOnMap
          fullUrlPath={Route.fullPath}
          onApplyFilters={handleFilter}
          onResetFilters={handleReset}
        >
          <StatusFieldset />
          <ClusterFieldset />
          <PlantingYearFieldset />
        </Dialog>
      </div>
      <MapButtons />
      <WithTreesAndClusters
        clusters={cluster.data}
        trees={filteredData}
        activeFilter={activeFilter}
        onClickTree={handleTreeClick}
        onClickCluster={handleClusterClick}
      />
    </>
  )
}

const MapViewWithProvider = () => {
  const search = useLoaderData({ from: '/_protected/map/' })
  return (
    <FilterProvider
      initialStatus={search.status ?? []}
      initialHasCluster={search.hasCluster ?? undefined}
      initialPlantingYears={search.plantingYears ?? []}
    >
      <MapView />
    </FilterProvider>
  )
}

export const Route = createFileRoute('/_protected/map/')({
  component: MapViewWithProvider,
  validateSearch: mapFilterSchema,

  loaderDeps: ({ search: { status, hasCluster, plantingYears } }) => ({
    status: status || [],
    hasCluster: hasCluster || undefined,
    plantingYears: plantingYears || [],
  }),

  loader: ({ deps: { status, hasCluster, plantingYears } }) => {
    return { status, hasCluster, plantingYears }
  },
})
