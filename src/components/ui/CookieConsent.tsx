"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);
  const [isActive, setIsActive] = useState(true);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if consent has already been saved in localStorage
    const consentValue = localStorage.getItem("devsinn_cookie_consent");

    if (!consentValue) {
      // First-time visit: disable page scroll and show cookie dialog
      document.body.style.overflow = "hidden";
      setShowConsent(true);
    } else {
      // Return visit: show intro curtain slide-up reveal
      document.body.style.overflow = "hidden";
      setShowCurtain(true);
      
      // Auto-trigger slide-up after logo animation finishes
      const tl = gsap.timeline({
        onComplete: () => {
          setIsActive(false);
          document.body.style.overflow = "";
          window.dispatchEvent(new Event("introComplete"));
        }
      });

      tl.fromTo(".curtain-logo", 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      )
      .to(".curtain-logo", 
        { opacity: 0, scale: 0.98, duration: 0.4, ease: "power2.in", delay: 0.4 }
      )
      .to(curtainRef.current, {
        yPercent: -100,
        duration: 1.0,
        ease: "power4.inOut"
      }, "-=0.1");
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    // Save consent in localStorage
    localStorage.setItem("devsinn_cookie_consent", accepted ? "accepted" : "rejected");

    // Play visual slide-up transition of the consent dialog
    const tl = gsap.timeline({
      onComplete: () => {
        setIsActive(false);
        document.body.style.overflow = "";
        window.dispatchEvent(new Event("introComplete"));
      }
    });

    tl.to(cardRef.current, {
      opacity: 0,
      y: -30,
      scale: 0.98,
      duration: 0.4,
      ease: "power2.in"
    })
    .to(overlayRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    }, "-=0.2");
  };

  if (!isActive) return null;

  return (
    <>
      {/* ── CASE A: FIRST-TIME VISIT (COOKIE CONSENT OVERLAY) ── */}
      {showConsent && (
        <div
          ref={overlayRef}
          className="consent-overlay fixed inset-0 z-[1000] flex items-center justify-center bg-nearblack/25 p-4 backdrop-blur-md"
        >
          {/* Consent Card */}
          <div
            ref={cardRef}
            className="relative w-full max-w-[680px] rounded-[2rem] border border-stone bg-white p-6 sm:p-8 md:p-10 shadow-2xl text-left select-none"
            style={{
              animation: "cardEntrance 0.6s cubic-bezier(0.25, 1, 0.5, 1) both",
            }}
          >
            {/* Top Badge & Option Tags Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <span className="inline-flex w-fit rounded-full bg-[#E8F8F8] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                Privacy First
              </span>
              
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded-full bg-stone/40 px-3 py-1.5 text-[10px] font-bold text-nearblack/60">
                  Essential: always on
                </span>
                <span className="rounded-full bg-teal/10 px-3 py-1.5 text-[10px] font-bold text-teal">
                  Analytics: consent based
                </span>
              </div>
            </div>

            {/* Content Title */}
            <h2 className="font-display text-[1.8rem] font-bold leading-tight tracking-tight text-nearblack sm:text-[2.2rem]">
              Cookies, with a clearer yes from you.
            </h2>

            {/* Description Text */}
            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-gray">
              <p>
                We keep essential cookies on so the site works properly. Optional analytics and third-party tracking stay off until you choose to allow them.
              </p>
              <p>
                Dev'sinn uses essential cookies to keep the website working properly. With your consent, we also use optional cookies for analytics, advertising, and third-party services.
              </p>
              <p>
                By clicking &apos;Accept All&apos;, you agree to the use of all cookies that help us measure performance, understand visits, and improve our digital experience.
              </p>
              <p>
                Learn more in our{" "}
                <a
                  href="/termsandconditions"
                  className="text-nearblack underline font-semibold hover:text-teal transition-colors"
                >
                  Privacy Policy
                </a>.
              </p>
            </div>

            {/* Separator Divider */}
            <div className="my-6 border-b border-stone" />

            {/* Bottom Card Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-[11px] leading-relaxed text-gray max-w-[320px]">
                You can accept optional tracking or reject it and continue with essential cookies only. Your choice will be saved for future visits.
              </p>
              
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => handleConsent(false)}
                  className="rounded-full border border-stone bg-white px-5 py-3 text-xs font-bold text-nearblack transition-all hover:border-nearblack/60 hover:bg-offwhite cursor-pointer active:scale-95"
                >
                  Reject Optional
                </button>
                <button
                  onClick={() => handleConsent(true)}
                  className="rounded-full bg-teal px-6 py-3 text-xs font-bold text-white transition-all hover:brightness-95 hover:shadow-md cursor-pointer active:scale-95"
                >
                  Accept All
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── CASE B: RETURN VISIT (INTRO CURTAIN REVEAL) ── */}
      {showCurtain && (
        <div
          ref={curtainRef}
          className="intro-curtain fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-nearblack"
          style={{ willChange: "transform" }}
        >
          {/* Centered Premium Logo Entrance */}
          <div className="curtain-logo text-center select-none">
            <h2 className="font-display text-[2.5rem] font-bold tracking-widest text-offwhite sm:text-[3.5rem]">
              DEV&apos;SINN
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 bg-teal" />
          </div>
        </div>
      )}

      {/* Animation helpers */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}} />
    </>
  );
}
