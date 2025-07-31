import Image from "next/image";

export default function ThirtiethSection() {
  return (
    <section className="relative h-screen snap-start text-white flex justify-center items-end">
      <div className="absolute z-10 w-full h-full">
        <Image
          src="/images/mekong-design-problems.png"
          alt="Design problems Lack of community participation"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="z-20 font-pridi font-medium text-4xl md:text-6xl lg:text-8xl leading-relaxed mb-16 scale-x-[1.05]">
        <div className="pb-1 lg:pb-6">ปัญหาการออกแบบ</div>
        <div>ขาดการมีส่วนร่วมของชุมชน</div>
      </div>
    </section>
  );
}
