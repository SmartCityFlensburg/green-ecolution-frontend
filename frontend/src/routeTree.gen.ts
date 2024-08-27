/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VehiclesImport } from './routes/vehicles'
import { Route as TreeclusterImport } from './routes/treecluster'
import { Route as TeamImport } from './routes/team'
import { Route as SettingsImport } from './routes/settings'
import { Route as SensorsImport } from './routes/sensors'
import { Route as IndexImport } from './routes/index'
import { Route as WaypointsIndexImport } from './routes/waypoints/index'
import { Route as MapIndexImport } from './routes/map/index'
import { Route as WaypointsNewImport } from './routes/waypoints/new'

// Create/Update Routes

const VehiclesRoute = VehiclesImport.update({
  path: '/vehicles',
  getParentRoute: () => rootRoute,
} as any)

const TreeclusterRoute = TreeclusterImport.update({
  path: '/treecluster',
  getParentRoute: () => rootRoute,
} as any)

const TeamRoute = TeamImport.update({
  path: '/team',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRoute = SettingsImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const SensorsRoute = SensorsImport.update({
  path: '/sensors',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WaypointsIndexRoute = WaypointsIndexImport.update({
  path: '/waypoints/',
  getParentRoute: () => rootRoute,
} as any)

const MapIndexRoute = MapIndexImport.update({
  path: '/map/',
  getParentRoute: () => rootRoute,
} as any)

const WaypointsNewRoute = WaypointsNewImport.update({
  path: '/waypoints/new',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/sensors': {
      id: '/sensors'
      path: '/sensors'
      fullPath: '/sensors'
      preLoaderRoute: typeof SensorsImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/team': {
      id: '/team'
      path: '/team'
      fullPath: '/team'
      preLoaderRoute: typeof TeamImport
      parentRoute: typeof rootRoute
    }
    '/treecluster': {
      id: '/treecluster'
      path: '/treecluster'
      fullPath: '/treecluster'
      preLoaderRoute: typeof TreeclusterImport
      parentRoute: typeof rootRoute
    }
    '/vehicles': {
      id: '/vehicles'
      path: '/vehicles'
      fullPath: '/vehicles'
      preLoaderRoute: typeof VehiclesImport
      parentRoute: typeof rootRoute
    }
    '/waypoints/new': {
      id: '/waypoints/new'
      path: '/waypoints/new'
      fullPath: '/waypoints/new'
      preLoaderRoute: typeof WaypointsNewImport
      parentRoute: typeof rootRoute
    }
    '/map/': {
      id: '/map/'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof MapIndexImport
      parentRoute: typeof rootRoute
    }
    '/waypoints/': {
      id: '/waypoints/'
      path: '/waypoints'
      fullPath: '/waypoints'
      preLoaderRoute: typeof WaypointsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  SensorsRoute,
  SettingsRoute,
  TeamRoute,
  TreeclusterRoute,
  VehiclesRoute,
  WaypointsNewRoute,
  MapIndexRoute,
  WaypointsIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/sensors",
        "/settings",
        "/team",
        "/treecluster",
        "/vehicles",
        "/waypoints/new",
        "/map/",
        "/waypoints/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/sensors": {
      "filePath": "sensors.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/team": {
      "filePath": "team.tsx"
    },
    "/treecluster": {
      "filePath": "treecluster.tsx"
    },
    "/vehicles": {
      "filePath": "vehicles.tsx"
    },
    "/waypoints/new": {
      "filePath": "waypoints/new.tsx"
    },
    "/map/": {
      "filePath": "map/index.tsx"
    },
    "/waypoints/": {
      "filePath": "waypoints/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
