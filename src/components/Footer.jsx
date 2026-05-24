import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { NAV_LINKS, CONTACT, SOCIAL_LINKS } from "../data/content";
import Logo from "./ui/Logo";

const ease = [0.22, 1, 0.36, 1];

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

function ContactItem({ icon: Icon, children, href }) {
  const content = (
    <>
      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center text-gold-dark">
        <Icon size={16} strokeWidth={1.5} />
      </span>
      <span className="min-w-0 flex-1 pt-px text-sm font-medium leading-snug text-charcoal/85">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="group flex items-center gap-2.5 transition-colors duration-500 hover:text-blue"
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-2.5">
      {content}
    </li>
  );
}

function FooterColumn({ title, children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      <p className="text-gold-label text-[10px] uppercase tracking-[0.32em]">{title}</p>
      <div className="mt-1 h-px w-10 bg-gradient-to-r from-gold-bright to-transparent" />
      <div className="mt-6">{children}</div>
    </motion.div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-charcoal">
      {/* CTA band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue via-blue-dark to-[#083a7a] px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(200,169,107,0.35) 0%, transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 40%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="footer-cta-glass relative mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 rounded-sm px-8 py-10 sm:flex-row sm:items-center sm:px-12 sm:py-12"
        >
          <div>
            <p className="text-[10px] font-semibold tracking-[0.32em] text-gold-bright uppercase">
              Private Consultation
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Experience Vora Signature
            </h3>
            <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-white/75">
              Schedule an exclusive site visit with our relationship managers.
            </p>
          </div>
          <a
            href="#enquiry"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#enquiry");
            }}
            className="btn-footer-gold group shrink-0"
          >
            Book Site Visit
            <HiOutlineArrowRight
              className="transition-transform duration-500 group-hover:translate-x-1"
              size={16}
            />
          </a>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="border-t-2 border-gold-bright/30 bg-white">
        <div className="container-luxury px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <FooterColumn title="Vora Realtors" className="sm:col-span-2 lg:col-span-4" delay={0}>
              <Logo className="h-20 w-auto sm:h-24" />
              <p className="mt-6 max-w-sm text-sm font-medium leading-[1.85] text-charcoal/80">
                Crafting landmark residences for discerning homeowners across Hyderabad&apos;s
                most prestigious corridors since 2010.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="footer-social"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </FooterColumn>

            <FooterColumn title="Explore" className="lg:col-span-2" delay={0.08}>
              <ul className="space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact" className="lg:col-span-3" delay={0.12}>
              <ul className="flex flex-col gap-3">
                <ContactItem icon={HiOutlineLocationMarker}>{CONTACT.address}</ContactItem>
                <ContactItem icon={HiOutlinePhone} href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                  {CONTACT.phone}
                </ContactItem>
                <ContactItem icon={HiOutlineMail} href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </ContactItem>
              </ul>
            </FooterColumn>

            <FooterColumn title="Compliance" className="lg:col-span-3" delay={0.16}>
              <div className="rounded-sm border border-charcoal/8 bg-warm-white/80 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold tracking-[0.24em] text-charcoal/60 uppercase">
                  RERA Registration
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-blue">{CONTACT.rera}</p>
                <p className="mt-4 text-xs font-medium leading-relaxed text-charcoal/65">
                  Images, renders, and specifications are indicative. Subject to approval and
                  availability.
                </p>
              </div>
            </FooterColumn>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 border-t border-charcoal/10 pt-8 sm:mt-20"
          >
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <p className="text-xs font-medium text-charcoal/65">
                &copy; {year} Vora Realtors. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-end">
                <a href="#hero" className="footer-link text-xs">
                  Privacy Policy
                </a>
                <span className="hidden h-3 w-px bg-charcoal/15 sm:block" aria-hidden />
                <a href="#hero" className="footer-link text-xs">
                  Terms of Use
                </a>
                <span className="hidden h-3 w-px bg-charcoal/15 sm:block" aria-hidden />
                <span className="text-xs font-medium tracking-wide text-gold-dark">
                  Luxury Redefined
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
