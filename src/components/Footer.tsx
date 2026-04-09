import Image from "next/image";
import Link from "next/link";

const aboutLinks = ["Company", "Why Chose Us", "Contact Us"];
const resourceLinks = ["Terms and Condition", "Support"];
const socialLinks = [
  "Creative Design",
  "Web Development",
  "App Development",
  "Digital Marketing",
  "Game Development",
  "Cloud Computing Services",
];

const footerIcons = [
  { src: "/footer/facebook.png", alt: "Facebook", href: "#" },
  { src: "/footer/instagram.png", alt: "Instagram", href: "#" },
  { src: "/footer/linkdin.png", alt: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-14 text-[#0E1D3C] sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-[96px]">
        <div className="w-full max-w-[413px] shrink-0">
          <Link href="#" className="inline-flex">
            <Image
              src="/devsinnlogo.png"
              alt="Dev's Inn Technologies"
              width={261}
              height={86}
              className="h-auto w-[220px] sm:w-[240px] lg:w-[261px]"
            />
          </Link>

          <p className="mt-9 max-w-[413px] text-[18px] font-normal leading-[24px] tracking-[0] text-[#252525]">
            Devsinn Technologies is a software company offering web, mobile,
            and enterprise solutions to help businesses grow digitally.
          </p>

          <div className="mt-9 flex items-center gap-[20px]">
            {footerIcons.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                aria-label={icon.alt}
                className="transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-[181px_247px_236px] lg:gap-[107px]">
          <div>
            <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0E1D3C]">
              About Us
            </h3>
            <div className="mt-5 flex flex-col gap-[12px]">
              {aboutLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[18px] font-normal leading-[1.55] text-[#0E1D3C] transition-opacity duration-200 hover:opacity-75"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0E1D3C]">
              Resources
            </h3>
            <div className="mt-5 flex flex-col gap-[12px]">
              {resourceLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[18px] font-normal leading-[1.55] text-[#0E1D3C] transition-opacity duration-200 hover:opacity-75"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0E1D3C]">
              Social Media
            </h3>
            <div className="mt-5 flex flex-col gap-[10px]">
              {socialLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[18px] font-normal leading-[1.55] text-[#0E1D3C] transition-opacity duration-200 hover:opacity-75"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
