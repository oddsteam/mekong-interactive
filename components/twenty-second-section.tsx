"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TwentySecondSection() {
  return (
    <section className="relative h-[200vh] w-screen snap-start text-white">
      <motion.div className="sticky top-0 h-screen w-screen z-0 bg-[url('/images/wiang-kaen-damaged-bg.png')] bg-cover bg-center bg-no-repeat flex items-center px-20 lg:px-44 py-16 font-ibm">
        <div className="relative z-10 mx-auto flex flex-col gap-6">
          <div className="text-4xl lg:text-5xl font-bold">
            ความเสียหายเขื่อนป้องกันตลิ่ง
          </div>
          <div className="text-xl font-light">
            ผศ. อมเรศ บกสุวรรณ อาจารย์ประจำภาควิชา วิศวกรรมโยธา
            มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
          </div>

          <div className="w-full h-[3px] bg-white my-2" />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 text-lg font-light leading-snug">
              ผศ. อมเรศ บกสุวรรณ อาจารย์ประจำภาควิชาวิศวกรรมโยธา
              มหาวิทยาลัยเทคโนโลยี ราชมงคลธัญบุรี หนึ่งในผู้เขียนงานวิจัย
              “การสำรวจตลิ่งแม่น้ำโขงและความพึงพอใจต่อเขื่อนป้องกันตลิ่งและเขื่อนกั้นแม่น้ำโขง”
              เปิดเผยข้อมูลจากการลงพื้นที่สำรวจทั้ง 8
              จังหวัดริมโขงในระหว่างการทำงานวิจัยช่วงปี 2560 พบว่า{" "}
              <span className="text-[#FFEB52] font-bold text-xl">
                ในพื้นที่ราว 200
                จุดที่ทำการสำรวจพบการพังทลายของเขื่อนป้องกันตลิ่ง ไม่เกิน 15 จุด
              </span>{" "}
              โดยแต่ละจุดที่พังทลายอาจจะใช้แบบมาตรฐานในการก่อสร้าง
              ซึ่งไม่เหมาะกับพื้นที่ที่ไปสร้าง จึงเกิดปัญหาขึ้น
              <br />
              <p className="mt-2">
                เขาเผยว่า กรณีคล้ายกันนี้ เคยพบที่อำเภอเวียงแก่น จังหวัดเชียงราย
                ซึ่งเกิดการพังทลายของเขื่อนป้องกันตลิ่งริมแม่น้ำโขง
                เนื่องจากมีน้ำจากภูเขาไหลลงมาทะลักมาทางใต้ดินและทะลุตัวเขื่อนออกไปจนทำให้เขื่อนป้องกันตลิ่งทรุดและใช้งานไม่ได้
                โดยคาดว่าปัญหาที่เกิดขึ้นอาจจะมาจากการนำแบบมาตรฐานในการก่อสร้างเขื่อนป้องกันตลิ่งมาทำ
                แต่ไม่ได้เห็นหน้างานจริงเช่นเดียวกัน
              </p>
            </div>

            <div className="flex-1 relative min-h-[300px]">
              <Image
                src="/images/wiang-kaen-damaged.jpg"
                alt="Wiang Kaen Damaged"
                fill
                className="object-center lg:object-cover rounded-lg shadow-lg"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-20 flex items-center justify-center h-screen pointer-events-none snap-start"></div>

      <motion.div
        style={{ opacity: 0.9 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.8 }}
        className="absolute z-20 h-screen w-screen snap-start bg-[#000000]/70 backdrop-blur-3xl"
      >
        <div className="h-screen w-screen flex flex-col items-center justify-center text-white font-ibm text-center">
          <div className="flex flex-col w-4/6 text-4xl gap-16 leading-normal">
            <div className="text-white font-normal font-ibm text-xl md:text-2xl lg:text-3xl text-center pb-10">
              ซึ่งหลังจากนั้นก็มีการซ่อมแซม ทำช่องระบายน้ำแต่จากการสอบถาม
              ข้อมูลยังพบว่า
              <span className="text-[#FFEB52] font-bold">
                เกิดปัญหาอีกในช่วงปี 2567
              </span>{" "}
              ซึ่งน่าจะเป็นเพราะ
              <span className="text-[#FFEB52] font-bold">
                น้ำไหลบ่าจากภูเขา
              </span>
              ข้ามตัวเขื่อนมาแม่น้ำโขงเยอะเกินไป  <br />
              <p className="mt-10">
                อย่างไรก็ตาม ผศ. อมเรศ ชี้ว่า
                <span className="text-[#FFEB52] font-bold">
                  งบประมาณในการซ่อมแซมนั้น “สูงกว่า”
                </span>
                การก่อสร้างใหม่มาก โดยเขาชี้ว่า{" "}
                <span className="font-bold">
                  “น่าจะไม่ต่ำกว่า 2 หรือ 3 เท่า”
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
