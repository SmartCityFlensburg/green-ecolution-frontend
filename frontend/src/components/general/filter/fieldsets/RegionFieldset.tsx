import Option from '../Option'
import useFilter from '@/hooks/useFilter'
import { useSuspenseQuery } from '@tanstack/react-query'
import { regionsQuery } from '@/api/queries'

const RegionFieldset = () => {
  const { tempFilters, handleRegionChange } = useFilter()
  const { data: regionRes } = useSuspenseQuery(regionsQuery());

  return (
    <fieldset className="mt-6">
      <legend className="font-lato font-semibold text-dark-600 mb-2">
        Stadtteil in Flensburg:
      </legend>
      {regionRes?.regions.map((region) => (
        <Option
          key={region.id}
          label={region.name}
          name={String(region.id)}
          checked={tempFilters.regionTags.includes(region.name)}
          onChange={handleRegionChange}
        />
      ))}
    </fieldset>
  )
}

export default RegionFieldset
