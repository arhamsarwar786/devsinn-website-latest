import Image from "next/image";

type Highlight = {
  title: string;
  description: string;
};

type ServiceData = {
  id: string;
  navLabel: string;
  cardImage: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  mainTitle: string;
  mainDescription: string;
  highlightTitle: string;
  highlights: Highlight[];
  technologies: string[];
  projects: string[];
};

export default function ServiceDetail({ service }: { service: ServiceData }) {
  return (
    <main className="bg-white text-[#11284f]">
      <section className="relative overflow-hidden bg-[#08142d] text-white">
        <Image
          src="/global.png"
          alt={`${service.mainTitle} background`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-[center_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,29,0.92)_0%,rgba(8,22,52,0.72)_36%,rgba(7,20,48,0.34)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,12,29,0.97)_0%,rgba(9,22,52,0.9)_28%,rgba(18,49,118,0.36)_60%,rgba(8,20,48,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_42%,rgba(78,132,255,0.32)_0%,rgba(9,23,52,0.12)_42%,rgba(4,11,26,0.04)_100%)]" />

        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1568px] items-center px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-[118px] xl:px-16 xl:pt-[138px]">
          <div className="max-w-[760px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#8cecff] sm:text-[14px]">
              {service.heroEyebrow}
            </p>
            <h1 className="mt-5 text-[2.55rem] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.4rem] lg:text-[4.15rem] xl:text-[4.85rem]">
              {service.heroTitle}
            </h1>
            <p className="mt-5 max-w-[620px] text-[1rem] leading-[1.7] text-white/90 sm:text-[1.08rem] lg:text-[1.15rem]">
              {service.heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:gap-14">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#5f7cab]">
              Service Overview
            </p>
            <h2 className="mt-4 text-[2.15rem] font-bold leading-[1.02] tracking-[-0.04em] text-[#11284f] sm:text-[2.5rem] lg:text-[3.25rem]">
              {service.mainTitle}
            </h2>
            <p className="mt-5 max-w-[760px] text-[1rem] leading-[1.8] text-[#455774] sm:text-[1.06rem] lg:text-[1.12rem]">
              {service.mainDescription}
            </p>
          </div>

          <div className="rounded-[28px] border border-[#dbe5f3] bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-6 shadow-[0_24px_60px_rgba(16,38,79,0.06)] sm:p-7">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#5f7cab]">
              Technology Stack
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex rounded-full border border-[#cfe0f4] bg-white px-4 py-2 text-[0.94rem] font-medium text-[#17305f] shadow-[0_10px_24px_rgba(16,38,79,0.04)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6faff] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#5f7cab]">
            {service.highlightTitle}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {service.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-[#dbe5f3] bg-white p-6 shadow-[0_20px_48px_rgba(16,38,79,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#8ecbff] hover:shadow-[0_24px_52px_rgba(16,38,79,0.12)] sm:p-7"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#1e467c_0%,#142c55_100%)] text-white shadow-[0_14px_28px_rgba(16,38,79,0.2)]">
                  <span className="text-[1.2rem]">+</span>
                </div>
                <h3 className="mt-5 text-[1.35rem] font-bold leading-[1.2] tracking-[-0.03em] text-[#11284f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#4b5e7d]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#5f7cab]">
            Selected Work
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {service.projects.map((project, index) => (
              <article
                key={`${service.id}-${project}-${index}`}
                className="overflow-hidden rounded-[24px] border border-[#dbe5f3] bg-white shadow-[0_20px_48px_rgba(16,38,79,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#8ecbff] hover:shadow-[0_24px_52px_rgba(16,38,79,0.12)]"
              >
                <div className="relative aspect-[413/518] w-full">
                  <Image
                    src={project}
                    alt={`${service.mainTitle} project ${index + 1}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
