import Image from 'next/image';
import Link from 'next/link';

import { blogPosts } from '@/data/site';

const blogImages = ['/img1.jpg', '/img2.jpg', '/ceramic coating.jpg', '/car1.jpg', '/interior.jpg', '/deep.jpg'];

const blogShowcase = blogPosts.map((post, index) => ({
  ...post,
  image: blogImages[index % blogImages.length]
}));

export default function BlogPage() {
  return (
    <main className="bg-[#f6f8fb]">
      <section className="w-full px-[clamp(16px,2vw,24px)] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center max-w-[700px] mx-auto">
            <p className="m-0 text-brand-2 text-[0.78rem] sm:text-[0.82rem] font-extrabold uppercase tracking-[0.18em]">
              Latest from Our Blog
            </p>
            <h1 className="mt-2 mb-0 text-[1.85rem] sm:text-[2.25rem] lg:text-[2.55rem] font-bold text-[#0d1b2a]">
              Tips, guides and news for car owners
            </h1>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogShowcase.slice(0, 6).map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[8px] border border-[rgba(13,27,42,0.08)] bg-white shadow-[0_12px_30px_rgba(10,27,50,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,27,50,0.11)]"
              >
                <div className="relative h-[190px] overflow-hidden bg-[#dde7f0]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 text-[0.74rem] font-bold uppercase tracking-[0.1em]">
                    <span className="text-brand-2">{post.category}</span>
                    <span className="text-[#7e8b9a] normal-case tracking-normal font-semibold">{post.date}</span>
                  </div>

                  <h2 className="mt-3 mb-0 text-[1.08rem] leading-[1.35] font-bold text-[#0d1b2a]">
                    {post.title}
                  </h2>

                  <p className="mt-3 mb-0 text-[0.92rem] leading-[1.65] text-muted">
                    {post.summary}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-bold text-brand-2 transition hover:gap-3"
                  >
                    Read More
                    <span aria-hidden="true">+</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Blog pagination">
            <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-[6px] bg-[#edf3f8] px-4 text-[0.92rem] font-semibold text-[#8a98a8]">
              Previous
            </span>
            <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-[6px] bg-brand px-4 text-[0.92rem] font-bold text-white">
              1
            </span>
            <Link
              href="/blog?page=2"
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-[6px] bg-white px-4 text-[0.92rem] font-semibold text-brand shadow-[0_8px_18px_rgba(10,27,50,0.07)] transition hover:bg-brand hover:text-white"
            >
              2
            </Link>
            <Link
              href="/blog?page=2"
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-[6px] bg-white px-4 text-[0.92rem] font-semibold text-brand shadow-[0_8px_18px_rgba(10,27,50,0.07)] transition hover:bg-brand hover:text-white"
            >
              Next
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
