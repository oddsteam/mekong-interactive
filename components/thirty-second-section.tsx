import Image from "next/image";

const ImageBox = ({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center flex-1">
    <div className="relative w-full aspect-[4/3] max-w-sm">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded"
        sizes="100vw"
        priority
      />
    </div>
    <p className="text-[#FFEB52] text-lg lg:text-2xl font-bold text-center mt-3">
      {title}
    </p>
    <p className="text-xs mt-2 text-center font-light">{description}</p>
  </div>
);

export default function ThirtySecondSection() {
  return (
    <section className="min-h-screen w-screen snap-start bg-[#171918] text-white font-ibm flex flex-col items-center px-16 py-12">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full max-w-6xl">
        <ImageBox
          src="/images/tha-uthen-msu-left.jpg"
          alt="เขื่อนที่ก่อสร้างแล้ว"
          title="เขื่อนป้องกันตลิ่งที่ก่อสร้างแล้ว"
          description="ลักษณะเป็นเขื่อนหินทิ้ง โครงสร้างคสล."
        />

        <div className="hidden lg:block w-[1.5px] bg-white self-stretch" />

        <ImageBox
          src="/images/tha-uthen-msu-right.jpg"
          alt="เขื่อนป้องกันตลิ่งใน อ.ท่าอุเทน"
          title="เขื่อนป้องกันตลิ่ง ใน อ.ท่าอุเทน"
          description="ออกแบบเป็นที่นั่งชมประเพณีไหลเรือไฟ ยกสูงจากตลิ่ง 2.50 เมตร"
        />
      </div>

      <div className="w-full max-w-6xl mt-20 font-light text-start text-xl lg:text-3xl leading-loose">
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
    </section>
  );
}
