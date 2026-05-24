import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";

const fieldClass =
  "w-full border-0 border-b border-charcoal/20 bg-transparent py-4 font-medium text-charcoal placeholder:text-charcoal/45 outline-none transition-colors duration-500 focus:border-blue";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [done, setDone] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="enquiry" className="section-luxury bg-beige">
      <div className="container-luxury">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <span className="text-gold-label text-[10px] uppercase">Private Consultation</span>
            <div className="gold-line my-6" />
            <h2 className="font-display text-3xl font-semibold leading-[1.1] text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
              Reserve Your
              <br />
              Site Visit
            </h2>
            <p className="mt-8 text-sm font-medium leading-[1.85] text-charcoal/85 sm:text-base">
              Our relationship managers offer personalised walkthroughs, virtual tours, and
              bespoke consultation — by appointment only.
            </p>
            <ul className="mt-10 space-y-4 text-sm font-medium text-charcoal/85">
              <li className="flex gap-4 border-l border-gold-bright/50 pl-4">
                Gallery hours: 10 AM – 7 PM
              </li>
              <li className="flex gap-4 border-l border-gold-bright/50 pl-4">
                Response within 2 hours
              </li>
            </ul>
          </Reveal>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-luxury p-8 sm:p-12 lg:col-span-7"
          >
            {done ? (
              <div className="py-16 text-center">
                <p className="font-display text-3xl text-blue">Thank You</p>
                <p className="mt-4 text-sm font-medium text-charcoal/85">
                  We will contact you shortly to confirm your private tour.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-8 sm:grid-cols-2">
                  {[
                    { id: "name", label: "Full Name", type: "text" },
                    { id: "phone", label: "Phone", type: "tel" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="text-[10px] tracking-[0.28em] uppercase text-gray">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required
                        value={form[f.id]}
                        onChange={onChange}
                        className={fieldClass}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <label htmlFor="email" className="text-[10px] font-semibold tracking-[0.28em] uppercase text-charcoal/75">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className={fieldClass}
                  />
                </div>
                <div className="mt-8">
                  <label htmlFor="message" className="text-[10px] font-semibold tracking-[0.28em] uppercase text-charcoal/75">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={onChange}
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-luxury-primary mt-10 w-full"
                >
                  Book Site Visit
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
