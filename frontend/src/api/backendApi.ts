import {
  Configuration,
  ConfigurationParameters,
  InfoApi,
  RouteApi,
  TreesApi,
} from "@green-ecolution/backend-client";

const configParams: ConfigurationParameters = {
  basePath: import.meta.env.VITE_BACKEND_BASEURL ?? "/api",
};

const config = new Configuration(configParams);

export const treeApi = new TreesApi(config);
export const infoApi = new InfoApi(config);
export const routeApi = new RouteApi(config);

export * from "@green-ecolution/backend-client";
