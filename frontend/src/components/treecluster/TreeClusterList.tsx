import TreeclusterCard from '../general/cards/TreeclusterCard'
import { TreeCluster } from '@/api/backendApi'

interface TreeClusterListProps {
  data: TreeCluster[];
}

const TreeClusterList = ({ data }: TreeClusterListProps) => {
  return (
    <ul>
      {data?.length === 0 ? (
        <li className="text-center text-dark-600 mt-10">
          <p>
            Es wurden leider keine Bewässerungsgruppen gefunden.
          </p>
        </li>
      ) : (
        data?.map((cluster, key) => (
          <li key={key} className="mb-5 last:mb-0">
            <TreeclusterCard treecluster={cluster} />
          </li>
        ))
      )}
    </ul>
  )
}

export default TreeClusterList
