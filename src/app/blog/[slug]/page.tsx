import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { blogPosts } from '@/data/site';

const blogImages = ['/img1.jpg', '/img2.jpg', '/ceramic coating.jpg', '/car1.jpg', '/interior.jpg', '/deep.jpg'];

const blogShowcase = blogPosts.map((post, index) => ({
  ...post,
  image: blogImages[index % blogImages.length]
}));

export function generateStaticParams() {
  return blogShowcase.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogShowcase.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f3f7fb]">
      <section className="w-full px-[clamp(16px,2vw,24px)] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[8px] border border-[rgba(10,58,104,0.08)] bg-white shadow-[0_18px_44px_rgba(10,27,50,0.08)]">
          <div className="relative h-[280px] bg-[#dde7f0] sm:h-[360px]">
            <Image src={post.image} alt={post.title} fill className="object-cover object-center" priority />
          </div>

          <div className="px-[clamp(18px,3vw,38px)] py-[clamp(22px,3vw,36px)]">
            <div className="flex flex-wrap items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em]">
              <span className="text-brand-2">{post.category}</span>
              <span className="text-[#8a98a8] normal-case tracking-normal font-medium">{post.date}</span>
            </div>

            <h1 className="mt-3 mb-0 text-[1.85rem] sm:text-[2.3rem] lg:text-[2.7rem] font-bold text-[#0d1b2a]">
              {post.title}
            </h1>

            <p className="mt-4 mb-0 max-w-[65ch] text-[1rem] leading-[1.75] text-muted">
              {post.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-[8px] border border-[rgba(10,58,104,0.16)] bg-white px-5 py-3 text-[0.94rem] font-semibold text-brand transition hover:-translate-y-px no-underline"
              >
                Back to Blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[8px] bg-gradient-to-r from-brand to-brand-2 px-5 py-3 text-[0.94rem] font-bold text-white shadow-[0_14px_28px_rgba(10,58,104,0.18)] transition hover:-translate-y-px no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
