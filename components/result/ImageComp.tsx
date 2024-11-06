import Image, { StaticImageData } from "next/image";

interface ImageCompProps {
    src: StaticImageData;
    alt: string;
}

export default function ImageComp({src, alt}: ImageCompProps) {
    return (
        <Image
            src={src}
            alt={alt}
            className='rounded-[10px]'
            quality={100}
            fill
        />
    )
}
