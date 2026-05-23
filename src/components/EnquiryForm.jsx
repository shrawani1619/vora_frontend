import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="section-padding relative bg-charcoal">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Schedule Your Private Tour"
              subtitle="Experience Vora Signature Residences firsthand. Our relationship managers are ready to assist you."
              align="left"
            />

            <div className="space-y-6">
              {[
                { label: "Sales Gallery Hours", value: "10:00 AM – 7:00 PM, All Days" },
                { label: "Virtual Tour", value: "Available on Request" },
                { label: "Response Time", value: "Within 2 Hours" },
              ].map((item) => (
                <motion.div key={item.label} className="border-l border-gold/30 pl-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40">{item.label}</p>
                  <p className="mt-1 text-white/80">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-sm p-5 sm:p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <p className="font-display text-3xl text-gold">Thank You</p>
                <p className="mt-4 text-white/60">
                  Our team will contact you shortly to confirm your site visit.
                </p>
              </motion.div>
            ) : (
              <>
                <motion.div
                  className="grid gap-6 md:grid-cols-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your name", full: false },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", full: false },
                    { name: "email", label: "Email Address", type: "email", placeholder: "you@email.com", full: true },
                  ].map((field) => (
                    <motion.div
                      key={field.name}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      className={field.full ? "md:col-span-2" : ""}
                    >
                      <label htmlFor={field.name} className="mb-2 block text-xs tracking-[0.15em] uppercase text-white/50">
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/25 outline-none transition-colors focus:border-gold/50"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <label htmlFor="message" className="mb-2 block text-xs tracking-[0.15em] uppercase text-white/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your preferences..."
                    className="w-full resize-none border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/25 outline-none transition-colors focus:border-gold/50"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary mt-8 w-full"
                >
                  Book Site Visit
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
