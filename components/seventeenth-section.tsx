import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ThaiLaoMapWithPinSVG from "./icons/thai-lao-map-with-pin-svg";

export default function SixteenthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.7, once: false });

	return (
		<motion.div
			ref={sectionRef}
			className="relative h-screen w-auto snap-start bg-[#171918] text-white flex flex-col justify-center items-center overflow-hidden"
		>
			<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
				<ThaiLaoMapWithPinSVG className="w-full h-full object-cover" />
			</div>
			<div className="w-full h-full flex items-end justify-start pl-72 pb-16">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isInView ? 1 : 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="relative z-10 font-ibm text-[1rem] text-white items-start flex flex-col justify-start bg-[#B7B7B733] bg-opacity-20 p-4 rounded-lg w-2/5"
				>
					<p>ข้อมูลภาพรวมของโครงการเขื่อนป้องกันตลิ่งริมแม่น้ำโขง </p>
					<p>ถูกนำเสนอเป็นครั้งแรกในรูปแบบแผนที่</p>
					<p>แสดงงบประมาณการก่อสร้างและซ่อมบำรุงเขื่อน </p>
					<p>ป้องกันตลิ่งแม่น้ำโขง ตามองค์การบริหารส่วนท้องถิ่นที่</p>
					<p>มีการสร้างพื้นที่โครงการ และมีการคำนวณค่าใช้จ่าย </p>
					<p>รายกิโลเมตรเบื้องต้นเพื่อสะท้อนให้เห็นขนาดของ</p>
					<p>
						โครงสร้าง <span className="font-bold">‘เมกะโปรเจกต์ ล่องหน’ </span>
					</p>
					<br />
					<p>ซึ่งในอนาคต จะผูกพันงบประมาณของประเทศไทยเป็น จำนวนมหาศาล </p>
					<br />
					<p>
						<span className="font-bold">ปี 2556 </span>
						โครงการก่อสร้างเขื่อนป้องกันตลิ่งริมแม่น้ำโขงชุดแรก
					</p>
					<p>ถูกประกาศออกมา 7 โครงการ กินพื้นที่ 5 อำเภอ</p>
					<p>
						ในจังหวัดนครพนมและบึงกาฬ ได้แก่{" "}
						<span className="font-bold">
							อำเภอเมือง, อำเภอท่าอุเทน, อำเภอบ้านแพง จังหวัดนครพนม รวมถึงอำเภอบึงโขงหลง และอำเภอบุ่งคล้า
							จังหวัดบึงกาฬ
						</span>
					</p>
					<p className="font-bold"></p>
				</motion.div>
			</div>
		</motion.div>
	);
}
