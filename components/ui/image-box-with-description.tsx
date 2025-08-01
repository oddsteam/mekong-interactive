import Image from "next/image";
export default function ImageBoxWithDescription({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="relative w-full aspect-[4/3] max-w-sm">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded"
          sizes="100vw"
          priority
        />
      </div>
      <p className="text-[#FFEB52] text-lg lg:text-2xl font-bold text-center mt-3">
        {title}
      </p>
      <p className="max-w-xs text-xs mt-2 text-center font-light">
        {description}
      </p>
    </div>
  );
}
