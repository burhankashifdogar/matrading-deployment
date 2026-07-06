"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

type CarGalleryProps = {
  mainImage: string;
  thumbnailImages: string[];
  title: string;
};

export function CarGallery({ mainImage, thumbnailImages, title }: CarGalleryProps) {
  const galleryImages = [mainImage, ...thumbnailImages];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const activeImage = galleryImages[activeIndex] ?? mainImage;

  useEffect(() => {
    setActiveIndex(0);
  }, [mainImage, thumbnailImages]);

  useEffect(() => {
    if (!isExpanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="grid gap-3 min-w-0">
      <div className="relative overflow-hidden rounded-[10px] bg-[#dbe6f2] shadow-detail h-[560px] max-h-[560px] max-[1080px]:h-[500px] max-[720px]:h-[380px] max-[420px]:h-[280px]">
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="absolute inset-0 z-[1] p-0 border-0 bg-transparent cursor-zoom-in"
          aria-label={`Open ${title} image in full screen`}
        >
          <Image
            src={activeImage}
            alt={`${title} main preview`}
            width={1200}
            height={760}
            className="w-full h-full object-contain object-center"
            priority
          />
        </button>

        <button
          className="gallery-arrow absolute top-1/2 left-3 sm:left-4 z-10 w-10 h-10 sm:w-11 sm:h-11 border-0 rounded-full bg-[rgba(255,255,255,0.92)] cursor-pointer -translate-y-1/2 shadow-gallery-arrow transition-[background-color,transform,opacity] duration-[180ms] gallery-arrow-prev"
          type="button"
          onClick={showPrevious}
          aria-label="Show previous photo"
        />
        <button
          className="gallery-arrow absolute top-1/2 right-3 sm:right-4 z-10 w-10 h-10 sm:w-11 sm:h-11 border-0 rounded-full bg-[rgba(255,255,255,0.92)] cursor-pointer -translate-y-1/2 shadow-gallery-arrow transition-[background-color,transform,opacity] duration-[180ms] gallery-arrow-next"
          type="button"
          onClick={showNext}
          aria-label="Show next photo"
        />

        <div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-[0.55rem] rounded-[3px] bg-[rgba(255,255,255,0.92)] text-[#253d55] px-[0.9rem] py-[0.65rem] shadow-[0_12px_24px_rgba(8,20,40,0.12)] font-semibold"
          aria-label="Car gallery"
        >
          +{galleryImages.length} Photos
        </div>
      </div>

      {isExpanded ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          onClick={() => setIsExpanded(false)}
        >
          <button
            type="button"
            className="absolute inset-0 border-0 bg-transparent cursor-zoom-out"
            aria-label="Close image preview"
            onClick={() => setIsExpanded(false)}
          />
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label="Close image preview"
            className="absolute top-5 right-5 z-[2] inline-flex h-12 w-12 items-center justify-center rounded-full border-0 bg-[rgba(255,255,255,0.92)] text-[#0a2746] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition hover:bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="relative z-[1] w-[min(96vw,1200px)] h-[min(90vh,900px)] bg-transparent" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage}
              alt={`${title} full screen preview`}
              fill
              className="object-contain object-center"
              sizes="96vw"
            />
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-6 gap-3 max-[720px]:grid-cols-3 max-[420px]:grid-cols-2" aria-label="Car image thumbnails">
        {galleryImages.map((image, index) => {
          const isActive = image === activeImage;

          return (
            <button
              className={`relative border-0 rounded-[3px] bg-[#0f2538] p-0 shadow-[0_10px_22px_rgba(8,20,40,0.09)] overflow-hidden cursor-pointer h-[120px] max-[720px]:h-24 max-[420px]:h-20 transition-[outline] ${isActive ? 'outline outline-2 outline-[#063e66]' : ''}`}
              type="button"
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${title} photo ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} gallery thumbnail ${index + 1}`}
                width={240}
                height={170}
                className="w-full h-full object-cover object-center transition-[transform,opacity] duration-[220ms] hover:scale-105"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}