import { Outlet } from '@tanstack/react-router'
import { HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <HelmetProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
