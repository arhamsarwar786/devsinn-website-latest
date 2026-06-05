"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  item: Project;
  index: number;
}

export default function ProjectCard({ item, index }: ProjectCardProps) {
  return (
    <div
      style={{
        animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`,
      }}
    >
      <Link href={`/projects/${item.slug}`} className="group block relative">
        <div
          className="relative aspect-[413/518] w-full overflow-hidden rounded-[2rem] border border-stone bg-white shadow-sm transition-all duration-500 hover:border-teal hover:shadow-md isolate z-0"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', willChange: 'transform' }}
        >
          <div className="relative h-full w-full bg-offwhite">
            {item.categoryKey === "appDev" ? (
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-stone/20 [perspective:2000px]">
                {/* Spotlight background glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-stone/10 via-transparent to-stone/5 pointer-events-none" />

                {/* Mockup Group with Advanced 3D Parallax using CSS */}
                <div className="relative flex w-full items-center justify-center gap-0 [transform-style:preserve-3d]">
                  
                  {/* Left Phone (Metallic Pro Frame) */}
                  <div
                    className="relative h-[160px] w-[80px] translate-x-12 translate-y-8 -rotate-[12deg] overflow-hidden rounded-[1.2rem] border border-stone bg-nearblack shadow-2xl sm:h-[220px] sm:w-[110px] lg:h-[260px] lg:w-[130px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-x-6 group-hover:translate-y-0 group-hover:[transform:rotateY(25deg)_rotateZ(-5deg)_translateZ(-20px)]"
                  >
                    {/* Screen Reflection Overlay */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                    {/* Inner Screen */}
                    <div className="absolute inset-[2px] rounded-[1.1rem] overflow-hidden bg-nearblack z-0">
                      <Image
                        src={item.sneakPeekImages[0] || item.mainImage}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 110px, 130px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Center Phone (The Spotlight) */}
                  <div
                    className="relative z-30 h-[210px] w-[105px] overflow-hidden rounded-[1.6rem] border-2 border-stone bg-nearblack shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] sm:h-[270px] sm:w-[135px] lg:h-[310px] lg:w-[155px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4 group-hover:scale-105 group-hover:[transform:translateZ(60px)]"
                  >
                    {/* Dynamic Island Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full z-50 shadow-inner flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-white/10 ml-5" />
                    </div>
                    {/* Main Screen */}
                    <div className="absolute inset-[3px] rounded-[1.5rem] overflow-hidden bg-nearblack z-0">
                      <Image
                        src={item.mainImage}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 135px, 155px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Phone (Metallic Pro Frame) */}
                  <div
                    className="relative h-[160px] w-[80px] -translate-x-12 translate-y-8 rotate-[12deg] overflow-hidden rounded-[1.2rem] border border-stone bg-nearblack shadow-2xl sm:h-[220px] sm:w-[110px] lg:h-[260px] lg:w-[130px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-6 group-hover:translate-y-0 group-hover:[transform:rotateY(-25deg)_rotateZ(5deg)_translateZ(-20px)]"
                  >
                    <div className="absolute inset-0 z-20 bg-gradient-to-tl from-white/5 via-transparent to-white/10 pointer-events-none" />
                    <div className="absolute inset-[2px] rounded-[1.1rem] overflow-hidden bg-nearblack z-0">
                      <Image
                        src={item.sneakPeekImages[1] || (item.sneakPeekImages[0] || item.mainImage)}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 110px, 130px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={`${item.mainImage}?v=9`}
                  alt={`${item.title} showcase`}
                  className="absolute top-0 left-0 w-full h-auto transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[58%]"
                  style={{
                    imageRendering: 'auto',
                    transform: 'translate3d(0, 0, 0)',
                    willChange: 'transform'
                  }}
                />
              </div>
            )}

            {/* Floating overlay card at bottom */}
            <div className="absolute inset-x-0 bottom-0 translate-y-6 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-50">
              <div className="flex items-center justify-between rounded-3xl border border-stone bg-white/95 px-6 py-5 text-nearblack shadow-lg backdrop-blur-xl transition duration-300 group-hover:border-teal/50">
                <div className="min-w-0 pr-4 text-left">
                  <p className="truncate text-[20px] font-bold leading-none tracking-tight text-nearblack">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                    {item.categoryLabel}
                  </p>
                </div>

                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-offwhite shadow-md transition duration-300 group-hover:scale-110">
                  <Send
                    aria-hidden="true"
                    size={16}
                    strokeWidth={2.5}
                    className="rotate-[-45deg] ml-0.5 mt-0.5"
                  />
                </span>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}
