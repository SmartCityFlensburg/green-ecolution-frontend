import SliderComponent from '@/components/general/SliderComponent'
import useFilter from '@/hooks/useFilter';

const PlantingYearFieldset = () => {
  const { filters, handlePlantingYearChange } = useFilter();
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 5;

  return (
    <fieldset className="mt-4">
      <legend className="font-lato font-semibold text-dark-600 mb-2">
        Pflanzjahr:
      </legend>
      <SliderComponent
        min={minYear}
        max={currentYear}
        step={1}
        value={filters.plantingYear ?? minYear}
        onChange={handlePlantingYearChange}
      />
    </fieldset>
  );
};

export default PlantingYearFieldset;
