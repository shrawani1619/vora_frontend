import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { NAV_LINKS, CONTACT } from "../data/content";
import Logo from "./ui/Logo";

const SOCIAL = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Logo className="h-16 w-auto md:h-20" />
              <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-white/40">
                Luxury Living Redefined
              </p>
            </motion.div>
            <p className="mt-6 text-sm leading-relaxed font-light text-white/50">
              Crafting landmark residences that embody sophistication, comfort, and
              enduring value for discerning homeowners.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.3em] uppercase text-gold">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-xs tracking-[0.3em] uppercase text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-gold" />
                {CONTACT.address}
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold"
                >
                  <HiOutlinePhone className="shrink-0 text-gold" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold"
                >
                  <HiOutlineMail className="shrink-0 text-gold" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </motion.div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.3em] uppercase text-gold">Follow Us</h4>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -4, borderColor: "rgba(200,169,107,0.6)" }}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-colors hover:text-gold"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center sm:mt-16 sm:gap-4 sm:pt-8 md:flex-row md:text-left">
          <p className="text-[11px] text-white/30 sm:text-xs">
            &copy; {new Date().getFullYear()} Vora Realtors. All rights reserved.
          </p>
          <p className="text-[11px] leading-relaxed text-white/30 sm:text-xs">
            RERA Reg. No. P02400001234 | Disclaimer: Images are for representation only.
          </p>
        </div>
      </div>
    </footer>
  );
}
