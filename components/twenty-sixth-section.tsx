import ImageBoxWithDescription from "./ui/image-box-with-description";
export default function TwentySixthSection() {
  return (
    <section className="font-ibm w-screen snap-start bg-[#171918] text-white flex flex-col justify-between items-stretch px-20 lg:px-44 pt-5 pb-10 lg:pb-16 text-xl lg:text-2xl overflow-hidden">
      <div className="mb-5 lg:mb-16">
        ซึ่งนอกจากเกษตรกรรมแล้ว การเลี้ยงปลาในกระชังและการทำประมงชายฝั่งแม่น้ำ
        ด้วยเรือขนาดเล็กก็เป็นส่วนหนึ่งของวิถีชีวิตดั้งเดิมที่พึ่งพาและผูกพันกับแม่น้ำโขง
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
          <ImageBoxWithDescription
            src="/images/tha-uthen-left.jpg"
            alt="Tha Uthen View Left"
            title="ช่วงฤดูฝน"
            description="ระดับน้ำจะสูงขึ้นและพัดพาตะกอนดินที่อุดมสมบูรณ์มาจากตอนเหนือ เช่น จาก สปป.ลาว ภาคเหนือของไทย และจีนตอนใต้ มาทับถมบริเวณตลิ่ง ทำให้ดินมีแร่ธาตุเพิ่มขึ้น"
          />

          <div className="hidden lg:block w-[1.5px] bg-white self-stretch" />

          <ImageBoxWithDescription
            src="/images/tha-uthen-right.jpg"
            alt="Tha Uthen View Right"
            title="ช่วงฤดูหนาว"
            description="เมื่อน้ำลดลงในช่วงฤดูหนาว ชาวบ้านจะใช้พื้นที่ริมตลิ่งที่มีดินอุดม สมบูรณ์นี้ทำการเพาะปลูกพืชผัก เพื่อบริโภคในครัวเรือน และจำหน่ายเพื่อสร้างรายได้"
          />
        </div>
        <div className="mt-5 lg:mt-16">
          กิจกรรมเหล่านี้สะท้อนถึงการปรับตัวและพึ่งพาทรัพยากรธรรมชาติของชุมชนมาอย่างยาวนาน
          โดยการทำเกษตรริมโขงไม่ได้เป็นเพียงแค่แหล่งอาหาร
          แต่ยังเป็นแหล่งรายได้ที่สำคัญ สำหรับครัวเรือนอีกด้วย
          ซึ่งผู้ที่อาศัยอยู่ริมน้ำจะได้รับสิทธิ์ในการจับจองพื้นที่เพาะปลูกก่อน
          โดยมีข้อตกลงร่วมกันในชุมชนเพื่อไม่ให้เกิดความขัดแย้ง
        </div>
      </div>
    </section>
  );
}
