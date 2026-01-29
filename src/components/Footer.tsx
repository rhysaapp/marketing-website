import { Link } from '@tanstack/react-router'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src="/icon.svg" alt="Rhysa" className="w-8 h-8" />
              <span className="font-bold text-xl">Rhysa</span>
            </div>
            <p className="text-sm text-neutral-500">
              Simple guided breathing.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Home
            </Link>
            <Link
              to="/support"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Support
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Privacy
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            © {currentYear} Rhysa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
