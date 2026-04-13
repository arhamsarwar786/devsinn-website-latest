import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Devsinn Technologies insights on software, AI, product strategy, and business growth.",
};

export default function BlogPage() {
  return (
    <>
      <BlogList />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
