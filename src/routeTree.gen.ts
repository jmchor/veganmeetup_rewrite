/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VeganmeetupImport } from './routes/veganmeetup'
import { Route as TimelineImport } from './routes/timeline'
import { Route as RessourcesImport } from './routes/ressources'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as EventsEventidImport } from './routes/events.$eventid'

// Create/Update Routes

const VeganmeetupRoute = VeganmeetupImport.update({
  path: '/veganmeetup',
  getParentRoute: () => rootRoute,
} as any)

const TimelineRoute = TimelineImport.update({
  path: '/timeline',
  getParentRoute: () => rootRoute,
} as any)

const RessourcesRoute = RessourcesImport.update({
  path: '/ressources',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EventsEventidRoute = EventsEventidImport.update({
  path: '/events/$eventid',
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/ressources': {
      id: '/ressources'
      path: '/ressources'
      fullPath: '/ressources'
      preLoaderRoute: typeof RessourcesImport
      parentRoute: typeof rootRoute
    }
    '/timeline': {
      id: '/timeline'
      path: '/timeline'
      fullPath: '/timeline'
      preLoaderRoute: typeof TimelineImport
      parentRoute: typeof rootRoute
    }
    '/veganmeetup': {
      id: '/veganmeetup'
      path: '/veganmeetup'
      fullPath: '/veganmeetup'
      preLoaderRoute: typeof VeganmeetupImport
      parentRoute: typeof rootRoute
    }
    '/events/$eventid': {
      id: '/events/$eventid'
      path: '/events/$eventid'
      fullPath: '/events/$eventid'
      preLoaderRoute: typeof EventsEventidImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  RessourcesRoute,
  TimelineRoute,
  VeganmeetupRoute,
  EventsEventidRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/ressources",
        "/timeline",
        "/veganmeetup",
        "/events/$eventid"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/ressources": {
      "filePath": "ressources.tsx"
    },
    "/timeline": {
      "filePath": "timeline.tsx"
    },
    "/veganmeetup": {
      "filePath": "veganmeetup.tsx"
    },
    "/events/$eventid": {
      "filePath": "events.$eventid.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
