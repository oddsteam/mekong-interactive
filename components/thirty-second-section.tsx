import ImageBoxWithDescription from "./ui/image-box-with-description";

export default function ThirtySecondSection() {
  return (
    <section className="font-ibm h-screen snap-start bg-[#171918] text-white flex flex-col justify-center items-center px-20 lg:px-44 pt-5 pb-10 lg:pb-20">
      <div className="relative w-full h-full">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full">
          <ImageBoxWithDescription
            src="/images/tha-uthen-msu-left.jpg"
            alt="เขื่อนที่ก่อสร้างแล้ว"
            title="เขื่อนป้องกันตลิ่งที่ก่อสร้างแล้ว"
            description="ลักษณะเป็นเขื่อนหินทิ้ง โครงสร้างคสล."
          />

          <div className="hidden lg:block w-[1.5px] bg-white self-stretch" />

          <ImageBoxWithDescription
            src="/images/tha-uthen-msu-right.jpg"
            alt="เขื่อนป้องกันตลิ่งใน อ.ท่าอุเทน"
            title="เขื่อนป้องกันตลิ่ง ใน อ.ท่าอุเทน"
            description="ออกแบบเป็นที่นั่งชมประเพณีไหลเรือไฟ ยกสูงจากตลิ่ง 2.50 เมตร"
          />
        </div>
        <div className="text-xl lg:text-2xl mb-5 lg:mb-16 mt-16">
          <div className="mb-20">
            ขณะที่การประชุมเพื่อรับฟังความคิดเห็นจากประชาชนในพื้นที่ก่อนจะดำเนินโครงการก่อสร้าง
            เขื่อนป้องกันตลิ่ง มักจะ
            <span className="font-semibold"> “อยู่ในวงแคบ” </span>และ{" "}
            <span className="font-semibold">“ไม่ได้เข้าถึง”</span>{" "}
            ผู้มีส่วนได้ส่วนเสียที่แท้จริง ซึ่งอาจจะทำให้ข้อมูลเชิงคุณภาพ{" "}
            <span className="font-semibold">“ไม่เพียงพอ”</span>{" "}
            ต่อการนำไปออกแบบโครงการ
          </div>
          <div>
            ทั้งนี้
            โกวิทย์เสนอแนวทางเพื่อลดผลกระทบจากการก่อสร้างเขื่อนป้องกันตลิ่งและ
            ส่งเสริมการพัฒนาที่ยั่งยืนผสานไปกับวิถีชีวิตชุมชนริมแม่น้ำโขง ได้แก่
          </div>
        </div>
      </div>
    </section>
  );
}
