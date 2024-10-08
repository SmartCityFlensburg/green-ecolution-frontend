import { EntitiesTreeSoilCondition } from "@green-ecolution/backend-client";
import { SubStore } from "../store";
import { NewTreeclusterStore } from "./types";

export const newTreeclusterStore: SubStore<NewTreeclusterStore> = (set) => ({
  name: "",
  address: "",
  region: "",
  description: "",
  soilCondition: EntitiesTreeSoilCondition.TreeSoilConditionUnknown,
  treeIds: [],
  setName: (name) =>
    set((state) => {
      state.newTreecluster.name = name;
    }),
  setAddress: (address) => 
    set((state) => {
      state.newTreecluster.address = address;
    }),
  setRegion: (region) =>
    set((state) => {
      state.newTreecluster.region = region;
    }),
  setDescription: (description) => 
    set((state) => {
      state.newTreecluster.description = description;
    }),
  setSoilCondition: (soilCondition) => 
    set((state) => {
      state.newTreecluster.soilCondition = soilCondition;
    }),
  setTreeIds: (treeIds) =>
    set((state) => {
      state.newTreecluster.treeIds = treeIds;
    }),
});
