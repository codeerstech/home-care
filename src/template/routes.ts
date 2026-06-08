import { routeMeta } from './careServices'
import { allMarketingPages } from './pages'

export const locationPrefixes: string[] = []
export const featureRouteHints: string[] = []
export const routeManifest = [
  ...routeMeta,
  ...allMarketingPages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    pageType: page.pageType,
    category: page.category,
    sourceUrl: page.sourceUrl,
  })),
]
export const routeMetaByPath = new Map(routeManifest.map((route) => [route.path, route]))
