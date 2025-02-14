import { ImageLoaderProps } from 'next/image';

const imageLoader = (props: ImageLoaderProps) => {
   return `${props.src}?w=${props.width}&q=${props.quality ?? 75}`;
};

export { imageLoader };
