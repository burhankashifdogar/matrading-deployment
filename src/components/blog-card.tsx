import Link from 'next/link';

import type { BlogPost } from '@/types/site';

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="panel post-card panel-pad">
      <div className="eyebrow">{post.category}</div>
      <h3 className="card-title">{post.title}</h3>
      <p className="card-subtitle">{post.summary}</p>
      <div className="meta-row">
        <span className="meta">{post.date}</span>
      </div>
      <div className="action-row">
        <Link className="button secondary" href="/contact">
          Read More
        </Link>
      </div>
    </article>
  );
}
