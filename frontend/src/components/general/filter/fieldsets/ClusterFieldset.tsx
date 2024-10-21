import Option from '../Option'
import useFilter from '@/hooks/useFilter'

const ClusterFieldset = () => {
  const { filters, handleClusterChange } = useFilter()
  const treeClusterOptions = [
    {
      label: 'Gruppe zugehörig',
      value: true,
    },
    {
      label: 'Keiner Gruppe zugehörig',
      value: false,
    }
  ]
  return (
    <fieldset className="mt-4">
      <legend className="font-lato font-semibold text-dark-600 mb-2">
        Zugehörigkeit einer Bewässerungsgruppe:
      </legend>
      {treeClusterOptions.map((type, key) => (
          <Option
            key={key}
            label={type.label}
            name={type.label}
            value={String(type.value)}
            checked={filters.hasCluster === type.value}
            onChange={handleClusterChange}
          />
        )
      )} 
    </fieldset>
  )
}

export default ClusterFieldset
