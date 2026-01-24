import { Link } from '@tanstack/react-router'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <span className="text-lg font-extrabold text-neutral-900 dark:text-neutral-100">
              Rhysa
            </span>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Simple guided breathing.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Home
            </Link>
            <Link
              to="/support"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Support
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Privacy
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8 text-center dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {currentYear} Rhysa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
