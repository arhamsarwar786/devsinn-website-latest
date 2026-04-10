const items = [
  {
    eyebrow: "LEARN",
    title: "We Ask Questions About Your Business",
    description:
      "Before we start any project, we take the time to get to know your business. We ask the right questions to gain a deep understanding of your business, target audience, and competition.",
  },
  {
    eyebrow: "PLAN",
    title: "Developing Customized Solutions",
    description:
      "Once we have understanding of your business, we work alongside you to develop customized solutions that meet your specific needs.We deliver a solution that meets your expectations.",
  },
  {
    eyebrow: "EXECUTE",
    title: "Launching Your Amazing Solutions",
    description:
      "We don't just develop your solutions and leave you to it. We work alongside you to launch your solutions and provide maintenance ensure that they continue to meet your needs.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#203869] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center">
        <div className="max-w-[1120px] text-center">
          <h2 className="text-[2.2rem] font-bold leading-none tracking-[-0.03em] sm:text-[3rem] lg:text-[64px]">
            What We Do
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-[1.05rem] leading-[1.6] text-white/95 sm:text-[1.15rem] lg:mt-8 lg:text-[19px] lg:leading-[1.55]">
            Securing your digital world: your trusted partner in data
            protection with cutting-edge solutions for comprehensive data
            security.
          </p>
        </div>

        <div className="mt-12 grid w-full gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-6">
          {items.map((item) => (
            <article
              key={item.eyebrow}
              className="min-h-[320px] rounded-[18px] border border-[#d7dceb] bg-white px-7 py-8 text-[#2f2f34] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#8ecbff] hover:shadow-[0_24px_48px_rgba(13,35,78,0.2)] sm:min-h-[340px] sm:px-8 sm:py-9 lg:min-h-[348px] lg:rounded-[16px] lg:px-[29px] lg:py-[30px]"
            >
              <p className="text-[2rem] font-bold leading-none tracking-[-0.03em] text-[#203869] sm:text-[2.15rem] lg:text-[29px]">
                {item.eyebrow}
              </p>

              <h3 className="mt-8 max-w-[360px] text-[1.8rem] font-bold leading-[1.35] tracking-[-0.03em] text-[#2f2f34] sm:text-[2rem] lg:mt-7 lg:text-[26px]">
                {item.title}
              </h3>

              <p className="mt-6 max-w-[378px] text-[1.25rem] leading-[1.5] text-[#2f2f34] sm:text-[1.3rem] lg:mt-6 lg:text-[20px] lg:leading-[1.48]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
