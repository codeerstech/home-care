import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/Layout'
import { MotionPage } from './components/Motion'
import { routeMetaByPath } from './data/routes'
import { CareSeoPageRoute, CareServiceDetailPage, HomeCarePage } from './pages/HomeCarePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { seoPages } from './template/careServices'
import { TemplateProvider } from './template/TemplateProvider'
import { site } from './template/content'

function ScrollAndMeta() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    const meta = routeMetaByPath.get(location.pathname)
    document.title = meta ? `${meta.title} | ${site.brand.name}` : site.brand.name
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) {
      description.content =
        meta?.description ??
        `${site.brand.name} helps families book verified caregivers, nurses, attendants, physiotherapists, baby care specialists, and home healthcare staff.`
    }
  }, [location.hash, location.pathname])

  return null
}

function AppRoutes() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollAndMeta />
      <AnimatePresence mode="wait">
        <MotionPage key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomeCarePage />} />
            {seoPages.map((page) => (
              <Route key={page.path} path={page.path} element={<CareSeoPageRoute />} />
            ))}
            <Route path="/services/:slug" element={<CareServiceDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MotionPage>
      </AnimatePresence>
    </Layout>
  )
}

export default function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TemplateProvider>
  )
}
