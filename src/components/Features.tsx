const features = [
  {
    title: 'Guided breathing exercises',
    description:
      'Four carefully designed exercises to help you find calm, focus, and relaxation.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    color: 'bg-deep-breathing dark:bg-deep-breathing-dark',
  },
  {
    title: 'No login required',
    description:
      'Open the app and start breathing immediately. No accounts, no registration.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
        />
      </svg>
    ),
    color: 'bg-box-breathing dark:bg-box-breathing-dark',
  },
  {
    title: 'Minimal and focused',
    description:
      'A distraction and free experience. No notifications, no gamification, no clutter.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
    color: 'bg-478-breathing dark:bg-478-breathing-dark',
  },
  {
    title: 'Private by design',
    description:
      'Your data stays on your device. No tracking, no analytics, no data collection.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    color: 'bg-coherent-breathing dark:bg-coherent-breathing-dark',
  },
]

export default function Features() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-100/50 px-6 py-24 sm:py-32 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
            Designed for calm
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Everything you need for mindful breathing, nothing you don't.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.color} text-primary dark:text-primary-dark`}>
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
