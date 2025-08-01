export default function ThirtyFirstSection() {
  return (
    <section className="min-h-screen snap-start bg-[#171918] text-white flex flex-col justify-center items-center px-20 lg:px-44 py-16 font-ibm">
      <div className="text-xl lg:text-2xl leading-loose text-white">
        <p className="font-semibold">
          โกวิทย์กล่าวว่า{" "}
          <span className="font-normal">
            การออกแบบเขื่อนป้องกันตลิ่งส่วนใหญ่เป็นแบบ Typical หรือแบบมาตรฐานคือ{" "}
            <span className="font-bold text-white">
              “สร้างที่นี่ได้ก็ต้องเอาไปสร้างที่อื่นได้”
            </span>{" "}
            โดยไม่ได้มีการสอบถามความต้องการหรือศึกษาบริบทวิถีชีวิตของแต่ละชุมชนอย่างลึกซึ้ง
          </span>
        </p>

        <div className="relative my-12 lg:my-20 text-[#FFEB52] text-center ">
          <span className="absolute -left-4 -top-4 text-5xl lg:text-8xl font-ibm font-normal scale-y-38">
            “
          </span>

          <p className="font-kartsatapat italic leading-normal text-2xl lg:text-4xl">
            เขื่อนมันออกแบบโดยที่ไม่ได้ถามชุมชน การทำเวทีภาคประชาสังคม
            <br />
            ไม่ได้ทำอย่างกว้างขวาง อาจจะรู้จากหน่วยงานภาครัฐเพียงอย่างเดียว
            <br />
            ในการพูดคุยกัน
            แต่ไม่มาดูพื้นที่ว่ามันมีวิถีชีวิตการใช้ประโยชน์พื้นที่นี้ยังไง
            <br />
            วัฒนธรรมในแต่ละท้องถิ่นที่แม่น้ำโขงไหลผ่าน เขาทำอะไรกันบ้าง
            <br />
            เขามีประเพณีอะไรบ้างที่ทำอยู่ริมแม่น้ำโขง
            <br />
            ดังนั้นแบบพวกนี้ที่ออกมามันจะเป็นแบบที่มาจากส่วนกลาง
          </p>

          <span className="absolute -right-4 -bottom-8 lg:-bottom-14 text-5xl lg:text-8xl font-ibm font-normal scale-y-38">
            ”
          </span>
        </div>

        <p className="text-xl lg:text-2xl leading-relaxed">
          เขามองว่า{" "}
          <span className="font-bold">การขาดการมีส่วนร่วมของชุมชน</span>{" "}
          ส่งผลให้แบบของเขื่อนป้องกันตลิ่งที่ออกมา เช่น
          เขื่อนป้องกันตลิ่งที่เป็นคอนกรีต
          หรือเขื่อนหินทิ้งที่มีแนวทางเดินด้านบน
          <span className="font-bold text-white">
            ไม่ได้คำนึงถึงการเข้าถึงพื้นที่ริมตลิ่งของชาวบ้าน
            ที่ทำการเกษตรริมน้ำโขง หรือการเลี้ยงปลาในกระชัง
          </span>
        </p>
      </div>
    </section>
  );
}
