import Image from "next/image";

export default function ClientReviews() {
  return (
    <section className="bg-white px-5 py-14 text-[#252525] sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[40px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_471px] lg:items-start lg:gap-[40px]">
          <div>
            <p className="text-[18px] font-normal leading-[63px] tracking-[0.1em] text-[#282828]">
              Reviews
            </p>
            <h2 className="-mt-3 text-[30px] font-bold leading-[1.1475] tracking-[-0.02em] text-[#172D56] sm:text-[34px] lg:text-[40px] lg:leading-[45.9px]">
              Client Testimonials
            </h2>
          </div>

          <p className="max-w-[471px] text-[16px] font-normal leading-[24px] tracking-[0] text-[#252525] lg:justify-self-end">
            Securing your digital world: your trusted partner in data
            protection with cutting-edge solutions for comprehensive data
            security.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[570px_471px] lg:items-end lg:justify-between lg:gap-[40px]">
          <div className="flex flex-col gap-[40px]">
            <div className="flex items-start">
              <span className="text-[120px] font-bold leading-[0.72] tracking-[-0.06em] text-black">
                “
              </span>
            </div>

            <div className="max-w-[570px]">
              <p className="text-[20px] font-normal leading-[30px] tracking-[0] text-[#252525]">
                “Erin was proactive, attentive to feedback and interested in
                delivering a solid work-product. I&apos;ll continue relying on her
                fo work.”
              </p>

              <div className="mt-[28px]">
                <h3 className="text-[20px] font-bold leading-[27px] tracking-[0] text-[#252525]">
                  Gilbert Stev
                </h3>
                <p className="mt-[3px] text-[16px] font-normal leading-[21px] tracking-[0] text-[rgba(37,37,37,0.7)]">
                  Hiring Lawyer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[10px]">
              <button
                type="button"
                aria-label="Previous review"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#7E8BA8] text-[#7E8BA8] transition-colors duration-200 hover:border-[#172D56] hover:text-[#172D56]"
              >
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 27 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M26 9H2M9 1L1 9L9 17"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next review"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#172D56] bg-white text-[#172D56] transition-colors duration-200 hover:bg-[#172D56] hover:text-white"
              >
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 27 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 9H25M18 1L26 9L18 17"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative aspect-[471/517] w-full max-w-[471px] overflow-hidden rounded-[10px] lg:justify-self-end">
            <Image
              src="/client/clicnet.png"
              alt="Client portrait"
              fill
              sizes="(max-width: 1023px) 100vw, 471px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
