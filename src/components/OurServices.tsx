import Image from "next/image";
import Link from "next/link";

const services = [
  {
    image: "/ouerservices/ser1.png",
    iconWidth: 90,
    iconHeight: 51,
    iconScale: 1.2,
    titleLines: ["Creative Design and", "animations"],
    descriptionLines: [
      "Transform ideas into captivating visuals with",
      "our creative design and animation services for",
      "your brand.",
    ],
  },
  {
    image: "/ouerservices/ser2.png",
    iconWidth: 52,
    iconHeight: 52,
    iconScale: 1.45,
    titleLines: ["Web Development"],
    descriptionLines: [
      "Transform your online presence with Dev'sinn's",
      "expert web development services. Corporate",
      "websites to ecommerce solutions.",
    ],
  },
  {
    image: "/ouerservices/ser3.png",
    iconWidth: 50,
    iconHeight: 52,
    iconScale: 1.45,
    titleLines: ["App Development"],
    descriptionLines: [
      "Elevate your digital presence with Dev'sinn's",
      "app development services, from corporate",
      "apps to ecommerce platforms.",
    ],
  },
  {
    image: "/ouerservices/ser4.png",
    iconWidth: 52,
    iconHeight: 52,
    iconScale: 1.45,
    titleLines: ["Game Development"],
    descriptionLines: [
      "Create immersive games with our game",
      "development services, combining creativity",
      "and technology for engaging experiences.",
    ],
  },
  {
    image: "/ouerservices/ser5.png",
    iconWidth: 58,
    iconHeight: 49,
    iconScale: 1.35,
    titleLines: ["Cloud Computing Services"],
    descriptionLines: [
      "Scale efficiently with our cloud computing",
      "services, providing secure and cost-effective",
      "infrastructure for your business.",
    ],
  },
  {
    image: "/ouerservices/ser6.png",
    iconWidth: 52,
    iconHeight: 52,
    iconScale: 1.45,
    titleLines: ["Digital Marketing"],
    descriptionLines: [
      "Boost your brand's visibility with our tailored",
      "digital marketing strategies, including SEO,",
      "social media, and ads.",
    ],
  },
];

export default function OurServices() {
  return (
    <section className="flex min-h-[100svh] items-center bg-[#172D56] px-5 py-10 text-white [font-family:var(--font-poppins)] sm:px-8 sm:py-12 lg:px-10 lg:py-8 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[572px]">
            <p className="text-[16px] font-normal uppercase tracking-[0.1em] text-white sm:text-[18px] lg:leading-[52px]">
              OUR SERVICES
            </p>
            <h2 className="mt-0 text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[28px] lg:text-[32px] lg:leading-[36px]">
              What We Do
            </h2>
            <p className="mt-3 max-w-[572px] text-[15px] font-normal tracking-[0] text-white sm:text-[16px] sm:leading-[24px]">
              <span className="block lg:whitespace-nowrap">
                Securing your digital world: your trusted partner in data protection with
              </span>
              <span className="block lg:whitespace-nowrap">
                cutting-edge solutions for comprehensive data security.
              </span>
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex h-[53px] items-center justify-center self-start rounded-[64px] bg-white px-[42px] py-[20px] text-[16px] font-medium text-[#172D56] transition-transform duration-200 hover:scale-[1.02] lg:mt-[78px] lg:min-w-[202px]"
          >
            <span>Read More</span>
            <span className="ml-2 text-[18px]">↗</span>
          </Link>
        </div>

        <div className="grid gap-[20px] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.titleLines.join(" ")}
              className="min-h-[240px] rounded-[24px] bg-white px-[24px] pb-[24px] pt-[18px] text-[#172D56] lg:h-[248px]"
            >
              <div className="flex h-[42px] items-start overflow-visible">
                <Image
                  src={service.image}
                  alt={service.titleLines.join(" ")}
                  width={service.iconWidth}
                  height={service.iconHeight}
                  className="h-auto w-auto origin-top-left object-contain"
                  style={{ transform: `scale(${service.iconScale})` }}
                />
              </div>

              <h3 className="mt-0 text-[24px] font-bold leading-[30.9px] tracking-[-0.02em] text-[#172D56]">
                {service.titleLines.map((line) => (
                  <span key={line} className="block lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="mt-2 text-[15px] font-normal tracking-[0] text-[#172D56] sm:text-[16px] sm:leading-[24px]">
                {service.descriptionLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
