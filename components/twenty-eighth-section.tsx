import Image from "next/image";

export default function TwentyEighthSection() {
  return (
    <section className="font-ibm h-[100vh] snap-start bg-[#171918] text-white flex flex-col justify-between items-center pt-10 lg:pb-0 px-20 lg:px-44 leading-snug">
      <div className="text-l lg:text-xl max-w-5xl">
        อย่างไรก็ตาม การมาของเขื่อนป้องกันตลิ่ง
        นำมาซึ่งความเปลี่ยนแปลงในการหาเลี้ยงชีพ ของชาวบ้านริมโขง
        จากการสัมภาษณ์ชาวบ้านในพื้นที่ระบุว่า เขื่อนป้องกันตลิ่งทำให้
        น้ำไหลแรงและเร็วขึ้น ทำให้ปลาไม่สามารถอาศัยอยู่ริมตลิ่งได้
        และต้องหนีไปยังพื้นที่อื่น ที่ยังมีความเป็นธรรมชาติ
      </div>
      <div className="text-[#FFEB52] font-pridi text-lg lg:text-2xl xl:text-4xl font-light text-center">
        “ เหมือนเราเล่นสไลเดอร์ ซ้ายขวาที่มันเป็นขอบ
        จากเดิมที่เป็นพื้นดินอ่อนนุ่ม
        <br />
        ทำให้น้ำไม่ไหลเร็ว แต่พอกลายเป็นอะไรที่มันดาดแข็ง
        <br />
        มันทำให้กระแสน้ำเกิดการชิ่งและน้ำก็จะไหลเร็วขึ้นเยอะ ”
      </div>
      <div className="relative w-full font-light">
        <div className="bg-[#919191]/20 rounded-2xl h-full flex px-14 py-8">
          <div className="flex flex-col w-1/4 justify-start items-center mr-14">
            <Image
              src="/images/dams-demolishing.png"
              alt="Women with red background"
              className="rounded-full object-cover aspect-square mb-5"
              width={200}
              height={100}
              priority
            />
            <p className="font-ibm text-center">Picture credit : Pai Deetes</p>
          </div>
          <div className="flex flex-col w-3/4 gap-4">
            <p className="font-kartsatapat text-sm md:text-md lg:text-xl xl:text-3xl">
              “ เทศบาลเขามาเคลมว่า พื้นที่นี้จะถูกทำเป็นสวนสาธารณะ
              <br />
              ชาวบ้านเลยทำการเกษตรริมน้ำ ไม่ได้ สูญเสียอาชีพไปเลย
              <br />
              โดยไม่สามารถจะทำอะไรได้ แล้วเขาก็กลายเป็นคนจน ”
            </p>
            <p className="text-xs md:text-sm lg:text-base">
              <span className="font-bold">เพียรพร ดีเทศน์</span>{" "}
              ผู้อำนวยการฝ่ายรณรงค์ ภูมิภาคเอเชียตะวันออกเฉียงใต้องค์กรแม่น้ำ
              นานาชาติ (International Rivers)
              ยกตัวอย่างความยากจนของประชาชนริมแม่น้ำโขง
              ในจังหวัดเชียงรายหลังหน่วยงานภาครัฐดำเนินการสร้างสวนสาธารณะ
              ริมแม่น้ำโขงซึ่งมีคุณสมบัติส่วนหนึ่งเป็นเขื่อนกันตลิ่งส่งผลให้ประชาชนขาด
              รายได้เนื่องจากไม่สามารถทำเกษตรริมน้ำได้อีก
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
