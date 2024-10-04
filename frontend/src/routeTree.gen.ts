/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LogoutImport } from './routes/logout'
import { Route as LoginImport } from './routes/login'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as ProtectedIndexImport } from './routes/_protected/index'
import { Route as AuthCallbackImport } from './routes/auth/callback'
import { Route as ProtectedVehiclesImport } from './routes/_protected/vehicles'
import { Route as ProtectedTeamImport } from './routes/_protected/team'
import { Route as ProtectedSensorsImport } from './routes/_protected/sensors'
import { Route as ProtectedProfileImport } from './routes/_protected/profile'
import { Route as ProtectedInfoImport } from './routes/_protected/info'
import { Route as ProtectedDebugImport } from './routes/_protected/debug'
import { Route as ProtectedWaypointsIndexImport } from './routes/_protected/waypoints/index'
import { Route as ProtectedTreeclusterIndexImport } from './routes/_protected/treecluster/index'
import { Route as ProtectedSettingsIndexImport } from './routes/_protected/settings/index'
import { Route as ProtectedMapIndexImport } from './routes/_protected/map/index'
import { Route as ProtectedWaypointsNewImport } from './routes/_protected/waypoints/new'
import { Route as ProtectedTreeclusterNewImport } from './routes/_protected/treecluster/new'
import { Route as ProtectedTreeclusterTreeclusterIdImport } from './routes/_protected/treecluster/$treeclusterId'
import { Route as ProtectedSettingsImportImport } from './routes/_protected/settings/import'
import { Route as ProtectedDashboardTreeTreeIdImport } from './routes/_protected/dashboard/tree/$treeId'

// Create/Update Routes

const LogoutRoute = LogoutImport.update({
  path: '/logout',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedIndexRoute = ProtectedIndexImport.update({
  path: '/',
  getParentRoute: () => ProtectedRoute,
} as any)

const AuthCallbackRoute = AuthCallbackImport.update({
  path: '/auth/callback',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedVehiclesRoute = ProtectedVehiclesImport.update({
  path: '/vehicles',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTeamRoute = ProtectedTeamImport.update({
  path: '/team',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedSensorsRoute = ProtectedSensorsImport.update({
  path: '/sensors',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedProfileRoute = ProtectedProfileImport.update({
  path: '/profile',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedInfoRoute = ProtectedInfoImport.update({
  path: '/info',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedDebugRoute = ProtectedDebugImport.update({
  path: '/debug',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedWaypointsIndexRoute = ProtectedWaypointsIndexImport.update({
  path: '/waypoints/',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTreeclusterIndexRoute = ProtectedTreeclusterIndexImport.update({
  path: '/treecluster/',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedSettingsIndexRoute = ProtectedSettingsIndexImport.update({
  path: '/settings/',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedMapIndexRoute = ProtectedMapIndexImport.update({
  path: '/map/',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedWaypointsNewRoute = ProtectedWaypointsNewImport.update({
  path: '/waypoints/new',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTreeclusterNewRoute = ProtectedTreeclusterNewImport.update({
  path: '/treecluster/new',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTreeclusterTreeclusterIdRoute =
  ProtectedTreeclusterTreeclusterIdImport.update({
    path: '/treecluster/$treeclusterId',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ProtectedSettingsImportRoute = ProtectedSettingsImportImport.update({
  path: '/settings/import',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedDashboardTreeTreeIdRoute =
  ProtectedDashboardTreeTreeIdImport.update({
    path: '/dashboard/tree/$treeId',
    getParentRoute: () => ProtectedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/logout': {
      id: '/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof LogoutImport
      parentRoute: typeof rootRoute
    }
    '/_protected/debug': {
      id: '/_protected/debug'
      path: '/debug'
      fullPath: '/debug'
      preLoaderRoute: typeof ProtectedDebugImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/info': {
      id: '/_protected/info'
      path: '/info'
      fullPath: '/info'
      preLoaderRoute: typeof ProtectedInfoImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/profile': {
      id: '/_protected/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProtectedProfileImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/sensors': {
      id: '/_protected/sensors'
      path: '/sensors'
      fullPath: '/sensors'
      preLoaderRoute: typeof ProtectedSensorsImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/team': {
      id: '/_protected/team'
      path: '/team'
      fullPath: '/team'
      preLoaderRoute: typeof ProtectedTeamImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/vehicles': {
      id: '/_protected/vehicles'
      path: '/vehicles'
      fullPath: '/vehicles'
      preLoaderRoute: typeof ProtectedVehiclesImport
      parentRoute: typeof ProtectedImport
    }
    '/auth/callback': {
      id: '/auth/callback'
      path: '/auth/callback'
      fullPath: '/auth/callback'
      preLoaderRoute: typeof AuthCallbackImport
      parentRoute: typeof rootRoute
    }
    '/_protected/': {
      id: '/_protected/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof ProtectedIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/settings/import': {
      id: '/_protected/settings/import'
      path: '/settings/import'
      fullPath: '/settings/import'
      preLoaderRoute: typeof ProtectedSettingsImportImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/treecluster/$treeclusterId': {
      id: '/_protected/treecluster/$treeclusterId'
      path: '/treecluster/$treeclusterId'
      fullPath: '/treecluster/$treeclusterId'
      preLoaderRoute: typeof ProtectedTreeclusterTreeclusterIdImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/treecluster/new': {
      id: '/_protected/treecluster/new'
      path: '/treecluster/new'
      fullPath: '/treecluster/new'
      preLoaderRoute: typeof ProtectedTreeclusterNewImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/waypoints/new': {
      id: '/_protected/waypoints/new'
      path: '/waypoints/new'
      fullPath: '/waypoints/new'
      preLoaderRoute: typeof ProtectedWaypointsNewImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/map/': {
      id: '/_protected/map/'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof ProtectedMapIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/settings/': {
      id: '/_protected/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof ProtectedSettingsIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/treecluster/': {
      id: '/_protected/treecluster/'
      path: '/treecluster'
      fullPath: '/treecluster'
      preLoaderRoute: typeof ProtectedTreeclusterIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/waypoints/': {
      id: '/_protected/waypoints/'
      path: '/waypoints'
      fullPath: '/waypoints'
      preLoaderRoute: typeof ProtectedWaypointsIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/dashboard/tree/$treeId': {
      id: '/_protected/dashboard/tree/$treeId'
      path: '/dashboard/tree/$treeId'
      fullPath: '/dashboard/tree/$treeId'
      preLoaderRoute: typeof ProtectedDashboardTreeTreeIdImport
      parentRoute: typeof ProtectedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  ProtectedRoute: ProtectedRoute.addChildren({
    ProtectedDebugRoute,
    ProtectedInfoRoute,
    ProtectedProfileRoute,
    ProtectedSensorsRoute,
    ProtectedTeamRoute,
    ProtectedVehiclesRoute,
    ProtectedIndexRoute,
    ProtectedSettingsImportRoute,
    ProtectedTreeclusterTreeclusterIdRoute,
    ProtectedTreeclusterNewRoute,
    ProtectedWaypointsNewRoute,
    ProtectedMapIndexRoute,
    ProtectedSettingsIndexRoute,
    ProtectedTreeclusterIndexRoute,
    ProtectedWaypointsIndexRoute,
    ProtectedDashboardTreeTreeIdRoute,
  }),
  LoginRoute,
  LogoutRoute,
  AuthCallbackRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_protected",
        "/login",
        "/logout",
        "/auth/callback"
      ]
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/debug",
        "/_protected/info",
        "/_protected/profile",
        "/_protected/sensors",
        "/_protected/team",
        "/_protected/vehicles",
        "/_protected/",
        "/_protected/settings/import",
        "/_protected/treecluster/$treeclusterId",
        "/_protected/treecluster/new",
        "/_protected/waypoints/new",
        "/_protected/map/",
        "/_protected/settings/",
        "/_protected/treecluster/",
        "/_protected/waypoints/",
        "/_protected/dashboard/tree/$treeId"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/_protected/debug": {
      "filePath": "_protected/debug.tsx",
      "parent": "/_protected"
    },
    "/_protected/info": {
      "filePath": "_protected/info.tsx",
      "parent": "/_protected"
    },
    "/_protected/profile": {
      "filePath": "_protected/profile.tsx",
      "parent": "/_protected"
    },
    "/_protected/sensors": {
      "filePath": "_protected/sensors.tsx",
      "parent": "/_protected"
    },
    "/_protected/team": {
      "filePath": "_protected/team.tsx",
      "parent": "/_protected"
    },
    "/_protected/vehicles": {
      "filePath": "_protected/vehicles.tsx",
      "parent": "/_protected"
    },
    "/auth/callback": {
      "filePath": "auth/callback.tsx"
    },
    "/_protected/": {
      "filePath": "_protected/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/settings/import": {
      "filePath": "_protected/settings/import.tsx",
      "parent": "/_protected"
    },
    "/_protected/treecluster/$treeclusterId": {
      "filePath": "_protected/treecluster/$treeclusterId.tsx",
      "parent": "/_protected"
    },
    "/_protected/treecluster/new": {
      "filePath": "_protected/treecluster/new.tsx",
      "parent": "/_protected"
    },
    "/_protected/waypoints/new": {
      "filePath": "_protected/waypoints/new.tsx",
      "parent": "/_protected"
    },
    "/_protected/map/": {
      "filePath": "_protected/map/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/settings/": {
      "filePath": "_protected/settings/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/treecluster/": {
      "filePath": "_protected/treecluster/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/waypoints/": {
      "filePath": "_protected/waypoints/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/dashboard/tree/$treeId": {
      "filePath": "_protected/dashboard/tree/$treeId.tsx",
      "parent": "/_protected"
    }
  }
}
ROUTE_MANIFEST_END */
