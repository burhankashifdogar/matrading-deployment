import Link from 'next/link';

import type { BlogPost } from '@/types/site';

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-surface border border-[rgba(13,27,42,0.1)] rounded-[28px] shadow-card overflow-hidden p-5">
      <div className="inline-flex items-center gap-2 text-brand-2 text-[0.78rem] font-extrabold uppercase tracking-[0.16em]">
        {post.category}
      </div>
      <h3 className="m-0 text-[1.05rem] leading-[1.25] font-semibold mt-1">{post.title}</h3>
      <p className="text-muted text-[0.88rem] mt-1.5">{post.summary}</p>
      <div className="flex gap-2 flex-wrap mt-1.5">
        <span className="text-[0.78rem] px-[0.65rem] py-[0.35rem] rounded-full bg-surface-2 text-brand-3">{post.date}</span>
      </div>
      <div className="flex gap-[0.6rem] flex-wrap mt-4">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-3 bg-white text-brand border border-[rgba(10,58,104,0.18)] font-bold text-[0.92rem] transition hover:-translate-y-px no-underline"
          href="/contact"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
