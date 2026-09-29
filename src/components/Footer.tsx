import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-semibold text-navy">Mahaluxmi Properties</span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.35em] text-stone">
              Property Advisors
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone">
              Trusted real-estate expertise in Panipat and nearby Haryana regions since 1997.
            </p>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              { label: "Home", href: "#home" },
              { label: "Properties", href: "#properties" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ]}
          />

          <FooterCol
            title="Property"
            links={[
              { label: "Buy", href: "#intent" },
              { label: "Sell", href: "#intent" },
              { label: "Rent", href: "#intent" },
              { label: "Lease", href: "#intent" },
            ]}
          />

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-stone">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-blue" />
                <a href="tel:08221900054" className="hover:text-navy">
                  08221900054
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-blue" />
                <a href="mailto:mahaluxmiproperties@gmail.com" className="hover:text-navy">
                  mahaluxmiproperties@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-blue" />
                <span>
                  Villa No A, 145, TDI city, Panipat, Faridpur, Haryana 132140
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-champagne/50 pt-8 text-center text-xs text-stone">
          &copy; 2026 Mahaluxmi Properties. All Rights Reserved.
          <p className="mt-2 text-[11px] text-stone/80">Built &amp; Designed by Himanshu Aryann</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-stone">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition-colors hover:text-navy">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
