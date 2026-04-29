import Image from "next/image";
import type { ReactNode } from "react";

type MarkdownBlock =
  | { type: "heading"; level: 2 | 3; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] }
  | { type: "image"; alt: string; src: string }
  | { type: "hr" };

function parseMarkdown(content: string): MarkdownBlock[] {
  const lines = content.split("\n");
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index]?.trim() ?? "";

    if (!line) {
      index += 1;
      continue;
    }

    if (line === "---") {
      blocks.push({ type: "hr" });
      index += 1;
      continue;
    }

    const imageMatch = line.match(/^!\[(.*)\]\((.+)\)$/);
    if (imageMatch) {
      blocks.push({
        type: "image",
        alt: imageMatch[1],
        src: imageMatch[2],
      });
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{2,3})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length as 2 | 3,
        content: headingMatch[2],
      });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const currentLine = lines[index]?.trim() ?? "";
      if (
        !currentLine ||
        currentLine === "---" ||
        currentLine.startsWith("- ") ||
        /^!\[(.*)\]\((.+)\)$/.test(currentLine) ||
        /^(#{2,3})\s+(.*)$/.test(currentLine)
      ) {
        break;
      }

      paragraphLines.push(currentLine);
      index += 1;
    }

    if (paragraphLines.length > 0) {
      blocks.push({
        type: "paragraph",
        content: paragraphLines.join(" "),
      });
    }
  }

  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const segments = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return segments.map((segment, index) => {
    const strongMatch = segment.match(/^\*\*(.+)\*\*$/);

    if (strongMatch) {
      return (
        <strong key={`${segment}-${index}`} className="font-bold text-[var(--primary)]">
          {strongMatch[1]}
        </strong>
      );
    }

    return <span key={`${segment}-${index}`}>{segment}</span>;
  });
}

export default function BlogMarkdown({ content }: { content: string }) {
  const blocks = parseMarkdown(content);

  return (
    <div className="space-y-8 text-[1.1rem] leading-[1.8] text-white/70">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2
                key={`${block.content}-${index}`}
                className="pt-6 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.5rem]"
              >
                {block.content}
              </h2>
            );
          }

          return (
            <h3
              key={`${block.content}-${index}`}
              className="pt-4 text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-white/90 sm:text-[1.8rem]"
            >
              {block.content}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`list-${index}`}
              className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-8 py-8 text-white/80 shadow-2xl"
            >
              {block.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`} className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)] shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <div
              key={`${block.src}-${index}`}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--surface-0)] shadow-2xl my-10"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 900px"
                  className="object-cover opacity-90 mix-blend-screen"
                />
              </div>
            </div>
          );
        }

        if (block.type === "hr") {
          return <div key={`hr-${index}`} className="h-px w-full bg-white/10 my-10" />;
        }

        return (
          <p key={`${block.content.slice(0, 24)}-${index}`} className="text-white/70">
            {renderInline(block.content)}
          </p>
        );
      })}
    </div>
  );
}
