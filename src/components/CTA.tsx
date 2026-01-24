import AppStoreBadge from './AppStoreBadge'

export default function CTA() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-100/50 px-6 py-24 sm:py-32 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
          Find your calm
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
          Download Rhysa and take a moment to breathe. It's free, private, and always available.
        </p>
        <div className="mt-10 flex justify-center">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  )
}
