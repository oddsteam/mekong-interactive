import Image from "next/image";

export default function TwentySeventhSection() {
  return (
    <section className="font-ibm h-screen snap-start bg-[#171918] text-white flex flex-col justify-center items-center px-20 lg:px-44 pt-10 pb-10 lg:pb-20">
      <div className="text-xl lg:text-2xl mb-5 lg:mb-16">
        ซึ่งนอกจากเกษตรกรรมแล้ว การเลี้ยงปลาในกระชังและการทำประมงชายฝั่งแม่น้ำ
        ด้วยเรือขนาดเล็กก็เป็นส่วนหนึ่งของวิถีชีวิตดั้งเดิมที่พึ่งพาและผูกพันกับแม่น้ำโขง
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
