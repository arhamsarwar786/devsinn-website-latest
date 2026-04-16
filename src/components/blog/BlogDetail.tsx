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

export default function BlogDetail({ blog }: { blog: Blog }) {
  const relatedBlogs = getRelatedBlogs(blog);

  return (
    <main className="bg-[linear-gradient(180deg,#F4F9FF_0%,#FFFFFF_22%,#F6FAFF_100%)] text-[#11264B] overflow-hidden">
      <section className="relative overflow-hidden bg-[#07152F] px-5 pb-20 pt-[138px] text-white sm:px-8 sm:pb-24 sm:pt-[154px] lg:px-10 lg:pb-28 lg:pt-[168px] xl:px-16">
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
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,41,0.92)_0%,rgba(9,28,62,0.82)_42%,rgba(10,34,74,0.66)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(97,208,255,0.16),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(72,115,255,0.18),transparent_26%)]" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/blog"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#90D6FF] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/12"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 text-[13px] font-medium uppercase tracking-[0.16em] text-white/76 sm:gap-5">
            <span className="rounded-full bg-white/14 px-4 py-2 text-[#90D6FF]">{blog.category}</span>
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

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] lg:items-end">
            <div className="max-w-[860px]">
              <motion.h1 variants={fadeInUp} className="text-[40px] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[74px] xl:text-[88px]">
                {blog.title}
              </motion.h1>
            </div>

            <motion.div variants={fadeInUp} className="rounded-[28px] border border-white/12 bg-[#071A38]/66 p-6 backdrop-blur-md sm:p-8">
              <p className="text-[17px] leading-[1.72] text-white/88 sm:text-[18px]">
                {blog.excerpt}
              </p>
              <div className="mt-7">
                <BlogShareButton title={blog.title} excerpt={blog.excerpt} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="-mt-10 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 xl:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="overflow-hidden rounded-[34px] border border-[#D8E8FB] bg-white shadow-[0_34px_70px_rgba(16,38,79,0.12)]"
          >
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 1279px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10"
        >
          <motion.article variants={fadeInUp} className="rounded-[32px] border border-[#D8E8FB] bg-white px-6 py-8 shadow-[0_24px_60px_rgba(16,38,79,0.08)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <BlogMarkdown content={blog.content} />
          </motion.article>

          <motion.aside variants={fadeInUp} className="space-y-8">
            <div className="rounded-[30px] border border-[#D8E8FB] bg-white p-6 shadow-[0_24px_60px_rgba(16,38,79,0.08)]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6F86AA]">
                Article Tags
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-[#CFE0F4] bg-[#F8FBFF] px-4 py-2 text-[14px] font-medium text-[#17305F]"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#0E2A54] bg-[linear-gradient(180deg,#10264F_0%,#17396B_100%)] p-7 text-white shadow-[0_28px_56px_rgba(16,38,79,0.22)]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#90D6FF]">
                Let&apos;s Build
              </p>
              <h2 className="mt-4 text-[28px] font-semibold leading-[1.04] tracking-[-0.04em]">
                Ready to turn your idea into a serious product?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.72] text-white/84">
                Partner with Devsinn Technologies for scalable websites, apps, AI products, and custom software.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-6 text-[16px] font-semibold text-[#17305F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#DFF5FF]"
                >
                  Free Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#74D7FF] hover:bg-[#0C2957]"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </section>

      {relatedBlogs.length > 0 ? (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-16 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto flex w-full max-w-[1280px] flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="max-w-[760px]">
              <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#2AAEFF]">
                Related Reads
              </p>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#132B56] sm:text-[42px] lg:text-[52px]">
                More articles from the same topic lane.
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer} 
              className="grid gap-6 lg:grid-cols-3"
              style={{ perspective: "1500px" }}
            >
              {relatedBlogs.map((item) => (
                <motion.div key={item.slug} variants={card3D} whileHover="hover">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex flex-col h-full overflow-hidden rounded-[30px] border border-[#D7E7FB] bg-[#F8FBFF] transition-all duration-300 hover:border-[#74CFFF] hover:shadow-[0_28px_52px_rgba(23,45,86,0.14)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2AAEFF]">
                        {item.category}
                      </p>
                      <h3 className="mt-3 text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#172D56]">
                        {item.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-[16px] leading-[1.68] text-[#4B5E7D]">
                        {item.excerpt}
                      </p>
                      <span className="mt-auto pt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#17305F] transition-all duration-300 group-hover:gap-3">
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
      ) : null}
    </main>
  );
}

