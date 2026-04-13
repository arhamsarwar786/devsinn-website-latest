"use client";

import { Share2 } from "lucide-react";

type BlogShareButtonProps = {
  title: string;
  excerpt: string;
};

export default function BlogShareButton({
  title,
  excerpt,
}: BlogShareButtonProps) {
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title,
        text: excerpt,
        url,
      });
      return;
    }

    await navigator.clipboard.writeText(url);
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-white/22 bg-white/12 px-6 text-[15px] font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
    >
      <Share2 size={18} />
      Share Article
    </button>
  );
}
