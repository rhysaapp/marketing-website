import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <div className='w-8 h-8 rounded-[28px] shadow-2xl overflow-hidden'>
            <img src="/icon.svg" alt="Rhysa" className="w-full h-full" />
          </div>
          <span className="hidden sm:inline font-bold text-xl text-magpie-black">Rhysa</span>
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/support"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
