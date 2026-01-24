import { Helmet } from 'react-helmet-async'

import Hero from '../components/Hero'
import Features from '../components/Features'
import AppPreview from '../components/AppPreview'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Rhysa - Simple guided breathing</title>
        <meta
          name="description"
          content="Rhysa is a calm, minimal breathing app for iOS. No accounts, no tracking, just guided breathing exercises to help you find peace."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Rhysa - Simple guided breathing" />
        <meta
          property="og:description"
          content="A calm, minimal breathing app for iOS. No accounts, no tracking, just guided breathing exercises."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rhysa.app" />
        <meta property="og:image" content="https://rhysa.app/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rhysa - Simple guided breathing" />
        <meta
          name="twitter:description"
          content="A calm, minimal breathing app for iOS. No accounts, no tracking, just guided breathing exercises."
        />
        <meta name="twitter:image" content="https://rhysa.app/og-image.png" />
      </Helmet>

      <Hero />
      <Features />
      <AppPreview />
      <CTA />
    </>
  )
}
