import AppStoreBadge from './AppStoreBadge'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:py-40">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent dark:from-primary-dark/10" />
        <div className="absolute right-0 top-0 h-125 w-125 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary-dark/10" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-100">
          Simple guided breathing
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          A calm space to breathe. No accounts, no distractions.
        </p>
        <div className="mt-10 flex justify-center">
          <AppStoreBadge />
        </div>
      </div>

      {/* Decorative breathing circles */}
      {/* <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="relative h-64 w-64 sm:h-80 sm:w-80">
          <div className="absolute inset-0 animate-pulse rounded-full border border-primary/20 dark:border-primary-dark/20" />
          <div className="absolute inset-4 animate-pulse rounded-full border border-primary/15 [animation-delay:200ms] dark:border-primary-dark/15" />
          <div className="absolute inset-8 animate-pulse rounded-full border border-primary/10 [animation-delay:400ms] dark:border-primary-dark/10" />
        </div>
      </div> */}
    </section>
  )
}
