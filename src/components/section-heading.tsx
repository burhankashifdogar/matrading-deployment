import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-4 mb-4">
      <div>
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 text-brand-2 text-[0.78rem] font-extrabold uppercase tracking-[0.16em]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="m-0 text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1] font-bold">{title}</h2>
        {description ? <p className="text-muted max-w-[58ch] leading-[1.65]">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
