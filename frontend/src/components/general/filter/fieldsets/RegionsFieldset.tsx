import { useImperativeHandle, forwardRef } from 'react';
import FilterCheckbox from '../FilterCheckbox';
import { Region } from '@/types/Region';
import useFilterOption from '@/hooks/useFilterOption';

export type RegionsRef = {
  resetOptions: () => void;
  getActiveOptions: () => { name: string; key: string }[];
};

const RegionsFieldset = forwardRef<RegionsRef>((_, ref) => {
  const { options, handleCheckboxClick, reset } = useFilterOption();

  useImperativeHandle(ref, () => ({
    resetOptions() {
      reset();
    },
    getActiveOptions() {
      return options || [];
    }
  }));

  return (
    <fieldset className="mb-5">
      <legend className="font-lato font-semibold text-dark-600 mb-2">
        Regionen in Flensburg
      </legend>
      {Object.entries(Region).map(([regionKey, regionValue]) => (
        <FilterCheckbox
          key={regionKey}
          label={regionValue}
          onClick={() => handleCheckboxClick(regionValue, regionKey)}
          name={regionKey}
        />
      ))}
    </fieldset>
  );
});

export default RegionsFieldset;
