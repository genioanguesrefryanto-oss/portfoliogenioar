import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
]

export function SiteNavbar({ className }) {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const wisataTitle = "GenioDevlop"

  const isActive = (href) => window.location.hash === href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [openMenu])

  const closeAll = () => setOpenMenu(false)

  return (
    <header className="navbar-header fixed inset-x-0 top-0 z-50">

      <div className={`navbar-bar flex items-center justify-between gap-8 px-6 mx-auto transition-all duration-500 ease-out max-lg:px-3 ${scrolled
        ? "relative mt-3 max-w-[72rem] rounded-full py-3 bg-[rgba(231,217,152,0.1)] border border-white/10 backdrop-blur-[20px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
        : "relative max-w-full rounded-none py-6 bg-gradient-to-b from-black/20 to-transparent border-b border-white/[0.01] backdrop-blur-[2px]"
      }`}>

        <a href="#home" className="navbar-brand flex items-center gap-3 font-bold no-underline">
          <h1 className="navbar-brand-text flex flex-col leading-none gap-[0.2rem] m-0">
            <span className="font-display text-[1.425rem] font-bold tracking-[0.04em] text-putih">{wisataTitle}</span>
          </h1>
        </a>

        <nav className="navbar-nav hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="navbar-nav-item relative">
              <a
                href={item.href}
                className={`navbar-nav-link group font-heading relative flex items-center gap-1 px-4 py-2 text-[0.975rem] font-bold no-underline transition-colors duration-300 hover:text-putih ${scrolled ? "text-biru" : "text-putih"} ${className}`}
              >
                {item.label}
                <span className={`navbar-nav-underline absolute bottom-1 left-4 right-4 h-[2px] bg-putih scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${isActive(item.href) ? "scale-x-100" : ""}`} />
              </a>
            </div>
          ))}
        </nav>

        <div className="navbar-actions flex items-center gap-3">
          <a href="#project" className="navbar-cta group hidden sm:flex items-center gap-2 rounded-full border border-gold/80 bg-transparent px-6 py-[0.625rem] text-sm font-semibold text-putih no-underline transition-all duration-300 hover:bg-gold hover:border-gold hover:shadow-[0_8px_30px_10px_rgba(11,11,11,0.5)]">
            PORTFOLIO
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </a>
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpenMenu(true)}
            className="navbar-hamburger flex lg:hidden items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-transparent text-putih cursor-pointer transition-colors duration-300 hover:bg-white/5"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <div
        className={`navbar-mobile fixed inset-0 z-50 flex flex-col bg-itam backdrop-blur-2xl opacity-0 pointer-events-none transition-opacity duration-500 lg:hidden ${openMenu ? "opacity-100 pointer-events-auto" : ""}`}
        aria-modal="true"
        role="dialog"
        aria-label="Navigasi mobile"
      >
        <div className="navbar-mobile-header flex items-center justify-between p-6">
          <span className="navbar-mobile-brand font-display text-lg font-semibold tracking-[0.04em] text-putih">{wisataTitle}</span>
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={closeAll}
            className="navbar-hamburger flex lg:hidden items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-transparent text-putih cursor-pointer transition-colors duration-300 hover:bg-white/5"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="navbar-mobile-nav flex flex-1 flex-col justify-center gap-1 px-8 overflow-y-auto">
          {NAV_ITEMS.map((item, i) => {
            const delay  = openMenu ? `${120 + i * 50}ms` : "0ms"
            const active = isActive(item.href)

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={closeAll}
                className={`navbar-mobile-link group flex items-center justify-between border-b border-white/5 py-4 no-underline opacity-0 translate-y-4 transition-all duration-500 ${openMenu ? "opacity-100 translate-y-0" : ""}`}
                style={{ transitionDelay: delay }}
              >
                <span className={`navbar-mobile-label font-display text-[1.875rem] font-medium text-putih transition-colors duration-300 group-hover:text-gold ${active ? "text-biru underline underline-offset-[6px]" : ""}`}>{item.label}</span>
                <ArrowUpRight size={20} className="navbar-mobile-arrow text-white/30 transition-all duration-300 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )
          })}
        </nav>

        <div className="navbar-mobile-footer p-4 pb-10">
          <a href="#project" onClick={closeAll} className="navbar-mobile-cta flex w-full items-center justify-center gap-2 rounded-full bg-biru py-4 text-base font-semibold text-putih no-underline transition-colors duration-300 hover:bg-itam">
            PORTFOLIO
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default SiteNavbar