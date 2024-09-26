
type MapState = {
  center: [number, number];
  zoom: number;
  minZoom: number;
  maxZoom: number;
  showSelectModal: boolean;
};

type MapActions = {
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
  setShowSelectModal: (showSelectModal: boolean) => void;
};

export type MapStore = MapState & MapActions;
