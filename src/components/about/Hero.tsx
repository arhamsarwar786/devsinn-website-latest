import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08142d] text-white">
      <Image
        src="/global.png"
        alt="Digital globe background"
        fill
        priority
        className="object-cover object-[72%_center] lg:object-[center_center]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,29,0.96)_0%,rgba(12,31,76,0.68)_34%,rgba(18,49,118,0.22)_58%,rgba(5,16,41,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(78,132,255,0.28)_0%,_rgba(9,23,52,0.12)_38%,_rgba(4,11,26,0.08)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1568px] items-center px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-30 lg:px-10 lg:pb-8 lg:pt-[102px] xl:px-16 xl:pt-[134px]">
        <div className="w-full max-w-[545px]">
          <h1 className="text-[2.55rem] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[3.5rem] md:text-[4rem] lg:text-[72px] xl:text-[78px]">
            About us
          </h1>
        </div>
      </div>
    </section>
  );
}
