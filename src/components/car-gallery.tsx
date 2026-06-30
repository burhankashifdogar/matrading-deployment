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
  const activeImage = galleryImages[activeIndex] ?? mainImage;

  useEffect(() => {
    setActiveIndex(0);
  }, [mainImage, thumbnailImages]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="grid gap-4">
      {/* Main preview */}
      <div className="relative overflow-hidden rounded-[6px] bg-[#dbe6f2] shadow-detail h-[444px] max-h-[444px] max-[1080px]:h-[420px] max-[720px]:h-[300px]">
        <Image src={activeImage} alt={`${title} main preview`} width={1200} height={760} className="w-full object-cover object-center h-[444px] max-h-[444px] max-[1080px]:h-[420px] max-[720px]:h-[300px]" priority />

        {/* Prev arrow */}
        <button
          className="gallery-arrow absolute top-1/2 left-4 z-10 w-11 h-11 border-0 rounded-full bg-[rgba(255,255,255,0.86)] cursor-pointer -translate-y-1/2 shadow-gallery-arrow transition-[background-color,transform,opacity] duration-[180ms] gallery-arrow-prev"
          type="button"
          onClick={showPrevious}
          aria-label="Show previous photo"
        />
        {/* Next arrow */}
        <button
          className="gallery-arrow absolute top-1/2 right-4 z-10 w-11 h-11 border-0 rounded-full bg-[rgba(255,255,255,0.86)] cursor-pointer -translate-y-1/2 shadow-gallery-arrow transition-[background-color,transform,opacity] duration-[180ms] gallery-arrow-next"
          type="button"
          onClick={showNext}
          aria-label="Show next photo"
        />

        {/* Photo count badge */}
        <div
          className="absolute right-[1.1rem] bottom-4 inline-flex items-center gap-[0.55rem] rounded-[3px] bg-[rgba(255,255,255,0.88)] text-[#253d55] px-[0.9rem] py-[0.65rem] shadow-[0_12px_24px_rgba(8,20,40,0.12)] font-semibold"
          aria-label="Car gallery"
        >
          +{thumbnailImages.length} Photos
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-3 max-[720px]:grid-cols-3" aria-label="Car image thumbnails">
        {thumbnailImages.map((image, index) => {
          const imageIndex = index + 1;

          return (
            <button
              className={`relative border-0 rounded-[3px] bg-[#0f2538] p-0 shadow-[0_10px_22px_rgba(8,20,40,0.09)] overflow-hidden cursor-pointer h-[120px] max-[720px]:h-24 transition-[outline] ${image === activeImage ? 'outline outline-2 outline-[#063e66]' : ''}`}
              type="button"
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(imageIndex)}
              aria-label={`Show ${title} interior photo ${imageIndex}`}
            >
              <Image
                src={image}
                alt={`${title} interior thumbnail ${imageIndex}`}
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
