import Image from "next/image";

export default function TwentyFifthSection() {
  return (
    <section className="font-ibm w-screen snap-start bg-[#171918] text-white flex flex-col px-20 lg:px-44 pt-10 pb-8 lg:pb-12 font-light">
      <div className="relative w-full h-full flex flex-col gap-4 leading-normal">
        <div className="my-2 text-xl lg:text-3xl font-bold">
          ผลกระทบการสร้างเขื่อนป้องกันตลิ่งต่อภูมิทัศน์พื้นถิ่น ริมแม่น้ำโขง :
          กรณีศึกษาชุมชนท่าอุเทน อำเภอท่าอุเทน จังหวัดนครพนม
        </div>
        <div className="text-sm lg:text-lg">
          โกวิทย์ วาปีศิลป์ อาจารย์ประจำคณะสถาปัตยกรรมศาสตร์
          <br />
          ผังเมืองและนฤมิตศิลป์ มหาวิทยาลัยมหาสารคาม
        </div>
        <div className="w-full h-[3px] bg-white my-4" />
        <div className="text-base lg:text-2xl mb-5">
          เขื่อนป้องกันตลิ่งที่สร้างในอำเภอท่าอุเทนไม่กี่ปีที่ผ่านมา
          ส่งผลต่อภูมิทัศน์พื้นถิ่น
          <br /> ริมแม่น้ำโขง ใน 4 ด้าน ได้แก่
        </div>
        <div className="relative">
          <Image
            src="/images/four-frames-problem.png"
            alt="Mekong 4 frames problem"
            className="object-cover object-center"
            width={1920}
            height={0}
            priority
          />
        </div>
      </div>
    </section>
  );
}
