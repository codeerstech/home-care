import { routeMeta } from './careServices'

export const locationPrefixes: string[] = []
export const featureRouteHints: string[] = []
export const routeManifest = routeMeta
export const routeMetaByPath = new Map(routeManifest.map((route) => [route.path, route]))
