import { Helmet } from 'react-helmet'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Rhysa</title>
        <meta
          name="description"
          content="Rhysa's privacy policy. We don't collect any personal data. Your breathing practice stays private."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - Rhysa" />
        <meta
          property="og:description"
          content="Rhysa's privacy policy. We don't collect any personal data."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rhysa.app/privacy" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - Rhysa" />
        <meta
          name="twitter:description"
          content="Rhysa's privacy policy. We don't collect any personal data."
        />
      </Helmet>

      <div className="px-6 py-16 sm:py-24">
        <article className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            Last updated: January 2026
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                Our commitment to privacy
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Rhysa is designed with privacy as a core principle. We believe your breathing
                practice is personal, and your data should stay that way.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                No accounts required
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Rhysa does not require you to create an account. There's no sign up process, no
                email collection, and no personal information needed to use the app. Simply
                download and start breathing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                No data collection
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                We do not collect, store, or transmit any personal data. Rhysa operates entirely
                on your device. Your preferences and any settings are stored locally on your
                iPhone and are never sent to our servers or any third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                No analytics or tracking
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Rhysa does not include any analytics, tracking, or advertising SDKs. We don't
                track how you use the app, when you use it, or which exercises you prefer. Your
                breathing practice is yours alone.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                Offline-first design
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Rhysa works completely offline. The app doesn't require an internet connection
                to function. All breathing exercises and features are available without
                connectivity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                Future updates
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                If we ever introduce premium features in the future, purchases will be handled
                securely through the App Store. We will never have access to your payment
                information. This privacy policy will be updated to reflect any changes.
              </p>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
