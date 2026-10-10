"use client";

import Image from "next/image";
import { useRef } from "react";

export default function MediaThumb({
  image,
  video,
  sizes,
}: {
  image: { src: string; alt: string };
  video?: string;
  sizes: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (video) {
    return (
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={image.alt}
        className="h-full w-full object-cover grayscale contrast-[1.05] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
      />
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      className="object-cover grayscale contrast-[1.05] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
    />
  );
}
