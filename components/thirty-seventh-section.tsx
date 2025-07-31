import { useRef } from "react";
export default function ThirtySeventhSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center h-screen w-full bg-gradient-to-b from-[#171918] to-[#2D3A2B] text-white font-ibm snap-center"
    >
      <div className="h-full w-[50vw] flex flex-col justify-around text-base lg:text-2xl text-white text-center font-light pt-16 pb-16">
        <div>
          <span className="font-bold text-[#FFEB52]">ขณะเดียวกัน</span>{" "}
          ภาครัฐและหน่วยงานที่เกี่ยวข้องควรมี
          <br />
          การจัดทำรายงานประเมินตัวเลขงบประมาณที่อาจต้องใช้ใน
          การบำรุงรักษาเขื่อนป้องกันตลิ่งริมฝั่งโขงทั้งหมดเพื่อพิจารณา
          ทิศทางการจัดการกับโครงการเขื่อนป้องกันตลิ่งอื่นๆ ในอนาคต
        </div>
        <div>
          <span className="font-bold text-[#FFEB52]">
            นอกเหนือจากเรื่องเขื่อนป้องกันตลิ่ง
          </span>
          <br />
          ควรมีการประสานการตัดสินใจที่เกี่ยวข้องกับผลกระทบต่อแม่น้ำโขงเพื่อ
          การวางแผนอย่างเป็นระบบ เช่น แผนการให้สัมปทานท่าดูดทราย
          แผนการดำเนินการประสานความร่วมมือนานาชาติ
          <br />
          <span className="font-bold text-[#FFEB52]">
            เพื่อรักษาสภาพแวดล้อมแม่น้ำโขงให้คงสภาพดี
          </span>
        </div>
        <div>
          นอกจากนี้ควรทำให้
          <span className="font-bold text-[#FFEB52]">
            ข้อมูลที่เกี่ยวข้องกับแม่น้ำโขงเข้าถึงได้ง่ายและโปร่งใส
          </span>
          เพื่อเพิ่มการมีส่วนร่วมภาคประชาชนในการกำหนดนโยบายที่ เกี่ยวข้องกับ
          แม่น้ำโขงต่อไปในอนาคต
        </div>
      </div>
    </section>
  );
}
