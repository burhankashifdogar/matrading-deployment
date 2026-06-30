import type { ReactNode } from 'react';

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="pt-7 pb-0">
      <div className="w-full px-[clamp(16px,2vw,24px)]">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 text-brand-2 text-[0.78rem] font-extrabold uppercase tracking-[0.16em]">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="mt-2 mb-0 text-[clamp(2rem,4vw,3.3rem)] font-bold">{title}</h1>
        {description ? <p className="text-muted max-w-[58ch] leading-[1.65]">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
