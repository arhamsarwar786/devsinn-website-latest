import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "Creative-Design",
    titleLines: ["Creative Design", "and animations"],
    description:
      "Unleash visual storytelling with stunning designs and animations. We craft sleek graphics and dynamic visuals to captivate audiences, enhance marketing, and elevate your brand's digital presence. Tailored for websites, social media, and campaigns, our work leaves lasting impressions.",
    buttonLabel: "More Design",
    image: "/list/list1.png",
    imageAlt: "Creative design and animations illustration",
  },
  {
    id: "Web-Development-Solutions",
    titleLines: ["Web", "Development"],
    description:
      "Devs'inn provides tailored web solutions to boost your business. From corporate websites to ecommerce platforms, we deliver user-friendly, visually appealing, high-performance designs. With cutting-edge technology, we build strong online presences that align with your vision and goals.",
    buttonLabel: "More Web",
    image: "/list/list2.png",
    imageAlt: "Web development illustration",
  },
  {
    id: "App-Development-Solutions",
    titleLines: ["App", "Development"],
    description:
      "Devs'inn delivers innovative app solutions to elevate your business. From corporate apps to feature-rich ecommerce platforms, we craft user-friendly, high-performance designs. Combining creativity and technology, we create seamless mobile experiences that engage audiences and drive business success.",
    buttonLabel: "More App",
    image: "/list/list3.png",
    imageAlt: "App development illustration",
  },
  {
    id: "Game-Development",
    titleLines: ["Game", "Development"],
    description:
      "Bring your ideas to life with our game development services. We create immersive games for mobile, PC, and consoles, blending creativity and technology. From concept to deployment, we deliver high-quality graphics, captivating stories, and seamless gameplay experiences players will love.",
    buttonLabel: "More Game",
    image: "/list/list4.png",
    imageAlt: "Game development illustration",
  },
  {
    id: "Cloud-Computing-Services",
    titleLines: ["Cloud Computing", "Services"],
    description:
      "Unlock scalability and efficiency with our tailored cloud computing services. From migration to management, we ensure seamless data access, enhanced security, and cost-effective operations. Whether public, private, or hybrid, our reliable solutions support your growth and innovation.",
    buttonLabel: "More Cloud",
    image: "/list/list5.png",
    imageAlt: "Cloud computing services illustration",
  },
  {
    id: "Digital-Marketing",
    titleLines: ["Digital Marketing"],
    description:
      "Maximize online visibility and grow your business with our digital marketing services. We specialize in SEO, social media, content, ads, and email campaigns. Our data-driven strategies boost brand awareness, traffic, and conversions, delivering personalized solutions for your success.",
    buttonLabel: "More Digital",
    image: "/list/list6.png",
    imageAlt: "Digital marketing illustration",
  },
];

export default function List() {
  return (
    <section className="bg-white px-5 py-14 text-[#1f3769] sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12 xl:py-[92px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:gap-[54px]">
        {services.map((service) => (
          <article
            key={service.titleLines.join(" ")}
            className="grid items-center gap-6 md:gap-8 lg:grid-cols-[320px_minmax(340px,410px)_minmax(300px,390px)] lg:gap-[32px] xl:grid-cols-[360px_434px_392px] xl:gap-[42px]"
          >
            <div className="order-1 max-w-[360px]">
              <h2 className="text-[2.1rem] font-bold leading-[0.98] tracking-[-0.04em] text-[#1f3769] sm:text-[2.55rem] lg:text-[3.1rem] xl:text-[3.75rem]">
                {service.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            <div className="order-2">
              <div className="relative mx-auto aspect-[434/382] w-full max-w-[434px] overflow-hidden rounded-[14px] bg-[#1f3769]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 434px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-3 max-w-[392px] justify-self-start pt-1">
              <p className="text-[1.01rem] leading-[1.5] text-[#2e2e2e] sm:text-[1.06rem] xl:text-[1.04rem] xl:leading-[1.52]">
                {service.description}
              </p>

              <Link
                href={`/services/${service.id}`}
                className="mt-8 inline-flex min-h-[54px] min-w-[176px] items-center justify-center rounded-full bg-[#1f3769] px-7 text-[1rem] font-medium text-white transition-transform duration-200 hover:scale-[1.02] sm:min-h-[56px] sm:min-w-[200px] sm:text-[1.06rem]"
              >
                {service.buttonLabel}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
