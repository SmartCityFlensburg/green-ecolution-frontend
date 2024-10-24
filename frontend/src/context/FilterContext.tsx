import React, { createContext, useState, ReactNode } from 'react';

export interface Filters {
  statusTags: string[];
  regionTags: string[];
  hasCluster: boolean | undefined;
  plantingYear: number | undefined;
}

interface FilterContextType {
  filters: Filters;
  handleStatusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClusterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlantingYearChange: (year: number) => void;
  resetFilters: () => void;
  applyOldStateToTags: (oldValues: Filters) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
  initialStatus?: string[];
  initialRegions?: string[];
  initialHasCluster?: boolean | undefined;
  initialPlantingYear?: number | undefined;
  children: ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({
  initialStatus = [],
  initialRegions = [],
  initialHasCluster = undefined,
  initialPlantingYear = undefined,
  children,
}) => {
  const [statusTags, setStatusTags] = useState(initialStatus);
  const [regionTags, setRegionTags] = useState(initialRegions);
  const [plantingYear, setPlantingYear] = useState(initialPlantingYear);
  const [hasCluster, setHasCluster] = useState(initialHasCluster);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    setStatusTags((prev) =>
      checked ? [...prev, value] : prev.filter((tag) => tag !== value)
    );
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    setRegionTags((prev) =>
      checked ? [...prev, value] : prev.filter((tag) => tag !== value)
    );
  };

  const handleClusterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setHasCluster(value === 'true');
  };

  const handlePlantingYearChange = (year: number) => {
    setPlantingYear(year);
  };

  const applyOldStateToTags = (oldValues: Filters) => {
    setStatusTags(oldValues.statusTags);
    setRegionTags(oldValues.regionTags);
    setHasCluster(oldValues.hasCluster);
    setPlantingYear(oldValues.plantingYear);
  };

  const resetFilters = () => {
    setStatusTags([]);
    setRegionTags([]);
    setHasCluster(undefined);
    setPlantingYear(undefined);
  };

  return (
    <FilterContext.Provider
      value={{
        filters: { statusTags, regionTags, hasCluster, plantingYear },
        handleStatusChange,
        handleRegionChange,
        handleClusterChange,
        handlePlantingYearChange,
        resetFilters,
        applyOldStateToTags,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
