"use client";

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
};

export default function AnimatedNumber({ to, duration = 1400, suffix = '' }: Props) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const onVisible = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const start = performance.now();
      const from = 0;

      const step = (ts: number) => {
        const t = Math.min((ts - start) / duration, 1);
        const current = Math.round(from + (to - from) * easeOutCubic(t));
        setValue(current);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible();
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(node);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration]);

  return (
    <span
      ref={(el) => {
        nodeRef.current = el;
      }}
    >
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}
