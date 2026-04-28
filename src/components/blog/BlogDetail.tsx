"use client";

import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/blogs";
import { formatBlogDate, getRelatedBlogs } from "@/lib/blogs";
import BlogMarkdown from "./BlogMarkdown";
import BlogShareButton from "./BlogShareButton";
import { fadeInUp, staggerContainer, scaleIn, fadeIn, card3D } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";

export default function BlogDetail({ blog }: { blog: Blog }) {
  const relatedBlogs = getRelatedBlogs(blog);

  return (
    <main className="bg-[#060C1A] text-white overflow-hidden">
      <section className="relative overflow-hidden bg-[#0A0F1E] px-5 pb-16 pt-[120px] text-white sm:px-8 sm:pb-20 sm:pt-[140px] lg:px-10 lg:pb-24 lg:pt-[160px] xl:px-16 min-h-[100svh] flex flex-col justify-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A] via-[#060C1A]/80 to-[#060C1A]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(56,189,248,0.1),transparent_40%),radial-gradient(circle_at_78%_18%,rgba(192,132,252,0.1),transparent_30%)]" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-8 z-10"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/blog"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] backdrop-blur-md transition duration-300 hover:border-[#38bdf8]/40 hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 sm:gap-4">
            <span className="rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-3 py-1.5 text-[#38bdf8] backdrop-blur-sm">{blog.category}</span>
            <span className="inline-flex items-center gap-2">
              <Calendar size={15} />
              {formatBlogDate(blog.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={15} />
              {blog.readTime}
            </span>
            <span className="inline-flex items-center gap-2">
              <TrendingUp size={15} />
              {blog.views.toLocaleString()} views
            </span>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:items-end">
            <div className="max-w-[900px]">
              <motion.h1 variants={fadeInUp} className="text-[1.8rem] font-black leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.6rem]">
                {blog.title}
              </motion.h1>
            </div>

            <motion.div variants={fadeInUp} className="rounded-[2rem] border border-white/10 bg-[#0A0F1E]/60 p-6 backdrop-blur-xl sm:p-8 shadow-2xl">
              <p className="text-[1.05rem] leading-[1.7] text-white/70">
                {blog.excerpt}
              </p>
              <div className="mt-8">
                <BlogShareButton title={blog.title} excerpt={blog.excerpt} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      <section className="-mt-12 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 xl:px-16 relative z-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0F1E] shadow-2xl"
          >
            <div className="relative aspect-[16/8] w-full bg-[#060C1A]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 1279px) 100vw, 1280px"
                className="object-cover mix-blend-screen opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-5 pb-20 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40 xl:px-16 overflow-hidden relative">
        <div className="pointer-events-none absolute left-[0%] top-[20%] h-[700px] w-[700px] -translate-x-[20%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.05)_0%,transparent_70%)] blur-[100px]" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 relative z-10"
        >
          <motion.article variants={fadeInUp} className="rounded-[2.5rem] border border-white/10 bg-[#0A0F1E]/80 backdrop-blur-md px-6 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <BlogMarkdown content={blog.content} />
          </motion.article>

          <motion.aside variants={fadeInUp} className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#0A0F1E] p-8 shadow-2xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
                Article Tags
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/70 transition-colors hover:border-[#38bdf8]/40 hover:text-white"
                  >
                    <Tag size={13} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0A0F1E] to-[#0A1D3A] p-8 text-white shadow-[0_0_40px_rgba(56,189,248,0.1)] relative overflow-hidden">
               <div className="absolute top-0 right-0 h-32 w-32 bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,transparent_70%)] blur-xl" />
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#c084fc] relative z-10">
                Let's Build
              </p>
              <h2 className="mt-4 text-[1.8rem] font-bold leading-[1.1] tracking-[-0.03em] relative z-10">
                Ready to turn your idea into a <span className="text-[#38bdf8]">serious product?</span>
              </h2>
              <p className="mt-5 text-[1rem] leading-[1.7] text-white/70 relative z-10">
                Partner with Devsinn Technologies for scalable websites, apps, AI products, and custom software.
              </p>
              <div className="mt-8 flex flex-col gap-4 relative z-10">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8] px-6 py-4 text-center text-[15px] font-bold text-[#060C1A] transition-transform hover:scale-[1.02]"
                >
                  Free Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-4 text-center text-[15px] font-bold text-white transition-all hover:bg-white/10 hover:border-white/40"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </section>

      {relatedBlogs.length > 0 ? (
        <>
          <SectionDivider />
          <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:py-40 xl:px-16 overflow-hidden">
          <div className="pointer-events-none absolute right-[10%] top-[40%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.06)_0%,transparent_70%)] blur-[100px]" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-12"
          >
            <motion.div variants={fadeInUp} className="max-w-[760px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#38bdf8]">
                Related Reads
              </p>
              <h2 className="mt-4 text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4rem]">
                More articles from the same topic lane.
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer} 
              className="grid gap-8 lg:grid-cols-3"
            >
              {relatedBlogs.map((item) => (
                <motion.div key={item.slug} variants={card3D} whileHover="hover">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex flex-col h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0F1E] shadow-2xl transition-all duration-300 hover:border-[#38bdf8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#060C1A]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="object-cover opacity-90 mix-blend-screen transition-transform duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
                        {item.category}
                      </p>
                      <h3 className="mt-4 text-[1.4rem] font-bold leading-[1.2] tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 text-[1rem] leading-[1.7] text-white/50">
                        {item.excerpt}
                      </p>
                      <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#818cf8] transition-all duration-300 group-hover:gap-3">
                        Read Article
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </>
      ) : null}
    </main>
  );
}
