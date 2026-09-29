import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Buy", href: "#intent" },
  { label: "Sell", href: "#intent" },
  { label: "Rent", href: "#intent" },
  { label: "Lease", href: "#intent" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 transition-all duration-500 sm:px-8 sm:py-4 lg:gap-4 lg:px-10 ${
          scrolled
            ? "bg-ivory/95 shadow-[0_10px_40px_-18px_rgba(16,35,63,0.18)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a href="#home" className="flex min-w-0 shrink-0 items-center gap-2 leading-none sm:gap-3">
          <img
            src="/ChatGPT%20Image%20Sep%2029,%202026,%2010_46_59%20AM.png"
            alt="Mahaluxmi Properties logo"
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11 xl:h-12 xl:w-12"
          />
          <div className="flex min-w-0 flex-col justify-center leading-tight">
            <span
              className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              MAHALUXMI PROPERTIES
            </span>
            <span
              className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] ${
                scrolled ? "text-stone" : "text-white/75"
              }`}
            >
              PROPERTY ADVISORS
            </span>
          </div>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 xl:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.08em] transition-colors ${
                scrolled ? "text-navy/80 hover:text-navy" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a
            href="tel:08221900054"
            className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium ${scrolled ? "text-navy" : "text-white"}`}
          >
            <Phone size={15} />
            08221900054
          </a>
          <a
            href="#intent"
            className="whitespace-nowrap rounded-full bg-navy px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-light"
          >
            Find Property
          </a>
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex xl:hidden">
          <a
            href="tel:08221900054"
            className={`flex items-center gap-1.5 whitespace-nowrap text-xs font-medium ${scrolled ? "text-navy" : "text-white"}`}
          >
            <Phone size={15} />
            08221900054
          </a>
          <a
            href="#intent"
            className="whitespace-nowrap rounded-full bg-navy px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-light"
          >
            Find Property
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`shrink-0 xl:hidden ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-champagne/40 bg-ivory px-6 py-6 xl:hidden">
          <nav className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-navy/85"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
            <a
              href="tel:08221900054"
              className="flex items-center justify-center gap-2 rounded-full border border-navy/20 px-5 py-3 text-sm font-medium text-navy"
            >
              <Phone size={16} />
              08221900054
            </a>
            <a
              href="#intent"
              onClick={() => setOpen(false)}
              className="rounded-full bg-navy px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
            >
              Find Property
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
