import Image from "next/image";

export default function TwentySeventhSection() {
  return (
    <section className="font-ibm h-screen snap-start bg-[#171918] text-white flex flex-col justify-center items-center px-20 lg:px-44 pt-5 pb-10 lg:pb-20">
      <div className="text-lg lg:text-xl mb-5 lg:mb-16">
        กิจกรรมเหล่านี้สะท้อนถึงการปรับตัวและพึ่งพาทรัพยากรธรรมชาติของชุมชนมาอย่างยาวนาน
        โดยการทำเกษตรริมโขงไม่ได้เป็นเพียงแค่แหล่งอาหาร
        แต่ยังเป็นแหล่งรายได้ที่สำคัญ สำหรับครัวเรือนอีกด้วย
        ซึ่งผู้ที่อาศัยอยู่ริมน้ำจะได้รับสิทธิ์ในการจับจองพื้นที่เพาะปลูกก่อน
        โดยมีข้อตกลงร่วมกันในชุมชนเพื่อไม่ให้เกิดความขัดแย้ง
      </div>
      <div className="relative w-full h-full">
        <Image
          src="/images/mekong-four-frame.png"
          alt="Mekong 4 frames"
          fill
          className="object-contain lg:object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
