import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="flex min-h-[100svh] items-center bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-20 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,612px)_minmax(0,572px)] lg:justify-between lg:gap-16">
        <div className="relative aspect-[612/434] w-full overflow-hidden rounded-[24px] bg-[#d9d9d9] lg:h-[434px] lg:w-[612px]">
          <Image
            src="/pic.png"
            alt="Team meeting"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full max-w-[572px]">
          <p className="text-[16px] font-normal tracking-[0.1em] text-[#282828] sm:text-[18px] lg:leading-[63px]">
            Who We Are
          </p>

          <h2 className="mt-1 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#172d56] sm:text-[36px] lg:text-[40px] lg:leading-[45.9px]">
            <span className="block lg:whitespace-nowrap">Empower Your Teams and</span>
            <span className="block lg:whitespace-nowrap">Streamline Operations</span>
          </h2>

          <p className="mt-8 max-w-[572px] text-[15px] font-normal leading-[1.7] text-[#252525] sm:text-[16px] sm:leading-[24px]">
            Dev&apos;s Inn Technologies, your gateway to cutting-edge IT services for
            businesses and brands. We are your strategic partner in navigating the
            ever-evolving digital landscape. With a relentless commitment to
            innovation and excellence,
          </p>

          <p className="mt-4 max-w-[572px] text-[15px] font-normal leading-[1.7] text-[#252525] sm:text-[16px] sm:leading-[24px]">
            we provide tailored IT solutions that empower your organization to
            thrive in the modern world.
          </p>

          <Link
            href="#"
            className="mt-8 inline-flex h-[53px] items-center justify-center rounded-[64px] bg-[#172d56] px-[42px] py-[20px] text-[16px] font-medium text-white transition-transform duration-200 hover:scale-[1.02] sm:min-w-[199px]"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
