import { motion } from "framer-motion";

export default function ThirtyFifthSection() {
  return (
    <section className="font-ibm h-[180vh] w-full snap-start bg-[#171918] flex justify-center pt-10 lg:pt-20">
      <div className="w-[75%] text-white text-2xl flex flex-col text-start gap-16 leading-tight">
        <div className="text-5xl font-bold">
          จากข้อมูลต่างๆแน่นอนว่าเขื่อนป้องกันตลิ่งในแม่น้ำโขง ยังมีความสำคัญ
          และเป็นประโยชน์ในหลายด้าน
        </div>
        <div>
          อย่างไรก็ตาม
          การใช้งบประมาณมหาศาลไปกับโครงการสร้างเขื่อนป้องกันตลิ่งริมแม่น้ำโขง
          ตลอดระยะเวลาหลายทศวรรษ ในอีกแง่หนึ่ง สะท้อนถึงความจำเป็นที่ภาครัฐ
          และหน่วยงานที่เกี่ยวข้องต้องมีการบูรณาการ ทั้งการวางแผน ดำเนินการ
          และประเมิน
          ความคุ้มค่าในการสร้างเขื่อนป้องกันตลิ่งตลอดแนวชายแดนที่ติดกับแม่น้ำโขง
          ทั้งในมิติที่{" "}
          <span className="text-[#FFEB52] font-semibold">“จับต้องได้”</span>{" "}
          เช่น ความคุ้มค่าเรื่องความแข็งแรงคงทนของโครงสร้าง และความมั่นคง
          จากการใช้เขื่อนป้องกันตลิ่งเพื่อรักษาเขตแดน 
        </div>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-[35vh] object-cover"
        >
          <source src="/videos/chiang-khan-loei-1.mp4" type="video/mp4" />
        </motion.video>
        <div>
          และมิติที่{" "}
          <span className="text-[#FFEB52] font-semibold">“จับต้องไม่ได้”</span>{" "}
          แต่มีความสำคัญไม่แพ้กัน เช่นผลกระทบต่อวิถีชีวิตของชุมชน และระบบนิเวศน์
          โดยควรเปิดรับการมีส่วนร่วมของภาคประชาชน เพื่อให้ได้รูปแบบ
          ของเขื่อนป้องกันตลิ่งที่ตอบโจทย์และเป็นประโยชน์แก่ทุกภาคส่วน
        </div>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-[35vh] object-cover"
        >
          <source src="/videos/chiang-khan-loei-2.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </section>
  );
}
