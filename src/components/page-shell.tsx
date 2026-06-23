import type { ReactNode } from 'react';

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="page-hero">
      <div className="content-wrap">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 className="page-title">{title}</h1>
        {description ? <p className="section-copy">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
