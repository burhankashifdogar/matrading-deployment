import { BlogCard } from '@/components/blog-card';
import { PageShell } from '@/components/page-shell';
import { blogPosts } from '@/data/site';

export default function BlogPage() {
  return (
    <div className="stack">
      <PageShell
        eyebrow="Blog"
        title="Latest from our blog"
        description="A simple content layer now, ready for an admin-managed blog later."
      />

      <section className="grid-cards posts-grid">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
