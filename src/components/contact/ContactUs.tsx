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

const contactDetails = [
  {
    title: "Phone",
    value: "+92 336 5918295",
    href: "tel:+923365918295",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M22 16.92V20A2 2 0 0 1 19.82 22C9.86 22 2 14.14 2 4.18A2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72l.34 2.74a2 2 0 0 1-.57 1.71L7 9.99a16 16 0 0 0 7.01 7.01l1.82-1.86a2 2 0 0 1 1.71-.57l2.74.34A2 2 0 0 1 22 16.92Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "info@devsinntechnologies.com",
    href: "mailto:info@devsinntechnologies.com",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 6H20C21.1 6 22 6.9 22 8V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 8L12 14L2 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Address",
    value: "H#14B-III, Butt Street, Rustam Park, Samnabad, Lahore",
    href: "https://maps.google.com/?q=H%2314B-III,+Butt+Street,+Rustam+Park,+Samnabad,+Lahore",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 10C20 15.25 12 22 12 22C12 22 4 15.25 4 10A8 8 0 1 1 20 10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13A3 3 0 1 0 12 7A3 3 0 0 0 12 13Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setError(null);
        setSuccessMessage("Your message has been sent successfully.");
        setIsSending(false);
      })
      .catch((reason: EmailJSResponseStatus | Error | string) => {
        let nextError = "Failed to send email. Please try again.";

        if (
          typeof reason === "object" &&
          reason !== null &&
          "text" in reason &&
          typeof reason.text === "string"
        ) {
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
    <section className="bg-[linear-gradient(180deg,#eef5ff_0%,#f4f8ff_34%,#ffffff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto w-full max-w-[1350px] rounded-[36px] border border-[#d8e5f4] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(246,250,255,0.96)_100%)] p-3 shadow-[0_30px_100px_rgba(16,38,79,0.1)] backdrop-blur-sm sm:p-5 lg:p-6"
      >
        <div className="grid overflow-hidden rounded-[32px] bg-white lg:grid-cols-[440px_minmax(0,1fr)] xl:grid-cols-[500px_minmax(0,1fr)]">
          <aside className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#0c2146_0%,#163561_40%,#102a4f_100%)] px-6 py-8 text-white sm:px-8 sm:py-10 lg:min-h-[820px] lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,223,242,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(77,140,255,0.22),transparent_30%),linear-gradient(145deg,transparent_0%,transparent_58%,rgba(255,255,255,0.04)_58.4%,transparent_59%)]" />
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/12 sm:h-32 sm:w-32" />
            <div className="absolute bottom-8 right-8 h-18 w-18 rounded-full bg-[#245ca0]/55 blur-[2px]" />
            <div className="absolute bottom-20 left-10 h-px w-28 bg-white/12" />
            <div className="absolute left-10 top-[48%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(126,223,255,0.24),rgba(126,223,255,0.02)_66%,transparent_72%)]" />
            <div className="absolute left-[18%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#8cecff] shadow-[0_0_20px_rgba(126,223,255,0.7)]" />
            <div className="absolute right-[22%] top-[30%] h-3 w-3 rounded-full bg-[#73b1ff] shadow-[0_0_22px_rgba(115,177,255,0.55)]" />
            <div className="absolute bottom-[18%] left-[22%] h-2.5 w-2.5 rounded-full bg-[#a4f7ff] shadow-[0_0_20px_rgba(164,247,255,0.55)]" />

            <div className="relative">
              <motion.p variants={fadeInUp} className="inline-flex rounded-full border border-[#7edfff]/22 bg-white/6 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8cecff]">
                Let&apos;s Build Something Great
              </motion.p>
              <motion.h2 variants={fadeInUp} className="mt-6 text-[2.2rem] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[2.7rem] lg:text-[54px]">
                Your next
                <br />
                standout digital
                <br />
                experience starts here.
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 max-w-[370px] text-[16px] leading-[1.7] text-white/78 sm:text-[18px]">
                Share your idea and we&apos;ll shape it into a polished, user-friendly,
                high-converting digital experience that already feels premium
                before the first launch.
              </motion.p>
            </div>

            <motion.div 
              variants={staggerContainer} 
              className="relative mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4"
              style={{ perspective: "1500px" }}
            >
              {trustHighlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={card3D}
                  whileHover="hover"
                  className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#8cecff]/35 hover:shadow-[0_20px_50px_rgba(5,17,40,0.18)]"
                >
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/48">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[18px] font-semibold leading-[1.3] text-white">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="relative mt-10 rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5 shadow-[0_24px_60px_rgba(5,17,40,0.2)] backdrop-blur-sm sm:mt-12 sm:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8cecff]">
                Why clients love this step
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {experiencePillars.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[15px] text-white/88 sm:text-[16px]">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#8cecff]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer} 
              className="relative mt-8 space-y-5 sm:mt-10 sm:space-y-6"
              style={{ perspective: "1500px" }}
            >
              {contactDetails.map((item) => (
                <motion.a
                  key={item.title}
                  variants={card3D}
                  whileHover="hover"
                  href={item.href}
                  target={item.title === "Address" ? "_blank" : undefined}
                  rel={item.title === "Address" ? "noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-4 py-4 text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_18px_40px_rgba(6,17,40,0.16)] backdrop-blur-sm transition-all duration-300 hover:border-[#8cecff]/35 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] hover:shadow-[0_24px_50px_rgba(7,18,45,0.22)] sm:px-5 sm:py-5"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#8cecff] transition-all duration-300 group-hover:bg-[#8cecff]/14 group-hover:text-white sm:h-14 sm:w-14">
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] uppercase tracking-[0.18em] text-white/52">
                      {item.title}
                    </span>
                    <span className="mt-1 block break-words [overflow-wrap:anywhere] text-[17px] leading-[1.5] text-white sm:text-[18px]">
                      {item.value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </aside>

          <div className="relative bg-[radial-gradient(circle_at_top_right,rgba(77,140,255,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16">
            <div className="absolute right-10 top-8 hidden h-32 w-32 rounded-full border border-[#dfe8f6] lg:block" />
            <div className="absolute bottom-10 right-12 hidden h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(100,223,242,0.35),rgba(100,223,242,0.06)_65%,transparent_72%)] lg:block" />
            <div className="absolute left-10 top-14 hidden h-px w-24 bg-[#dfe8f6] lg:block" />

            <div className="relative">
              <motion.p variants={fadeInUp} className="inline-flex rounded-full border border-[#cfe0f4] bg-white/75 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1b325d]/70 shadow-[0_10px_24px_rgba(16,38,79,0.04)]">
                Write To Us
              </motion.p>
              <motion.h3 variants={fadeInUp} className="mt-5 max-w-[620px] text-[2rem] font-bold leading-[1.02] tracking-[-0.045em] text-[#10264f] sm:text-[2.3rem] lg:text-[46px]">
                Let&apos;s turn your idea into something people instantly trust.
              </motion.h3>
              <motion.p variants={fadeInUp} className="mt-4 max-w-[640px] text-[16px] leading-[1.72] text-[#40526e] sm:text-[17px]">
                Tell us what you&apos;re building, where you want help, and the
                experience you want your users to feel. We&apos;ll guide you with a
                thoughtful response that feels clear, helpful, and tailored to
                your brand.
              </motion.p>
            </div>

            <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="relative mt-8 sm:mt-10">
              {error ? (
                <div className="mb-5 rounded-[20px] border border-[#f2b8b5] bg-[#fff1f0] px-4 py-3 text-[15px] text-[#8d1d18]">
                  {error}
                </div>
              ) : null}

              {successMessage ? (
                <div className="mb-5 rounded-[20px] border border-[#bfe3c8] bg-[#edf9f0] px-4 py-3 text-[15px] text-[#1d6a34]">
                  {successMessage}
                </div>
              ) : null}

              <div className="mb-6 rounded-[24px] border border-[#d9e4f2] bg-white/88 p-4 shadow-[0_18px_40px_rgba(16,38,79,0.06)] backdrop-blur-sm sm:p-5">
                <div className="flex flex-col gap-3 text-[#3c5070] sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#6f86aa]">
                      Premium Discovery
                    </p>
                    <p className="mt-1 text-[15px] leading-[1.6] sm:text-[16px]">
                      Fill this out like a conversation, not a form. The more you
                      share, the more focused and useful our first response will be.
                    </p>
                  </div>
                  <div className="group relative inline-flex shrink-0 items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full border border-[#4d8cff]/30 bg-[linear-gradient(90deg,#10264f_0%,#1c467c_100%)] px-5 py-2.5 font-medium text-white shadow-[0_8px_20px_rgba(16,38,79,0.12)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(77,140,255,0.2)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1)_50%,transparent)] -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                    <div className="relative z-10 flex items-center gap-2.5">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]"></span>
                      </span>
                      <span className="text-[14px] text-[#f0f4ff] tracking-wide">
                        Friendly first reply
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:gap-7">
                <motion.label variants={fadeInUp} className="block">
                  <span className="mb-3 block text-[15px] font-medium text-[#70819a]">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className="h-14 w-full rounded-2xl border border-[#d9e4f2] bg-white px-4 text-[16px] text-[#10264f] shadow-[0_10px_28px_rgba(16,38,79,0.05)] outline-none transition-all duration-200 hover:border-[#91bee9] hover:shadow-[0_14px_34px_rgba(16,38,79,0.08)] placeholder:text-[#9aa8bc] focus:border-[#4d8cff] focus:shadow-[0_14px_36px_rgba(77,140,255,0.12)]"
                  />
                </motion.label>

                <motion.label variants={fadeInUp} className="block">
                  <span className="mb-3 block text-[15px] font-medium text-[#70819a]">
                    Last Name
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className="h-14 w-full rounded-2xl border border-[#d9e4f2] bg-white px-4 text-[16px] text-[#10264f] shadow-[0_10px_28px_rgba(16,38,79,0.05)] outline-none transition-all duration-200 hover:border-[#91bee9] hover:shadow-[0_14px_34px_rgba(16,38,79,0.08)] placeholder:text-[#9aa8bc] focus:border-[#4d8cff] focus:shadow-[0_14px_36px_rgba(77,140,255,0.12)]"
                  />
                </motion.label>

                <motion.label variants={fadeInUp} className="block">
                  <span className="mb-3 block text-[15px] font-medium text-[#70819a]">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-2xl border border-[#d9e4f2] bg-white px-4 text-[16px] text-[#10264f] shadow-[0_10px_28px_rgba(16,38,79,0.05)] outline-none transition-all duration-200 hover:border-[#91bee9] hover:shadow-[0_14px_34px_rgba(16,38,79,0.08)] placeholder:text-[#9aa8bc] focus:border-[#4d8cff] focus:shadow-[0_14px_36px_rgba(77,140,255,0.12)]"
                  />
                </motion.label>

                <motion.label variants={fadeInUp} className="block">
                  <span className="mb-3 block text-[15px] font-medium text-[#70819a]">
                    Phone Number
                  </span>
                  <div className="flex h-14 items-center overflow-hidden rounded-2xl border border-[#d9e4f2] bg-white shadow-[0_10px_28px_rgba(16,38,79,0.05)] transition-all duration-200 hover:border-[#91bee9] hover:shadow-[0_14px_34px_rgba(16,38,79,0.08)] focus-within:border-[#4d8cff] focus-within:shadow-[0_14px_36px_rgba(77,140,255,0.12)]">
                    <span className="inline-flex h-full items-center border-r border-[#d9e4f2] px-4 text-[16px] font-semibold text-[#10264f]">
                      +92
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="336 5918295"
                      className="h-full min-w-0 flex-1 bg-transparent px-4 text-[16px] text-[#10264f] outline-none placeholder:text-[#9aa8bc]"
                    />
                  </div>
                </motion.label>

                <motion.label variants={fadeInUp} className="block md:col-span-2">
                  <span className="mb-3 block text-[15px] font-medium text-[#70819a]">
                    Subject
                  </span>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-14 w-full rounded-2xl border border-[#d9e4f2] bg-white px-4 text-[16px] text-[#10264f] shadow-[0_10px_28px_rgba(16,38,79,0.05)] outline-none transition-all duration-200 hover:border-[#91bee9] hover:shadow-[0_14px_34px_rgba(16,38,79,0.08)] focus:border-[#4d8cff] focus:shadow-[0_14px_36px_rgba(77,140,255,0.12)]"
                  >
                    <option value="">Choose subject</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Design Consultation</option>
                    <option>General Inquiry</option>
                  </select>
                </motion.label>

                <motion.label variants={fadeInUp} className="block md:col-span-2">
                  <span className="mb-3 block text-[15px] font-medium text-[#70819a]">
                    Message
                  </span>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us a little about your project, goals, or timeline."
                    className="w-full rounded-[26px] border border-[#d9e4f2] bg-white px-4 py-4 text-[16px] text-[#10264f] shadow-[0_10px_28px_rgba(16,38,79,0.05)] outline-none transition-all duration-200 hover:border-[#91bee9] hover:shadow-[0_14px_34px_rgba(16,38,79,0.08)] placeholder:text-[#9aa8bc] focus:border-[#4d8cff] focus:shadow-[0_14px_36px_rgba(77,140,255,0.12)]"
                  />
                </motion.label>
              </div>

              <motion.div variants={fadeInUp} className="mt-8 flex justify-start md:mt-10 md:justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  loading={isSending}
                  loadingLabel="Sending..."
                  className="w-full rounded-full bg-[linear-gradient(90deg,#10264f_0%,#1f4a82_100%)] px-8 text-[18px] font-semibold text-white shadow-[0_18px_40px_rgba(16,38,79,0.2)] hover:scale-[1.02] hover:bg-[linear-gradient(90deg,#10264f_0%,#1f4a82_100%)] hover:shadow-[0_22px_48px_rgba(16,38,79,0.24)] sm:max-w-[280px]"
                >
                  Send message
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
