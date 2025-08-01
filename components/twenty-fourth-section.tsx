import Image from "next/image";

export default function TwentyFourthSection() {
  return (
    <section className="relative w-screen snap-start text-white flex justify-center items-end">
      <div className="relative w-full">
        <Image
          src="/images/compare-mekong.png"
          alt="Compare Mekong"
          className="object-contain"
          width={1920}
          height={0}
          priority
        />
      </div>

      <div className="absolute z-20 leading-relaxed mb-16 scale-x-[1.05] text-start left-24 lg:left-48">
        <div className="font-pridi text-6xl lg:text-8xl mb-1 lg:mb-6 font-medium">
          ชีวิตริมโขงที่เปลี่ยนไป
        </div>
        <div className="font-ibm font-light text-xl lg:text-2xl">
          ผลกระทบอีกมิติหนึ่งที่เกิดจากการสร้างเขื่อนป้องกันตลิ่งริมแม่น้ำโขงคือ
          <br />
          วิถีชีวิตดั้งเดิมและสภาพภูมิทัศน์ของชุมชนริมโขง
        </div>
      </div>
    </section>
  );
}
