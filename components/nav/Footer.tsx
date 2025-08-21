export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2">
        <div>
          <div className="text-sm text-muted">Unified Pro-Am Template</div>
          <div className="text-xs text-muted mt-2">© {new Date().getFullYear()} Unified Labs</div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-sm">
          <a className="hover:text-[color:var(--primary)]" href="#">Twitter</a>
          <a className="hover:text-[color:var(--primary)]" href="#">YouTube</a>
          <a className="hover:text-[color:var(--primary)]" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
