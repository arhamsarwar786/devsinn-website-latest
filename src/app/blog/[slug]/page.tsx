import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "@/components/blog/BlogDetail";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import { blogs, getBlogBySlug } from "@/lib/blogs";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Blog`,
    description: blog.excerpt,
    keywords: blog.tags,
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogDetail blog={blog} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
