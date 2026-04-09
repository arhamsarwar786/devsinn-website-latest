import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
      <div className="mx-auto w-full max-w-[1540px]">
        <div className="relative overflow-hidden rounded-[26px] bg-[#1d1d1d] text-white lg:min-h-[359px]">
          <Image
            src="/about/vision1.png"
            alt="Vision and mission background"
            fill
            sizes="(max-width: 1023px) 100vw, 1540px"
            className="object-cover"
            priority={false}
          />

          <div className="absolute inset-0 bg-black/58" />

          <div className="relative grid gap-12 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-[84px] lg:px-[36px] lg:py-[66px] xl:px-[36px]">
            <div className="max-w-[600px]">
              <h2 className="text-[2.1rem] font-bold leading-none tracking-[-0.03em] sm:text-[2.5rem] lg:text-[30px]">
                Vision
              </h2>

              <p className="mt-6 text-[1.18rem] font-normal leading-[1.52] text-white/95 sm:text-[1.24rem] lg:max-w-[666px] lg:text-[20px] lg:leading-[1.43]">
                Our vision at Dev&apos;s Inn Technologies is to become a leading
                company that is recognized for our expertise, innovation, and
                commitment to client success. We strive to empower business
                with the tools and solutions they need to thrive in the digital
                age, while also fostering a collaborative company that values
                creativity, integrity, and excellence.
              </p>
            </div>

            <div className="max-w-[640px]">
              <h2 className="text-[2.1rem] font-bold leading-none tracking-[-0.03em] sm:text-[2.5rem] lg:text-[30px]">
                Mission
              </h2>

              <p className="mt-6 text-[1.18rem] font-normal leading-[1.52] text-white/95 sm:text-[1.24rem] lg:max-w-[640px] lg:text-[20px] lg:leading-[1.43]">
                At Dev&apos;s Inn Technologies, our mission is to help businesses
                of all sizes establish a strong and effective online presence
                through our innovative web development solutions. We aim to
                deliver customized and high-quality digital products that meet
                the specific needs of each client, while also providing
                excellent customer service and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
