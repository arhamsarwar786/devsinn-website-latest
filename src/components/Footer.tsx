"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

const aboutLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Packages & Pricing", href: "/#packages" },
  { label: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { label: "Terms and Conditions", href: "/termsandconditions" },
  { label: "Support", href: "/support" },
  { label: "Request a Product Audit", href: "/contact?type=product-audit" },
];

const serviceLinks = [
  { label: "AI Automation & Agents", href: "/services/ai-automation" },
  { label: "SaaS MVP Development", href: "/services/saas-mvp" },
  { label: "Custom Web App Dev", href: "/services/web-app-development" },
  { label: "Flutter Mobile Apps", href: "/services/flutter-mobile-apps" },
  { label: "Backend, APIs & Cloud", href: "/services/backend-api-cloud" },
  { label: "App Rescue & Maintenance", href: "/services/app-rescue-maintenance" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/devsinntechnology?mibextid=ZbWKwL",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/devsinntechnologies?igshid=MzRlODBiNWFlZA%3D%3D",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/devsinn-technologies/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      const templateParams = {
        from_email: email,
        message: `New newsletter subscription from: ${email}`,
        from_subject: "Newsletter Subscription",
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubscribed(true);
      setEmail("");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="relative bg-gray-200 text-nearblack pt-24 border-t border-stone">
      <div className="relative z-10 mx-auto px-5 sm:px-8 lg:px-10 xl:px-16 w-full max-w-[1400px]">

        {/* Newsletter Signup Box */}
        <div className="mx-auto mb-20 max-w-[1200px] overflow-hidden rounded-[2rem] border border-stone bg-offwhite p-8 md:p-12 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Newsletter Info */}
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-nearblack">
                  Newsletter
                </span>
              </div>
              <h3 className="h3-card font-semibold text-nearblack text-2xl sm:text-3xl leading-tight">
                Stay Updated.
              </h3>
              <p className="body-text text-gray text-sm mt-2 max-w-[420px] leading-relaxed">
                Receive engineering advice, project planning blueprints, and custom software strategy straight to your inbox.
              </p>
            </div>

            {/* Newsletter Input Form */}
            <div className="w-full max-w-[480px]">
              {subscribed ? (
                <div className="flex items-center gap-3 rounded-full border border-teal/20 bg-teal/5 px-6 py-4 justify-center">
                  <span className="text-teal font-bold text-sm">
                    ✓ Subscription Verified!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full flex-1 rounded-full border border-stone bg-offwhite px-5 py-3.5 text-sm text-nearblack placeholder-gray outline-none transition-colors focus:border-teal"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="btn-sweep sweep-primary bg-nearblack text-offwhite border border-nearblack font-semibold text-sm px-6 py-3.5 rounded-full shrink-0 disabled:opacity-50 cursor-pointer"
                  >
                    <span className="relative z-10">
                      {isSubscribing ? "Subscribing..." : "Subscribe"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 pb-16 border-b border-stone">
          {/* Brand/About Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex">
              <div className="relative h-10 w-36 sm:w-44">
                <Image
                  src="/devsinnlogo.png"
                  alt="Dev'sinn Technologies logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="body-text text-gray text-sm max-w-[320px] leading-relaxed">
              AI-powered web apps, mobile apps, SaaS MVPs, and business process automation built with high engineering precision.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone bg-offwhite text-gray transition-colors hover:border-teal hover:text-teal"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="caption-text text-nearblack font-bold uppercase tracking-wider text-[11px] mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="body-text text-gray text-sm transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="caption-text text-nearblack font-bold uppercase tracking-wider text-[11px] mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="body-text text-gray text-sm transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="caption-text text-nearblack font-bold uppercase tracking-wider text-[11px] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="body-text text-gray text-sm transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Infrastructure Status */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-12">
          <p className="caption-text text-gray text-xs">
            &copy; {new Date().getFullYear()} Dev'sinn Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            <span className="caption-text text-gray text-xs uppercase tracking-wider">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
