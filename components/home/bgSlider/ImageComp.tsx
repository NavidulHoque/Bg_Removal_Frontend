import Image, { StaticImageData } from 'next/image';

interface ImageCompProps {
  src: StaticImageData;
  alt: string;
  clipPath: string;
}

export default function ImageComp({src, alt, clipPath}: ImageCompProps) {

  return (
    <Image
      src={src}
      alt={alt}
      quality={100}
      className="absolute top-0 left-0 w-full h-full"
      style={{clipPath}}
    />
  )
}
