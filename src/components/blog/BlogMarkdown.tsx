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
        <strong key={`${segment}-${index}`} className="font-semibold text-[#10264F]">
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
    <div className="space-y-7 text-[17px] leading-[1.9] text-[#455774] sm:text-[18px]">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2
                key={`${block.content}-${index}`}
                className="pt-5 text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#10264F] sm:text-[36px] lg:text-[42px]"
              >
                {block.content}
              </h2>
            );
          }

          return (
            <h3
              key={`${block.content}-${index}`}
              className="pt-2 text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#163869] sm:text-[26px]"
            >
              {block.content}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`list-${index}`}
              className="space-y-3 rounded-[28px] border border-[#D7E7FB] bg-[#F7FBFF] px-6 py-6 text-[#36507D] shadow-[0_18px_40px_rgba(16,38,79,0.06)]"
            >
              {block.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2AAEFF]" />
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
              className="overflow-hidden rounded-[30px] border border-[#D7E7FB] bg-white shadow-[0_28px_52px_rgba(23,45,86,0.12)]"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            </div>
          );
        }

        if (block.type === "hr") {
          return <div key={`hr-${index}`} className="h-px w-full bg-[#D7E7FB]" />;
        }

        return (
          <p key={`${block.content.slice(0, 24)}-${index}`} className="text-[#455774]">
            {renderInline(block.content)}
          </p>
        );
      })}
    </div>
  );
}
