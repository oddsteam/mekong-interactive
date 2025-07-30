import Image from "next/image";

export default function ThirtyFourthSection() {
  return (
    <section className="relative h-screen snap-start bg-[#171918] text-white flex justify-center items-end">
      <div className="absolute z-10 w-full h-full">
        <Image
          src="/images/brae-with-film-filter.png"
          alt="Brae with film filter"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>

      <div className="z-20 font-pridi font-medium text-4xl lg:text-6xl px-4 w-4xl lg:w-6xl leading-relaxed mb-20 scale-x-[1.05]">
        <div className="pb-1 lg:pb-6">ประเมินเขื่อนป้องกันตลิ่งโขงทุกมิติ</div>
        <div>คุ้มค่า-ตอบโจทย์ เพื่อคนไทยทุกภาคส่วน</div>
      </div>
    </section>
  );
}
