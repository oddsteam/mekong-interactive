import Image from "next/image";

export default function ThirtyThirdSection() {
  return (
    <section className="relative h-[200vh] snap-start bg-[#171918] text-white flex justify-center items-center px-6 lg:px-20 pt-28 pb-20">
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/images/mekong-view-with-opacity.png"
          alt="Mekong view with opacity"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 w-[80vw]">
        <div className="font-ibm text-2xl lg:text-4xl font-bold text-center mb-20">
          แนวทางเพื่อลดผลกระทบจากการก่อสร้างเขื่อนป้องกันตลิ่ง
        </div>

        <div className="flex font-ibm w-full gap-6">
          <div className="w-[60%] flex flex-col gap-[100px]">
            <div className="bg-[#232323]/50 rounded-xl pt-12 pb-8 px-4 text-m font-light">
              <p className="text-3xl font-bold mb-2 flex items-center gap-4">
                <span className="text-[#FFEB52]/50 text-9xl">1</span>{" "}
                <span className="text-3xl font-bold">
                  การออกแบบเขื่อนป้องกันตลิ่งที่สอดคล้องกับบริบทและวิถีชีวิต
                </span>
              </p>
              <p>
                ตัวอย่างเช่น การออกแบบเป็นขั้นบันไดมีกระบะสำหรับเติมดิน
                หรือตะกอนเพื่อการเพาะปลูก ซึ่งแม้จะเพิ่มค่าใช้จ่ายในการก่อสร้าง
                และออกแบบ แต่จะทำให้ชุมชนยังคงใช้ประโยชน์จากพื้นที่ได้
              </p>
              <br />
              <p>
                โดยโกวิทย์เปรียบเทียบการใช้แบบมาตรฐานเพียงแบบเดียว
                ในการก่อสร้างเขื่อนป้องกันตลิ่งริมแม่น้ำโขงทั้งหมดใน 8 จังหวัด
                ริมโขงว่า เหมือนการมีเสื้อแบบเดียว ไซส์เดียวให้หลายๆ คนใส่
                ซึ่งบางคนอาจจะใส่ไม่ได้หรืออยากเลือกใส่เสื้อที่ชอบและมีความสุข
              </p>
            </div>
            <div className="bg-[#232323]/50 rounded-xl pt-12 pb-8 px-4 text-m font-light">
              <p className="text-3xl font-bold mb-2 flex items-center gap-4">
                <span className="text-[#FFEB52]/50 text-9xl">3</span>{" "}
                <span className="text-3xl font-bold">
                  แก้ไขปัญหาการดูดทรายและการควบคุมเขื่อนจากประเทศเพื่อนบ้าน
                </span>
              </p>
              <p>
                ปัญหาการดูดทรายควรมีการป้องกันให้หมดไป เพราะส่งผลให้ตลิ่งพังทลาย
                อย่างรุนแรง รัฐบาลไทยควรประสานงานกับประเทศจีน สปป.ลาว
                และเพื่อนบ้านอื่นๆ
                เพื่อหารือเกี่ยวกับการระเบิดเกาะแก่งกลางแม่น้ำโขง
                และการควบคุมเขื่อน
                ซึ่งทำให้กระแสน้ำไหลรุนแรงและระดับน้ำผันผวนไม่เป็นไปตามฤดูกาล
              </p>
            </div>
          </div>

          <div className="w-[60%] flex flex-col gap-[100px] mt-16">
            <div className="font-kartsatapat text-[#FFEB52] text-base lg:text-xl xl:text-2xl italic text-end">
              “ ผมว่ามันคงจะใช้แบบเดียว เหมือนผมมีเสื้อตัวเดียว ผมอยากให้
              <br />
              คนใส่แล้วมีไซส์เดียวสีเดียวด้วย คนนั้นอาจจะ ใส่ไซส์นี้ไม่ได้
              <br />
              หรือคนนั้นอาจจะไม่ชอบเสื้อสีนี้ก็ได้ ดังนั้น จะต้องศึกษาก่อนว่า
              <br />
              คนแรกเนี่ยเขาตัวขนาดไหน รอบอกเท่าไหร่ ความสูง ความยาวของตัว
              <br />
              เท่าไหร่หรือเขาชอบสีอะไรไหม ถ้าเขาใส่แล้วมีความสุข
              <br />
              ก็ไม่สร้างความรู้สึกแย่ๆให้กับเขาที่จะใส่เสื้อตัวนี้ ”
            </div>

            <div className="bg-[#232323]/50 rounded-xl pt-12 pb-8 px-4 text-m font-light">
              <p className="text-3xl font-bold mb-2 flex items-center gap-4">
                <span className="text-[#FFEB52]/50 text-9xl">2</span>
                <span className="text-3xl font-bold">
                  การมีส่วนร่วมของภาคประชาชน อย่างจริงจังและต่อเนื่อง
                </span>
              </p>
              <p>
                ให้เวลากับการศึกษาโครงการ
                โดยเฉพาะกระบวนการมีส่วนร่วมของภาคประชาสังคม ให้มากและนานขึ้น
                จะทำให้โครงการก่อสร้างเขื่อนป้องกันตลิ่งมีการออกแบบที่ “เข้าใจ”
                และ “สอดคล้อง” กับบริบทมากยิ่งขึ้น
                ซึ่งการจัดโฟกัสกรุ๊ปย่อยและการเข้าถึงชาวบ้าน
                โดยตรงจะทำให้ได้ข้อมูลเชิงคุณภาพที่แท้จริง
              </p>
            </div>
            <div className="bg-[#232323]/50 rounded-xl pt-12 pb-8 px-4 text-m font-light">
              <p className="text-3xl font-bold mb-2 flex items-center gap-4">
                <span className="text-[#FFEB52]/50 text-9xl">4</span>
                <span className="text-3xl font-bold">
                  ตั้งหน่วยงานกลางและยกระดับ เป็นวาระแห่งชาติ
                </span>
              </p>
              <p>
                ควรมีหน่วยงานกลางที่ประกอบด้วยนักวิชาการ ชาวบ้าน
                และหน่วยงานรัฐที่เกี่ยวข้อง
                ทำหน้าที่รับมือและป้องกันผลกระทบจากการใช้ประโยชน์จากแม่น้ำโขง
                เพื่อให้เกิด การป้องกันปัญหา และทำงานเชิงรุก
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
