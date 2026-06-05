"use client";

import { ChangeEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import type { EmailJSResponseStatus } from "@emailjs/browser";
import Button from "@/components/ui/Button";
import {
  EMAILJS_CONFIG,
  EMAILJS_INVALID_ACCOUNT_MESSAGE,
} from "@/lib/emailjs";
import SectionDivider from "@/components/ui/SectionDivider";

const contactDetails = [
  {
    title: "Phone / WhatsApp",
    value: "+92 336 5918295",
    href: "https://api.whatsapp.com/send?phone=923365918295",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92V20A2 2 0 0 1 19.82 22C9.86 22 2 14.14 2 4.18A2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72l.34 2.74a2 2 0 0 1-.57 1.71L7 9.99a16 16 0 0 0 7.01 7.01l1.82-1.86a2 2 0 0 1 1.71-.57l2.74.34A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "info@devsinntechnologies.com",
    href: "mailto:info@devsinntechnologies.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6H20C21.1 6 22 6.9 22 8V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6Z" />
        <path d="M22 8L12 14L2 8" />
      </svg>
    ),
  },
  {
    title: "Lahore, Pakistan",
    value: "Rustam Park, Samnabad, Lahore",
    href: "https://maps.google.com/?q=Samnabad,+Lahore",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10C20 15.25 12 22 12 22C12 22 4 15.25 4 10A8 8 0 1 1 20 10Z" />
        <path d="M12 13A3 3 0 1 0 12 7A3 3 0 0 0 12 13Z" />
      </svg>
    ),
  },
];

const trustHighlights = [
  { label: "Response time", value: "Within 24h" },
  { label: "Discovery call", value: "Free, 30 min" },
  { label: "Commitment", value: "None required" },
];

const projectTypes = [
  "AI Automation & Agents",
  "SaaS MVP Development",
  "Custom Web App",
  "Flutter Mobile App",
  "Dedicated Development Team",
  "App Rescue / Bug Fixing",
  "Backend, API & Cloud",
  "Product Audit",
  "Not sure yet",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $8,000",
  "$8,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP (within 2 weeks)",
  "1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
];

function ContactUsInner() {
  const searchParams = useSearchParams();
  const presetType = searchParams.get("type") === "product-audit" ? "Product Audit" : "";
  const presetPackage = searchParams.get("package") ?? "";
  const presetModel = searchParams.get("model") ?? "";

  const getPresetSubject = () => {
    if (presetType) return presetType;
    if (presetPackage) return `Package: ${presetPackage.replace(/-/g, " ")}`;
    if (presetModel) return `Engagement: ${presetModel.replace(/-/g, " ")}`;
    return "";
  };

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    projectType: getPresetSubject(),
    budget: "",
    timeline: "",
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
    if (!formData.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Enter a valid email address.";
    if (!formData.projectType || formData.projectType === "") return "Please select a project type.";
    if (!formData.message.trim()) return "Please describe your project or requirements.";
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
      from_name: `${formData.fname} ${formData.lname}`.trim(),
      from_company: formData.company || "N/A",
      from_email: formData.email,
      from_number: formData.phone || "N/A",
      from_country: formData.country || "N/A",
      from_subject: formData.projectType,
      from_budget: formData.budget || "Not specified",
      from_timeline: formData.timeline || "Not specified",
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
        setFormData({ fname: "", lname: "", company: "", email: "", phone: "", country: "", projectType: "", budget: "", timeline: "", message: "" });
        setError(null);
        setSuccessMessage("✓ Message sent! We'll reply within 1 business day.");
        setIsSending(false);
      })
      .catch((reason: EmailJSResponseStatus | Error | string) => {
        let nextError = "Failed to send. Please try again or WhatsApp us directly.";
        if (typeof reason === "object" && reason !== null && "text" in reason && typeof reason.text === "string") {
          nextError = reason.text.includes("Account not found") ? EMAILJS_INVALID_ACCOUNT_MESSAGE : reason.text;
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

  const inputClass = "h-11 w-full rounded-xl border border-stone bg-offwhite px-4 text-sm text-nearblack outline-none transition-all placeholder:text-gray focus:border-teal";
  const selectClass = "h-11 w-full rounded-xl border border-stone bg-offwhite px-4 text-sm text-nearblack outline-none transition-all focus:border-teal appearance-none";
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A18' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat" as const,
    backgroundPosition: "right 1rem center",
    backgroundSize: "1em",
  };

  return (
    <section className="relative overflow-hidden bg-offwhite px-5 py-12 sm:px-8 sm:py-20 lg:px-10 xl:px-16 mt-16">
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1400px] rounded-[2rem] border border-stone bg-offwhite p-3 lg:p-4 shadow-sm">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-offwhite lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[440px_minmax(0,1fr)]">
          
          {/* LEFT SIDE INFO */}
          <aside className="relative overflow-hidden border-b border-r-0 lg:border-b-0 lg:border-r border-stone bg-offwhite px-5 py-8 text-nearblack sm:px-8 sm:py-10 lg:px-10">
            <div className="relative z-10 flex flex-col justify-between h-full gap-8">
              <div>
                <p className="inline-flex rounded-full border border-stone bg-offwhite px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal">
                  Contact Us
                </p>
                <h2 className="mt-4 text-[1.6rem] font-bold leading-tight tracking-tight text-nearblack">
                  Let's Discuss Your Project.
                </h2>
                <p className="body-text text-gray text-sm mt-3 leading-relaxed">
                  Tell us what you want to build or what requires optimization. We'll consult with you on how we can structure and deliver it.
                </p>
              </div>

              {/* Trust Details Grid */}
              <div className="grid gap-3 sm:grid-cols-3">
                {trustHighlights.map((item) => (
                  <div key={item.label} className="rounded-xl border border-stone bg-offwhite p-3">
                    <p className="caption-text text-teal font-semibold text-[9px] uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-nearblack">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Details List */}
              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.title !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-stone/50 bg-offwhite px-3 py-3 transition-colors hover:border-teal"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone text-teal">
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-gray">{item.title}</span>
                      <span className="mt-0.5 block text-sm font-semibold text-nearblack leading-tight break-all">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp direct link */}
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=923365918295"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-stone bg-offwhite py-3.5 text-sm font-bold text-nearblack hover:border-teal transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-teal"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE FORM */}
          <div className="relative px-5 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div>
              <p className="caption-text text-teal font-semibold text-xs tracking-wider">
                Inquiry Form
              </p>
              <h3 className="mt-2 text-[1.4rem] font-bold tracking-tight text-nearblack">
                Tell us about your requirements.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 mt-8">
              {error && <div className="mb-5 rounded-xl border border-stone bg-offwhite px-5 py-4 text-sm text-nearblack font-semibold">{error}</div>}
              {successMessage && <div className="mb-5 rounded-xl border border-stone bg-offwhite px-5 py-4 text-sm text-teal font-semibold">{successMessage}</div>}

              <div className="grid gap-5 md:grid-cols-2">
                {/* First name */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">First Name *</span>
                  <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} placeholder="John" required className={inputClass} />
                </label>

                {/* Last name */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Last Name</span>
                  <input type="text" name="lname" value={formData.lname} onChange={handleInputChange} placeholder="Doe" className={inputClass} />
                </label>

                {/* Company */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Company Name</span>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Acme Corp" className={inputClass} />
                </label>

                {/* Email */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Email Address *</span>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required className={inputClass} />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Phone Number</span>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 000-0000" className={inputClass} />
                </label>

                {/* Country */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Country</span>
                  <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="United States" className={inputClass} />
                </label>

                {/* Project type */}
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Project Type *</span>
                  <select name="projectType" value={formData.projectType} onChange={handleInputChange} className={selectClass} style={selectStyle}>
                    <option value="">Select project scope...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </label>

                {/* Budget */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Project Budget</span>
                  <select name="budget" value={formData.budget} onChange={handleInputChange} className={selectClass} style={selectStyle}>
                    <option value="">Select budget range...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </label>

                {/* Timeline */}
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Desired Timeline</span>
                  <select name="timeline" value={formData.timeline} onChange={handleInputChange} className={selectClass} style={selectStyle}>
                    <option value="">Select timeline estimate...</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>

                {/* Message */}
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-xs font-semibold text-gray uppercase tracking-wider">Project Scope details *</span>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe what you want to build, integrations needed, and main business targets."
                    required
                    className="w-full rounded-xl border border-stone bg-offwhite p-4 text-sm text-nearblack placeholder:text-gray outline-none transition-all focus:border-teal"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="caption-text text-gray text-xs">* Required fields. We respond within 24 business hours.</p>
                <div className="w-full sm:w-auto">
                  <Button
                    type="submit"
                    loading={isSending}
                    loadingLabel="Sending..."
                    variant="primary"
                  >
                    Send Enquiry
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactUs() {
  return (
    <Suspense fallback={<div className="min-h-[400px] bg-offwhite" />}>
      <ContactUsInner />
    </Suspense>
  );
}
