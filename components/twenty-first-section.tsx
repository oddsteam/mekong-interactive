import Image from "next/image";
export default function TwentyFirstSection() {
  return (
    <section className="relative w-screen snap-start text-white flex justify-center items-end">
      <div className="relative w-full">
        <Image
          src="/images/khong-chiam-background.png"
          alt="Khong chiam background"
          className="object-contain"
          width={1920}
          height={0}
          priority
        />
      </div>

      <div className="absolute z-20 leading-relaxed mb-16 scale-x-[1.05] text-start left-24 lg:left-48">
        <div className="font-pridi text-6xl lg:text-8xl mb-1 lg:mb-6 font-medium">
          ซ่อมจะ “แพงกว่า” สร้าง
        </div>
        <div className="font-ibm font-light text-xl lg:text-2xl">
          ที่ผ่านมา
          กรณีเขื่อนป้องกันตลิ่งริมแม่น้ำโขงได้รับความเสียหายหรือพังทลาย
          <br />
          แม้เกิดขึ้นไม่บ่อยนัก แต่สิ่งที่น่ากังวลหลังเกิดความเสียหายคือ
          “ค่าซ่อมแซม”
        </div>
      </div>
    </section>
  );
}
