/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LogoutImport } from './routes/logout'
import { Route as LoginImport } from './routes/login'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as IndexImport } from './routes/index'
import { Route as AuthCallbackImport } from './routes/auth/callback'
import { Route as ProtectedVehiclesImport } from './routes/_protected/vehicles'
import { Route as ProtectedTeamImport } from './routes/_protected/team'
import { Route as ProtectedSensorsImport } from './routes/_protected/sensors'
import { Route as ProtectedProfileImport } from './routes/_protected/profile'
import { Route as ProtectedMapImport } from './routes/_protected/map'
import { Route as ProtectedInfoImport } from './routes/_protected/info'
import { Route as ProtectedDebugImport } from './routes/_protected/debug'
import { Route as ProtectedDashboardImport } from './routes/_protected/dashboard'
import { Route as ProtectedWaypointsIndexImport } from './routes/_protected/waypoints/index'
import { Route as ProtectedTreeclusterIndexImport } from './routes/_protected/treecluster/index'
import { Route as ProtectedSettingsIndexImport } from './routes/_protected/settings/index'
import { Route as ProtectedMapIndexImport } from './routes/_protected/map/index'
import { Route as ProtectedWaypointsNewImport } from './routes/_protected/waypoints/new'
import { Route as ProtectedTreesTreeIdImport } from './routes/_protected/trees/$treeId'
import { Route as ProtectedTreeclusterFormularImport } from './routes/_protected/treecluster/_formular'
import { Route as ProtectedTreeclusterTreeclusterIdImport } from './routes/_protected/treecluster/$treeclusterId'
import { Route as ProtectedTreeNewImport } from './routes/_protected/tree/new'
import { Route as ProtectedSettingsImportImport } from './routes/_protected/settings/import'
import { Route as ProtectedTreeclusterFormularNewImport } from './routes/_protected/treecluster/_formular/new'
import { Route as ProtectedMapTreeNewImport } from './routes/_protected/map/tree/new'
import { Route as ProtectedTreeclusterFormularTreeclusterEditImport } from './routes/_protected/treecluster/_formular/$treecluster.edit'
import { Route as ProtectedMapTreeclusterSelectTreeImport } from './routes/_protected/map/treecluster/select.tree'

// Create Virtual Routes

const ProtectedTreeclusterImport = createFileRoute('/_protected/treecluster')()

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

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedTreeclusterRoute = ProtectedTreeclusterImport.update({
  path: '/treecluster',
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

const ProtectedMapRoute = ProtectedMapImport.update({
  path: '/map',
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

const ProtectedDashboardRoute = ProtectedDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedWaypointsIndexRoute = ProtectedWaypointsIndexImport.update({
  path: '/waypoints/',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTreeclusterIndexRoute = ProtectedTreeclusterIndexImport.update({
  path: '/',
  getParentRoute: () => ProtectedTreeclusterRoute,
} as any)

const ProtectedSettingsIndexRoute = ProtectedSettingsIndexImport.update({
  path: '/settings/',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedMapIndexRoute = ProtectedMapIndexImport.update({
  path: '/',
  getParentRoute: () => ProtectedMapRoute,
} as any)

const ProtectedWaypointsNewRoute = ProtectedWaypointsNewImport.update({
  path: '/waypoints/new',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTreesTreeIdRoute = ProtectedTreesTreeIdImport.update({
  path: '/trees/$treeId',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTreeclusterFormularRoute =
  ProtectedTreeclusterFormularImport.update({
    id: '/_formular',
    getParentRoute: () => ProtectedTreeclusterRoute,
  } as any)

const ProtectedTreeclusterTreeclusterIdRoute =
  ProtectedTreeclusterTreeclusterIdImport.update({
    path: '/treecluster/$treeclusterId',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ProtectedTreeNewRoute = ProtectedTreeNewImport.update({
  path: '/tree/new',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedSettingsImportRoute = ProtectedSettingsImportImport.update({
  path: '/settings/import',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedTreeclusterFormularNewRoute =
  ProtectedTreeclusterFormularNewImport.update({
    path: '/new',
    getParentRoute: () => ProtectedTreeclusterFormularRoute,
  } as any)

const ProtectedMapTreeNewRoute = ProtectedMapTreeNewImport.update({
  path: '/tree/new',
  getParentRoute: () => ProtectedMapRoute,
} as any)

const ProtectedTreeclusterFormularTreeclusterEditRoute =
  ProtectedTreeclusterFormularTreeclusterEditImport.update({
    path: '/$treecluster/edit',
    getParentRoute: () => ProtectedTreeclusterFormularRoute,
  } as any)

const ProtectedMapTreeclusterSelectTreeRoute =
  ProtectedMapTreeclusterSelectTreeImport.update({
    path: '/treecluster/select/tree',
    getParentRoute: () => ProtectedMapRoute,
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
    '/_protected/dashboard': {
      id: '/_protected/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof ProtectedDashboardImport
      parentRoute: typeof ProtectedImport
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
    '/_protected/map': {
      id: '/_protected/map'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof ProtectedMapImport
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
    '/_protected/settings/import': {
      id: '/_protected/settings/import'
      path: '/settings/import'
      fullPath: '/settings/import'
      preLoaderRoute: typeof ProtectedSettingsImportImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/tree/new': {
      id: '/_protected/tree/new'
      path: '/tree/new'
      fullPath: '/tree/new'
      preLoaderRoute: typeof ProtectedTreeNewImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/treecluster/$treeclusterId': {
      id: '/_protected/treecluster/$treeclusterId'
      path: '/treecluster/$treeclusterId'
      fullPath: '/treecluster/$treeclusterId'
      preLoaderRoute: typeof ProtectedTreeclusterTreeclusterIdImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/treecluster': {
      id: '/_protected/treecluster'
      path: '/treecluster'
      fullPath: '/treecluster'
      preLoaderRoute: typeof ProtectedTreeclusterImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/treecluster/_formular': {
      id: '/_protected/treecluster/_formular'
      path: '/treecluster'
      fullPath: '/treecluster'
      preLoaderRoute: typeof ProtectedTreeclusterFormularImport
      parentRoute: typeof ProtectedTreeclusterRoute
    }
    '/_protected/trees/$treeId': {
      id: '/_protected/trees/$treeId'
      path: '/trees/$treeId'
      fullPath: '/trees/$treeId'
      preLoaderRoute: typeof ProtectedTreesTreeIdImport
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
      path: '/'
      fullPath: '/map/'
      preLoaderRoute: typeof ProtectedMapIndexImport
      parentRoute: typeof ProtectedMapImport
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
      path: '/'
      fullPath: '/treecluster/'
      preLoaderRoute: typeof ProtectedTreeclusterIndexImport
      parentRoute: typeof ProtectedTreeclusterImport
    }
    '/_protected/waypoints/': {
      id: '/_protected/waypoints/'
      path: '/waypoints'
      fullPath: '/waypoints'
      preLoaderRoute: typeof ProtectedWaypointsIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/map/tree/new': {
      id: '/_protected/map/tree/new'
      path: '/tree/new'
      fullPath: '/map/tree/new'
      preLoaderRoute: typeof ProtectedMapTreeNewImport
      parentRoute: typeof ProtectedMapImport
    }
    '/_protected/treecluster/_formular/new': {
      id: '/_protected/treecluster/_formular/new'
      path: '/new'
      fullPath: '/treecluster/new'
      preLoaderRoute: typeof ProtectedTreeclusterFormularNewImport
      parentRoute: typeof ProtectedTreeclusterFormularImport
    }
    '/_protected/map/treecluster/select/tree': {
      id: '/_protected/map/treecluster/select/tree'
      path: '/treecluster/select/tree'
      fullPath: '/map/treecluster/select/tree'
      preLoaderRoute: typeof ProtectedMapTreeclusterSelectTreeImport
      parentRoute: typeof ProtectedMapImport
    }
    '/_protected/treecluster/_formular/$treecluster/edit': {
      id: '/_protected/treecluster/_formular/$treecluster/edit'
      path: '/$treecluster/edit'
      fullPath: '/treecluster/$treecluster/edit'
      preLoaderRoute: typeof ProtectedTreeclusterFormularTreeclusterEditImport
      parentRoute: typeof ProtectedTreeclusterFormularImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ProtectedRoute: ProtectedRoute.addChildren({
    ProtectedDashboardRoute,
    ProtectedDebugRoute,
    ProtectedInfoRoute,
    ProtectedMapRoute: ProtectedMapRoute.addChildren({
      ProtectedMapIndexRoute,
      ProtectedMapTreeNewRoute,
      ProtectedMapTreeclusterSelectTreeRoute,
    }),
    ProtectedProfileRoute,
    ProtectedSensorsRoute,
    ProtectedTeamRoute,
    ProtectedVehiclesRoute,
    ProtectedSettingsImportRoute,
    ProtectedTreeNewRoute,
    ProtectedTreeclusterTreeclusterIdRoute,
    ProtectedTreeclusterRoute: ProtectedTreeclusterRoute.addChildren({
      ProtectedTreeclusterFormularRoute:
        ProtectedTreeclusterFormularRoute.addChildren({
          ProtectedTreeclusterFormularNewRoute,
          ProtectedTreeclusterFormularTreeclusterEditRoute,
        }),
      ProtectedTreeclusterIndexRoute,
    }),
    ProtectedTreesTreeIdRoute,
    ProtectedWaypointsNewRoute,
    ProtectedSettingsIndexRoute,
    ProtectedWaypointsIndexRoute,
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
        "/",
        "/_protected",
        "/login",
        "/logout",
        "/auth/callback"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/dashboard",
        "/_protected/debug",
        "/_protected/info",
        "/_protected/map",
        "/_protected/profile",
        "/_protected/sensors",
        "/_protected/team",
        "/_protected/vehicles",
        "/_protected/settings/import",
        "/_protected/tree/new",
        "/_protected/treecluster/$treeclusterId",
        "/_protected/treecluster",
        "/_protected/trees/$treeId",
        "/_protected/waypoints/new",
        "/_protected/settings/",
        "/_protected/waypoints/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/_protected/dashboard": {
      "filePath": "_protected/dashboard.tsx",
      "parent": "/_protected"
    },
    "/_protected/debug": {
      "filePath": "_protected/debug.tsx",
      "parent": "/_protected"
    },
    "/_protected/info": {
      "filePath": "_protected/info.tsx",
      "parent": "/_protected"
    },
    "/_protected/map": {
      "filePath": "_protected/map.tsx",
      "parent": "/_protected",
      "children": [
        "/_protected/map/",
        "/_protected/map/tree/new",
        "/_protected/map/treecluster/select/tree"
      ]
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
    "/_protected/settings/import": {
      "filePath": "_protected/settings/import.tsx",
      "parent": "/_protected"
    },
    "/_protected/tree/new": {
      "filePath": "_protected/tree/new.tsx",
      "parent": "/_protected"
    },
    "/_protected/treecluster/$treeclusterId": {
      "filePath": "_protected/treecluster/$treeclusterId.tsx",
      "parent": "/_protected"
    },
    "/_protected/treecluster": {
      "filePath": "_protected/treecluster",
      "parent": "/_protected",
      "children": [
        "/_protected/treecluster/_formular",
        "/_protected/treecluster/"
      ]
    },
    "/_protected/treecluster/_formular": {
      "filePath": "_protected/treecluster/_formular.tsx",
      "parent": "/_protected/treecluster",
      "children": [
        "/_protected/treecluster/_formular/new",
        "/_protected/treecluster/_formular/$treecluster/edit"
      ]
    },
    "/_protected/trees/$treeId": {
      "filePath": "_protected/trees/$treeId.tsx",
      "parent": "/_protected"
    },
    "/_protected/waypoints/new": {
      "filePath": "_protected/waypoints/new.tsx",
      "parent": "/_protected"
    },
    "/_protected/map/": {
      "filePath": "_protected/map/index.tsx",
      "parent": "/_protected/map"
    },
    "/_protected/settings/": {
      "filePath": "_protected/settings/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/treecluster/": {
      "filePath": "_protected/treecluster/index.tsx",
      "parent": "/_protected/treecluster"
    },
    "/_protected/waypoints/": {
      "filePath": "_protected/waypoints/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/map/tree/new": {
      "filePath": "_protected/map/tree/new.tsx",
      "parent": "/_protected/map"
    },
    "/_protected/treecluster/_formular/new": {
      "filePath": "_protected/treecluster/_formular/new.tsx",
      "parent": "/_protected/treecluster/_formular"
    },
    "/_protected/map/treecluster/select/tree": {
      "filePath": "_protected/map/treecluster/select.tree.tsx",
      "parent": "/_protected/map"
    },
    "/_protected/treecluster/_formular/$treecluster/edit": {
      "filePath": "_protected/treecluster/_formular/$treecluster.edit.tsx",
      "parent": "/_protected/treecluster/_formular"
    }
  }
}
ROUTE_MANIFEST_END */
