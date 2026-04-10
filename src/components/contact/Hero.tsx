import Image from "next/image";
import HeroAmbient from "@/components/ui/HeroAmbient";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08142d] text-white">
      <Image
        src="/global.png"
        alt="Digital globe background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_78%] sm:object-[68%_70%] lg:object-[center_center]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,29,0.88)_0%,rgba(8,22,52,0.42)_34%,rgba(7,20,48,0.3)_64%,rgba(4,12,29,0.68)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,12,29,0.96)_0%,rgba(12,31,76,0.68)_34%,rgba(18,49,118,0.22)_58%,rgba(5,16,41,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_62%,rgba(78,132,255,0.36)_0%,rgba(9,23,52,0.16)_34%,rgba(4,11,26,0.1)_100%)] sm:bg-[radial-gradient(circle_at_center,_rgba(78,132,255,0.28)_0%,_rgba(9,23,52,0.12)_38%,_rgba(4,11,26,0.08)_100%)]" />
      <HeroAmbient />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1568px] items-center px-5 pb-10 pt-24 sm:px-8 sm:pb-10 sm:pt-30 lg:px-10 lg:pb-8 lg:pt-[102px] xl:px-16 xl:pt-[134px]">
        <div className="w-full max-w-[545px]">
          <h1 className="pt-12 text-[2.85rem] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:pt-14 sm:text-[3.5rem] md:text-[4rem] lg:pt-0 lg:text-[72px] xl:text-[78px]">
            Contact us
          </h1>
        </div>
      </div>
    </section>
  );
}
