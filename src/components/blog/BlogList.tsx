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
    <main className="bg-[#060C1A] text-white overflow-hidden">
      <section className="relative flex h-[100svh] flex-col overflow-hidden bg-[#060C1A] text-white">
        {/* Deep Space Background Glows */}
        <div className="absolute inset-0 bg-[#060C1A]" />

        {/* Animated Glowing Orbs */}
        <motion.div
          className="pointer-events-none absolute left-[50%] top-[30%] h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* The Globe Background - Premium Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Glow exactly under the globe */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[64%] top-[78%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-gradient-to-tr from-[#38bdf8] to-[#c084fc] sm:left-[68%] sm:top-[70%] lg:left-[65%] lg:top-[50%] lg:h-[800px] lg:w-[800px]"
          />

          {/* Rotating Globe Image */}
          <motion.div
            className="absolute left-[64%] top-[78%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden sm:left-[68%] sm:top-[70%] lg:left-[65%] lg:top-[50%] lg:h-[1200px] lg:w-[1200px]"
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 70%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 70%)'
            }}
          >
            <Image
              src="/globe-premium.png"
              alt="Digital globe background"
              fill
              priority
              sizes="(max-width: 1024px) 800px, 1200px"
              className="object-cover opacity-90 mix-blend-screen drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            />
          </motion.div>
        </motion.div>

        {/* Cinematic Vignette Overlays */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#060C1A] via-[#060C1A]/80 to-transparent lg:via-[#060C1A]/60" />
        <div className="pointer-events-none absolute inset-0 z-10 lg:bg-gradient-to-r lg:from-[#060C1A] lg:via-[#060C1A] lg:to-transparent lg:w-[65%]" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#060C1A] via-transparent to-[#060C1A] lg:bg-gradient-to-t lg:from-[#060C1A] lg:via-transparent lg:to-transparent" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-[1568px] flex-col justify-center px-5 pb-32 pt-20 sm:px-8 lg:px-10 xl:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[860px]"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-5 py-2.5 backdrop-blur-md">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#38bdf8]">
                Devsinn Insights
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[2rem] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
              Insights, ideas, and real <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">product thinking</span> from the team.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 max-w-[760px] rounded-full border border-white/10 bg-[#0A0F1E]/60 p-1.5 shadow-2xl backdrop-blur-xl"
            >
              <label className="relative block">
                <Search
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-white/50"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles, tags, or topics..."
                  className="h-12 w-full rounded-full bg-transparent pl-14 pr-6 text-[1rem] text-white outline-none transition-all placeholder:text-white/40 focus:ring-1 focus:ring-[#38bdf8]/50"
                />
              </label>
            </motion.div>
          </motion.div>


        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-white/10 bg-[#060C1A]/80 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-10 xl:px-16">
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
              className={`relative inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-[14px] font-bold transition-all duration-300 ${activeCategory === category
                ? "bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#060C1A] shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                : "border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {featuredBlog ? (
        <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-16">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute left-[10%] top-[40%] h-[700px] w-[700px] -translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.06)_0%,transparent_70%)] blur-[100px]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <TrendingUp className="text-[#38bdf8]" size={24} />
              <h2 className="text-[28px] font-bold tracking-[-0.03em] text-white sm:text-[34px]">
                Featured Article
              </h2>
            </motion.div>

            <motion.div
              className="relative group block"
            >
              <Link href={`/blog/${featuredBlog.slug}`}>
                <motion.div
                  variants={card3D}
                  whileHover="hover"
                  className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0F1E] shadow-2xl transition-all duration-500 hover:border-[#38bdf8]/40"
                >
                  <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                    <div className="relative min-h-[320px] lg:min-h-[500px] overflow-hidden bg-[#060C1A]">
                      <Image
                        src={featuredBlog.image}
                        alt={featuredBlog.title}
                        fill
                        sizes="(max-width: 1023px) 100vw, 60vw"
                        className="object-cover opacity-90 mix-blend-screen transition-transform duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0F1E] hidden lg:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent lg:hidden" />
                    </div>

                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 relative z-10 lg:-ml-10">
                      <div className="flex flex-wrap items-center gap-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white/50">
                        <span className="rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 px-4 py-2 text-[#38bdf8]">
                          {featuredBlog.category}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Calendar size={14} />
                          {formatBlogDate(featuredBlog.publishedAt)}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Clock size={14} />
                          {featuredBlog.readTime}
                        </span>
                      </div>

                      <h3 className="mt-8 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.5rem]">
                        {featuredBlog.title}
                      </h3>
                      <p className="mt-5 text-[1.1rem] leading-[1.7] text-white/60 line-clamp-3">
                        {featuredBlog.excerpt}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {featuredBlog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/70"
                          >
                            <Tag size={13} />
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

      <section className="relative px-5 pb-20 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40 xl:px-16 overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute right-[10%] top-[40%] h-[700px] w-[700px] translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.06)_0%,transparent_70%)] blur-[100px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-12"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <motion.div variants={fadeInUp}>
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#c084fc]">
                Blog Library
              </p>
              <h2 className="mt-4 text-[2.5rem] font-black leading-[1.04] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4rem]">
                {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-[16px] font-medium text-white/50 mb-2">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}
            </motion.p>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredBlogs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-[2rem] border border-white/10 bg-[#0A0F1E] px-6 py-20 text-center shadow-2xl"
              >
                <h3 className="text-[2rem] font-bold tracking-[-0.03em] text-white">
                  No articles found
                </h3>
                <p className="mt-4 text-[1.1rem] leading-[1.7] text-white/50">
                  Try another keyword or switch the category filter.
                </p>
              </motion.div>
            ) : (
              <motion.div
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
              >
                {gridBlogs.map((blog) => (
                  <motion.div
                    key={blog.slug}
                    variants={card3D}
                    whileHover="hover"
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0F1E] shadow-2xl transition-all duration-300 hover:border-[#38bdf8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#060C1A]">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                          className="object-cover opacity-90 mix-blend-screen transition-transform duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
                        <div className="absolute left-6 top-6">
                          <span className="rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 backdrop-blur-md px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] shadow-2xl">
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-8 pt-4">
                        <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
                          <span className="inline-flex items-center gap-2">
                            <Calendar size={14} />
                            {formatBlogDate(blog.publishedAt, true)}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Clock size={14} />
                            {blog.readTime}
                          </span>
                        </div>

                        <h3 className="mt-5 text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03em] text-white">
                          {blog.title}
                        </h3>
                        <p className="mt-4 flex-1 text-[1rem] leading-[1.7] text-white/60 line-clamp-3">
                          {blog.excerpt}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {blog.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/70"
                            >
                              <Tag size={12} />
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
