import Image from "next/image";
import { useRef } from "react";

const logo = [
  {
    id: "us-embassy",
    image: "/images/logo/us-embassy.png",
  },
  {
    id: "tdj",
    image: "/images/logo/tdj.png",
  },
  {
    id: "tja",
    image: "/images/logo/tja.png",
  },
  {
    id: "odds",
    image: "/images/logo/odds.png",
  },
];

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="h-screen relative w-full bg-gradient-to-b from-[#2D3A2B] to-[#171918] text-gray-200 flex flex-col justify-between items-center snap-center"
    >
      <div className="absolute font-ibm text-base lg:text-xl pt-[70px] text-start font-light">
        <div className="text-2xl lg:text-3xl text-center font-medium pb-6 text-[#FFEB52]">
          แหล่งอ้างอิง
        </div>
        <ul className="list-disc w-[80vw] lg:w-[70vw]">
          <li>
            <a href="https://govspending.data.go.th" target="_blank">govspending.data.go.th</a> : ฐานข้อมูล ภาษีไปไหน?
            ระบบข้อมูลการใช้จ่ายภาครัฐ
          </li>
          <li>
            เพียรพร ดีเทศน์ ผู้อำนวยการฝ่ายรณรงค์ ภูมิภาคเอเชียตะวันออกเฉียงใต้
            องค์กรแม่น้ำนานาชาติ (International Rivers) ชาญณรงค์ วงศลา
          </li>
          <li>ชาญณรงค์ วงศลา กลุ่มฮักเชียงคาน</li>
          <li>นริศรา พูนศิริวลัย ผู้ช่วยผู้ใหญ่บ้านปากอิงใต้ หมู่ 16</li>
          <li>มนัสชัย ใจแดง ผู้ใหญ่บ้านบ้านสบกก จังหวัดเชียงราย</li>
          <li>เตียม เงินท็อก ชาวบ้านบ้านสบกก จังหวัดเชียงราย</li>
          <li>
            สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (องค์การมหาชน) : GISTDA
          </li>
          <li>Mekong River Commission (MRC) : <a href="https://portal.mrcmekong.org" target="_blank">portal.mrcmekong.org</a></li>
          <li>
            ผศ. อมเรศ บกสุวรรณ อาจารย์ประจำภาควิชาวิศวกรรมโยธา
            มหาวิทยาลัยเทคโนโลยี ราชมงคลธัญบุรี หนึ่งในผู้เขียนงานวิจัย
            “การสำรวจตลิ่งแม่น้ำโขงและความพึงพอใจต่อเขื่อนป้องกันตลิ่งและเขื่อนกั้นแม่น้ำโขง”
          </li>
          <li>
            โกวิทย์ วาปีศิลป์ อาจารย์ประจำคณะสถาปัตยกรรมศาสตร์
            ผังเมืองและนฤมิตศิลป์ มหาวิทยาลัยมหาสารคาม หนึ่งในผู้เขียนงานวิจัย
            “ผลกระทบการสร้างเขื่อนป้องกันตลิ่งต่อภูมิทัศน์พื้นถิ่น ริมแม่น้ำโขง:
            กรณีศึกษาชุมชนท่าอุเทน อำเภอท่าอุเทน จังหวัดนครพนม”
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 h-[15vh] w-full bg-gray-200 flex items-center justify-center">
        {logo.map((item) => (
          <div
            className="relative w-[11vw] lg:w-[8vw] flex justify-between"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={`${item.id} logo`}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
