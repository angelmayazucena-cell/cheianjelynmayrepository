function Navbar() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        aria-label="Main navigation"
        className="flex w-full items-center justify-between rounded-[10px] border border-[#d9c6b8] bg-[#fbf4ee] px-4 py-3 shadow-[0_8px_24px_rgba(87,67,55,0.10)]"
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3d8cc] ring-1 ring-[#d7b6a7]">
            <svg
              viewBox="0 0 48 48"
              className="h-6 w-6 text-[#815f55]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="20" cy="33" r="6" stroke="currentColor" strokeWidth="2.4" />
              <circle cx="33" cy="28" r="6" stroke="currentColor" strokeWidth="2.4" />
              <path
                d="M26 33V11.5C26 10.7 26.7 10 27.5 10H33"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M33 10V28"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M20 33V13.2C20 12.4 20.7 11.7 21.5 11.7H26"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="text-[0.95rem] font-semibold uppercase tracking-[0.22em] text-[#6b554d]">
            MusicReco
          </span>
        </a>

        <div className="flex items-center gap-1.5 rounded-full bg-[#f7ebe3] p-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative rounded-full px-3 py-2 text-sm font-medium text-[#6d5a51] transition-colors duration-200 hover:bg-[#f2d8cb] hover:text-[#54413a] focus:outline-none focus:ring-2 focus:ring-[#c89f8d] focus:ring-offset-2"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-2 bottom-1.5 h-px origin-left scale-x-0 bg-[#9f7d6c] transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
