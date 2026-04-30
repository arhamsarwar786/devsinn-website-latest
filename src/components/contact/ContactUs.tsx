"use client";

import { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import type { EmailJSResponseStatus } from "@emailjs/browser";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  EMAILJS_CONFIG,
  EMAILJS_INVALID_ACCOUNT_MESSAGE,
} from "@/lib/emailjs";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";

const contactDetails = [
  {
    title: "Phone",
    value: "+92 336 5918295",
    href: "tel:+923365918295",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V20A2 2 0 0 1 19.82 22C9.86 22 2 14.14 2 4.18A2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72l.34 2.74a2 2 0 0 1-.57 1.71L7 9.99a16 16 0 0 0 7.01 7.01l1.82-1.86a2 2 0 0 1 1.71-.57l2.74.34A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "devsinntechnologies@gmail.com",
    href: "mailto:devsinntechnologies@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20C21.1 6 22 6.9 22 8V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 8L12 14L2 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Address",
    value: "H#14B-III, Butt Street, Rustam Park, Samnabad, Lahore",
    href: "https://maps.google.com/?q=H%2314B-III,+Butt+Street,+Rustam+Park,+Samnabad,+Lahore",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10C20 15.25 12 22 12 22C12 22 4 15.25 4 10A8 8 0 1 1 20 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13A3 3 0 1 0 12 7A3 3 0 0 0 12 13Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const trustHighlights = [
  { label: "Average reply", value: "Within 24h" },
  { label: "Discovery call", value: "Free Strategy" },
  { label: "Project support", value: "End-to-end" },
];

const experiencePillars = [
  "Step-by-step guidance tailored to your project",
  "Support from friendly, experienced experts",
  "Creative solutions that match your brand theme",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setError(null);
    setSuccessMessage(null);
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fname.trim()) return "First name is required.";
    if (!formData.lname.trim()) return "Last name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Enter a valid email address.";
    }
    if (!formData.phone.trim()) return "Phone number is required.";
    if (!formData.subject.trim() || formData.subject === "Choose subject") {
      return "Please select a subject.";
    }
    if (!formData.message.trim()) return "Message is required.";

    return null;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      setSuccessMessage(null);
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: `${formData.fname} ${formData.lname}`,
      from_email: formData.email,
      from_number: `+92 ${formData.phone}`,
      from_subject: formData.subject,
      message: formData.message,
      page_url: typeof window !== "undefined" ? window.location.href : "",
    };

    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )
      .then(() => {
        setFormData({ fname: "", lname: "", email: "", phone: "", subject: "", message: "" });
        setError(null);
        setSuccessMessage("Your message has been sent successfully.");
        setIsSending(false);
      })
      .catch((reason: EmailJSResponseStatus | Error | string) => {
        let nextError = "Failed to send email. Please try again.";

        if (typeof reason === "object" && reason !== null && "text" in reason && typeof reason.text === "string") {
          if (reason.text.includes("Account not found")) {
            nextError = EMAILJS_INVALID_ACCOUNT_MESSAGE;
          } else {
            nextError = reason.text;
          }
        } else if (reason instanceof Error && reason.message) {
          nextError = reason.message;
        } else if (typeof reason === "string" && reason) {
          nextError = reason;
        }

        setError(nextError);
        setSuccessMessage(null);
        setIsSending(false);
      });
  };

  return (
    <section className="relative bg-[var(--surface-0)] px-5 py-10 sm:px-8 sm:py-16 lg:px-10 xl:px-16 overflow-hidden">
      <SectionDivider />
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto w-full max-w-[1400px] rounded-[2rem] border border-white/10 bg-[var(--surface-1)] p-3 lg:p-4 shadow-[0_0_50px_rgba(56,189,248,0.05)]"
      >
        <div className="grid overflow-hidden rounded-[1.5rem] bg-[var(--surface-0)] lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[460px_minmax(0,1fr)]">
          {/* LEFT SIDE (Brand Intro) */}
          <aside className="relative overflow-hidden border-b border-r-0 lg:border-b-0 lg:border-r border-white/10 bg-[var(--surface-1)] px-5 py-6 text-white sm:px-8 sm:py-8 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_40%)]" />
            
            <div className="relative z-10">
              <motion.p variants={fadeInUp} className="inline-flex rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Let's Build Something Great
              </motion.p>
              <motion.h2 variants={fadeInUp} className="mt-3 text-[1.3rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[1.8rem] lg:text-[2.2rem]">
                Your next standout digital experience starts here.
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-2 text-[0.85rem] leading-[1.6] text-white/60 hidden sm:block">
                Share your idea and we'll shape it into a polished, user-friendly, high-converting digital experience that feels premium.
              </motion.p>
            </div>

            <motion.div 
              variants={staggerContainer} 
              className="relative z-10 mt-6 grid gap-3 sm:grid-cols-3 hidden lg:grid"
            >
              {trustHighlights.map((item) => (
                <motion.div key={item.label} variants={fadeInUp} className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--primary)] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[0.85rem] font-bold text-white">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-10 mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hidden lg:block">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--accent)] mb-5">
                Why clients love this step
              </p>
              <div className="flex flex-col gap-3">
                {experiencePillars.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[0.85rem] text-white/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="relative z-10 mt-6 space-y-3">
              {contactDetails.map((item) => (
                <motion.a key={item.title} variants={fadeInUp} href={item.href} target={item.title === "Address" ? "_blank" : undefined} rel={item.title === "Address" ? "noreferrer" : undefined} className="group flex items-center gap-3 rounded-xl border border-white/5 bg-transparent px-2 py-2 transition-colors hover:bg-white/5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--surface-0)]">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">{item.title}</span>
                    <span className="mt-0.5 block text-[0.8rem] font-medium text-white leading-tight break-all sm:break-normal">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </aside>

          {/* RIGHT SIDE (Form) */}
          <div className="relative px-5 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.05),transparent_60%)]" />

            <div className="relative z-10">
              <motion.p variants={fadeInUp} className="text-[12px] font-bold uppercase tracking-wider text-[var(--accent)]">
                Write To Us
              </motion.p>
              <motion.h3 variants={fadeInUp} className="mt-2 max-w-[620px] text-[1.5rem] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[1.8rem]">
                Let's turn your idea into something people instantly trust.
              </motion.h3>
            </div>

            <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="relative z-10 mt-6">
              {error && <div className="mb-6 rounded-xl border border-red-500/50 bg-red-500/10 px-5 py-4 text-[15px] text-red-200">{error}</div>}
              {successMessage && <div className="mb-6 rounded-xl border border-green-500/50 bg-green-500/10 px-5 py-4 text-[15px] text-green-200">{successMessage}</div>}

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-wider text-white/50">First Name</span>
                  <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} placeholder="John" className="h-11 w-full rounded-xl border border-white/10 bg-[var(--surface-1)] px-4 text-[0.9rem] text-white outline-none transition-all placeholder:text-white/20 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-wider text-white/50">Last Name</span>
                  <input type="text" name="lname" value={formData.lname} onChange={handleInputChange} placeholder="Doe" className="h-11 w-full rounded-xl border border-white/10 bg-[var(--surface-1)] px-4 text-[0.9rem] text-white outline-none transition-all placeholder:text-white/20 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-wider text-white/50">Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="h-11 w-full rounded-xl border border-white/10 bg-[var(--surface-1)] px-4 text-[0.9rem] text-white outline-none transition-all placeholder:text-white/20 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-wider text-white/50">Phone Number</span>
                  <div className="flex h-11 overflow-hidden rounded-xl border border-white/10 bg-[var(--surface-1)] transition-all focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)]">
                    <span className="flex items-center justify-center border-r border-white/10 px-4 text-[0.9rem] text-white/50">+92</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="336 5918295" className="h-full w-full bg-transparent px-3 text-[0.9rem] text-white outline-none placeholder:text-white/20" />
                  </div>
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-wider text-white/50">Subject</span>
                  <select name="subject" value={formData.subject} onChange={handleInputChange} className="h-11 w-full rounded-xl border border-white/10 bg-[var(--surface-1)] px-4 text-[0.9rem] text-white outline-none transition-all focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] appearance-none" style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}>
                    <option value="" className="bg-[var(--surface-1)]">Choose subject</option>
                    <option className="bg-[var(--surface-1)]">Web Development</option>
                    <option className="bg-[var(--surface-1)]">App Development</option>
                    <option className="bg-[var(--surface-1)]">Design Consultation</option>
                    <option className="bg-[var(--surface-1)]">General Inquiry</option>
                  </select>
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-wider text-white/50">Message</span>
                  <textarea rows={4} name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us a little about your project, goals, or timeline." className="w-full rounded-xl border border-white/10 bg-[var(--surface-1)] p-4 text-[0.9rem] text-white outline-none transition-all placeholder:text-white/20 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]" />
                </label>
              </div>

              <div className="mt-6 flex justify-end">
                <Button type="submit" loading={isSending} loadingLabel="Sending..." className="w-full sm:w-auto min-w-[200px] h-[56px] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--surface-0)] text-[16px] font-bold border-none transition-transform hover:scale-105">
                  Send Message
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
