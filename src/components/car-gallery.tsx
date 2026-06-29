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
    <div className="car-detail-gallery">
      <div className="car-main-preview">
        <Image src={activeImage} alt={`${title} main preview`} width={1200} height={760} priority />

        <button className="gallery-arrow gallery-arrow-prev" type="button" onClick={showPrevious} aria-label="Show previous photo" />
        <button className="gallery-arrow gallery-arrow-next" type="button" onClick={showNext} aria-label="Show next photo" />

        <div className="photo-count-badge" aria-label="Car gallery">
          +{thumbnailImages.length} Photos
        </div>
      </div>

      <div className="detail-thumb-row" aria-label="Car image thumbnails">
        {thumbnailImages.map((image, index) => {
          const imageIndex = index + 1;

          return (
            <button
              className={`detail-thumb ${image === activeImage ? 'active' : ''}`}
              type="button"
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(imageIndex)}
              aria-label={`Show ${title} interior photo ${imageIndex}`}
            >
              <Image src={image} alt={`${title} interior thumbnail ${imageIndex}`} width={240} height={170} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
