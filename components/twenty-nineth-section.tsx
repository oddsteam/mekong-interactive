import Image from "next/image";

export default function TwentyNinthSection() {
  return (
    <section className="font-ibm h-[200vh] snap-start bg-[#171918] text-white flex flex-col justify-center items-center pt-0 pb-10 px-20 lg:px-44 leading-snug overflow-hidden">
      <div className="relative w-full font-light">
        <div className="bg-[#919191]/20 rounded-2xl h-full flex px-14 py-8">
          <div className="flex flex-col w-1/4 justify-start items-center mr-14">
            <Image
              src="/images/uncle-with-hat.jpg"
              alt="Uncle with hat and black glasses"
              className="rounded-full object-cover aspect-square mb-5"
              width={200}
              height={100}
              priority
            />
            <p className="font-ibm text-center">
              Picture credit : the isaan record
            </p>
          </div>
          <div className="flex flex-col w-3/4 gap-4 text-xs md:text-sm lg:text-base">
            <p className="font-kartsatapat text-xl lg:text-3xl">
              “ เขาเอาหินก้อนใหญ่มาทิ้งๆ ริมแม่น้ำ <br />
              ทำให้บริเวณตรงนั้นมันหายไปเลย”
            </p>
            <p>
              <span className="font-bold">ชาญณรงค์ วงศ์ลา</span>{" "}
              กลุ่มฮักเชียงคานซึ่งติดตามสถานการณ์การสร้างเขื่อนกันตลิ่ง
              ริมแม่น้ำโขงในจังหวัดเลยให้ข้อมูลว่า
              การสร้างเขื่อนกันตลิ่งริมแม่น้ำโขงในจังหวัดเลย
              อาจกระทบต่อระบบนิเวศริมน้ำโดยเฉพาะ{" "}
              <span className="font-bold">‘หญ้าหวีดเมืองเลย’</span>{" "}
              (C.loeiensis)
              ซึ่งเป็นพืชที่พบได้เฉพาะลุ่มน้ำโขงแถบจังหวัดเลยที่เดียวในโลกที่จะสูญหายไป
              หากเกิดการสร้างเขื่อนกันตลิ่งขึ้น 
            </p>
            <div className="flex flex-col items-center gap-2 w-full">
              <Image
                src="/images/weed.png"
                alt="Weed page 29"
                className="w-full h-auto sm:h-[15vh] lg:h-[30vh] object-cover mb-2"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <p>
                <span className="font-bold">หญ้าหวีดเมืองเลย</span> Picture
                credit : ชาญชัย ดาจันทร์
              </p>
            </div>
            <p>
              แม้จะมีการคัดค้านการดำเนินการก่อสร้างเขื่อนกันตลิ่งทำให้โครงการหยุดชะงัก
              แต่ในบางพื้นที่
              ริมแม่น้ำโขงในจังหวัดเลยมีการดำเนินโครงการสร้างเขื่อนกันตลิ่งไปแล้วบางส่วน
              เช่น ในเขตเทศบาลตำบลเชียงคาน ส่งผลให้หญ้าหวีดเมืองเลยหายไปบางส่วน
              นอกจากนี้ยังกระทบ ไปยังระบบนิเวศบริการอย่าง ‘ไส้เดือนแม่น้ำโขง’
              ซึ่งเขาให้ข้อมูลว่า ไม่พบเห็นมาหลายปี หลังการสร้างเขื่อนกันตลิ่ง
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-16 text-xl">
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-bold">
            ทั้งนี้การสร้างกำแพงกันคลื่นริมชายฝั่งของประเทศไทย
          </p>
          <p>
            ถูกวิพากษ์วิจารณ์จากประชาชนและนักสิ่งแวดล้อมเนื่องจากมีการใช้ช่องโหว่ทางกฎหมายเพื่อเลี่ยงการประเมินผลกระทบ
            สิ่งแวดล้อม (Environmental Impact Assessment: EIA)
            ซึ่งต่อมามีการแก้ไขเพิ่มเติมประกาศกระทรวง
            ทรัพยากรธรรมชาติและสิ่งแวดล้อม
            ซึ่งมีสาระสำคัญกำหนดให้การก่อสร้างหรือขยายสิ่งก่อสร้างบริเวณหรือในทะเล
            ประกอบด้วย รอดักทราย เขื่อนกันทรายและคลื่น รอบังคับกระแสน้ำ
            แนวเขื่อนกันคลื่นนอกฝั่งทะเล และ กำแพงติดแนวชายฝั่งทะเล ทุกขนาด
            ต้องจัดทำ EIA โดยประกาศในเว็บไซต์ราชกิจจานุเบกษาแล้วเมื่อวันที่ 8
            มิถุนายน 2566 แต่จากข้อมูลของผู้อำนวยการฝ่ายรณรงค์
            ภูมิภาคเอเชียตะวันออกเฉียงใต้ องค์กรแม่น้ำนานาชาติชี้ว่า
            ในส่วนของโครงการสร้างเขื่อนกันตลิ่งริมแม่น้ำยังไม่พบการทำ EIA 
          </p>
        </div>
        <div className="flex items-center gap-5 mt-16">
          <Image
            src="/images/tha-utnan-view.jpg"
            alt="Tha Uthan view"
            className="w-[40vw] h-[40vh] object-center mb-2"
            width={0}
            height={0}
            priority
          />
          <div className="w-1/2">
            <span className="font-semibold text-3xl">“ อันที่จริง</span>{" "}
            การทำโครงการก่อสร้างทั้งหลายที่มัน กระทบต่อนิเวศ
            กระทบต่อทรัพยากรของประชาชนมันควร
            จะมีการจัดทำรายงานผลกระทบสิ่งแวดล้อม พอมันเป็น โครงการขนาดเล็ก
            ถ้าไปสังเกตแต่ละแห่งมันก็ทำทีละ กิโลเมตร
            หนึ่งกิโลเมตรหนึ่งกิโลเมตรครึ่ง จึงไม่ได้มี การประเมินผลกระทบ
            ทั้งๆที่มีการทำโครงการ ต่อกันไปเรื่อยๆ ” -{" "}
            <span className="font-semibold">เพียรพร ดีเทศน์</span>
          </div>
        </div>
      </div>
    </section>
  );
}
