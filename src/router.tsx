import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'

import Layout from './components/Layout'

import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import SupportPage from './pages/SupportPage'

// Create the root route
const rootRoute = createRootRoute({
  component: Layout,
})

// Create the home route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

// Create the privacy route
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyPage,
})

// Create the support route
const supportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/support',
  component: SupportPage,
})

// Create the route tree
const routeTree = rootRoute.addChildren([homeRoute, privacyRoute, supportRoute])

// Create the router
export const router = createRouter({ routeTree, scrollRestoration: true })

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
