"use client";

import Image from 'next/image';
import { useState } from 'react';

type CarGalleryProps = {
  images: string[];
  title: string;
  totalPhotos: number;
};

export function CarGallery({ images, title, totalPhotos }: CarGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];
  const hiddenPhotos = Math.max(0, totalPhotos - images.length);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="car-detail-gallery">
      <div className="car-main-preview">
        <Image src={activeImage} alt={`${title} main preview`} width={1200} height={760} priority />

        <button className="gallery-arrow gallery-arrow-prev" type="button" onClick={showPrevious} aria-label="Show previous photo" />
        <button className="gallery-arrow gallery-arrow-next" type="button" onClick={showNext} aria-label="Show next photo" />

        <div className="photo-count-badge" aria-label={`${totalPhotos} photos available`}>
          <span aria-hidden="true">?</span>
          {activeIndex + 1}/{totalPhotos} Photos
        </div>
      </div>

      <div className="detail-thumb-row" aria-label="Car image thumbnails">
        {images.map((image, index) => {
          const isLast = index === images.length - 1 && hiddenPhotos > 0;

          return (
            <button
              className={`detail-thumb ${index === activeIndex ? 'active' : ''}`}
              type="button"
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${title} photo ${index + 1}`}
            >
              <Image src={image} alt={`${title} thumbnail ${index + 1}`} width={240} height={170} />
              {isLast && <span className="thumb-more">+{hiddenPhotos}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
