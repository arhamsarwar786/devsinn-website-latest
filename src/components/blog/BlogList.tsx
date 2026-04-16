"use client";

import { Calendar, Clock, Search, Tag, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogCategories, blogs, formatBlogDate } from "@/lib/blogs";
import { fadeInUp, staggerContainer, fadeIn, card3D } from "@/lib/motion";

export default function BlogList() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        blog.title.toLowerCase().includes(normalizedQuery) ||
        blog.excerpt.toLowerCase().includes(normalizedQuery) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featuredBlog = useMemo(
    () =>
      blogs.find(
        (blog) =>
          blog.featured &&
          (activeCategory === "All" || blog.category === activeCategory) &&
          (!query.trim() ||
            blog.title.toLowerCase().includes(query.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            blog.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))),
      ),
    [activeCategory, query],
  );

  const gridBlogs = featuredBlog
    ? filteredBlogs.filter((blog) => blog.id !== featuredBlog.id)
    : filteredBlogs;

  return (
    <main className="bg-[linear-gradient(180deg,#F4F9FF_0%,#FFFFFF_24%,#F6FAFF_100%)] text-[#11264B] overflow-hidden">
      <section className="relative overflow-hidden bg-[#08142D] text-white">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="absolute inset-0">
          <Image
            src="/global.png"
            alt="Blog background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[66%_center]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,29,0.92)_0%,rgba(8,22,52,0.72)_36%,rgba(7,20,48,0.42)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,12,29,0.97)_0%,rgba(9,22,52,0.9)_28%,rgba(18,49,118,0.36)_60%,rgba(8,20,48,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_42%,rgba(78,132,255,0.32)_0%,rgba(9,23,52,0.12)_42%,rgba(4,11,26,0.04)_100%)]" />

        <div className="relative mx-auto flex min-h-[78svh] w-full max-w-[1568px] flex-col justify-center px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-18 lg:pt-[118px] xl:px-16 xl:pt-[138px]">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[860px]"
          >
            <motion.p variants={fadeInUp} className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#8cecff] sm:text-[14px]">
              Devsinn Insights
            </motion.p>
            <motion.h1 variants={fadeInUp} className="mt-5 text-[2.8rem] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.8rem] lg:text-[5rem] xl:text-[5.6rem]">
              Insights, ideas, and real product thinking from the team.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-5 max-w-[720px] text-[1rem] leading-[1.75] text-white/90 sm:text-[1.08rem] lg:text-[1.15rem]">
              Same blog content from your reference project, rebuilt inside your current Devsinn website theme so it feels consistent with the rest of the brand.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-[760px] rounded-[30px] border border-white/12 bg-white/10 p-3 shadow-[0_28px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          >
            <label className="relative block">
              <Search
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/55"
              />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles, tags, or topics..."
                className="h-15 w-full rounded-[22px] border border-white/12 bg-[#0F2348]/66 pl-13 pr-5 text-[16px] text-white outline-none placeholder:text-white/45 focus:border-[#74D7FF] focus:bg-[#10284F]"
              />
            </label>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-[#D7E7FB] bg-white/82 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-10 xl:px-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto flex w-full max-w-[1280px] flex-wrap gap-3"
        >
          {blogCategories.map((category) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`inline-flex min-h-[48px] items-center justify-center rounded-full px-5 text-[15px] font-semibold transition duration-300 ${
                activeCategory === category
                  ? "bg-[#17305F] text-white shadow-[0_18px_40px_rgba(16,38,79,0.16)]"
                  : "border border-[#D7E7FB] bg-[#F8FBFF] text-[#17305F] hover:-translate-y-0.5 hover:border-[#74D7FF]"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {featuredBlog ? (
        <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto flex w-full max-w-[1280px] flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <TrendingUp className="text-[#2AAEFF]" size={24} />
              <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#132B56] sm:text-[34px]">
                Featured Article
              </h2>
            </motion.div>

            <motion.div 
              className="relative"
              style={{ perspective: "2000px" }}
            >
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="group block"
              >
                <motion.div 
                  variants={card3D}
                  whileHover="hover"
                  className="overflow-hidden rounded-[36px] border border-[#D7E7FB] bg-white shadow-[0_28px_60px_rgba(16,38,79,0.08)] transition duration-300 hover:border-[#74CFFF] hover:shadow-[0_34px_70px_rgba(16,38,79,0.14)]"
                >
                  <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
                    <div className="relative min-h-[320px] overflow-hidden">
                      <Image
                        src={featuredBlog.image}
                        alt={featuredBlog.title}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium uppercase tracking-[0.16em] text-[#6F86AA]">
                        <span className="rounded-full bg-[#17305F] px-4 py-2 text-white">
                          {featuredBlog.category}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Calendar size={15} />
                          {formatBlogDate(featuredBlog.publishedAt)}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Clock size={15} />
                          {featuredBlog.readTime}
                        </span>
                      </div>

                      <h3 className="mt-6 text-[32px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#132B56] sm:text-[40px] lg:text-[48px]">
                        {featuredBlog.title}
                      </h3>
                      <p className="mt-5 text-[17px] leading-[1.72] text-[#455774]">
                        {featuredBlog.excerpt}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        {featuredBlog.tags.slice(0, 3).map((tag) => (
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
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      ) : null}

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 xl:px-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <motion.div variants={fadeInUp}>
              <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#2AAEFF]">
                Blog Library
              </p>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#132B56] sm:text-[42px] lg:text-[52px]">
                {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-[16px] text-[#5C6F8F]">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}
            </motion.p>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredBlogs.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-[34px] border border-[#D8E8FB] bg-white px-6 py-16 text-center shadow-[0_24px_60px_rgba(16,38,79,0.08)]"
              >
                <h3 className="text-[28px] font-semibold tracking-[-0.03em] text-[#132B56]">
                  No articles found
                </h3>
                <p className="mt-3 text-[17px] leading-[1.72] text-[#455774]">
                  Try another keyword or switch the category filter.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                variants={staggerContainer}
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                style={{ perspective: "1500px" }}
              >
                {gridBlogs.map((blog) => (
                  <motion.div
                    key={blog.slug}
                    variants={card3D}
                    whileHover="hover"
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#D7E7FB] bg-white shadow-[0_20px_48px_rgba(16,38,79,0.06)] transition duration-300 hover:border-[#74CFFF] hover:shadow-[0_28px_52px_rgba(23,45,86,0.14)]"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute left-5 top-5">
                          <span className="rounded-full bg-white/92 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#17305F] shadow-[0_14px_28px_rgba(16,38,79,0.12)]">
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[#6F86AA]">
                          <span className="inline-flex items-center gap-2">
                            <Calendar size={14} />
                            {formatBlogDate(blog.publishedAt, true)}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Clock size={14} />
                            {blog.readTime}
                          </span>
                        </div>

                        <h3 className="mt-4 text-[26px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#172D56]">
                          {blog.title}
                        </h3>
                        <p className="mt-4 flex-1 text-[16px] leading-[1.72] text-[#4B5E7D]">
                          {blog.excerpt}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {blog.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-2 rounded-full bg-[#F4F9FF] px-3 py-2 text-[13px] font-medium text-[#17305F]"
                            >
                              <Tag size={13} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}

