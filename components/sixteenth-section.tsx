import { useRef } from "react";
import ThaiLaoMapSVG from "./icons/thai-lao-map-svg";
import { motion, useInView } from "framer-motion";
import PileOfMoneySvg from "./icons/pile-of-money-svg";

export default function SixteenthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.7, once: false });

	return (
		<motion.div
			ref={sectionRef}
			className="relative h-screen w-auto snap-start bg-[#171918] text-white flex flex-col justify-center items-center overflow-hidden"
		>
			<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
				<ThaiLaoMapSVG className="w-full h-full object-cover" />
			</div>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
				exit={{ y: -100, opacity: 0 }}
				className="w-full h-full pointer-events-none z-0 flex items-start justify-start pl-96 mt-16"
			>
				<PileOfMoneySvg />
			</motion.div>

			<div className="w-full h-full flex items-end justify-center mb-16">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isInView ? 1 : 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="relative z-10 font-ibm text-xl text-white items-center flex flex-col justify-start bg-[#B7B7B733] bg-opacity-20 p-10 rounded-lg"
				>
					<p>
						จากการวิเคราะห์และเจาะลึกข้อมูลรายงานข่าวสืบสวน ด้วยข้อมูลเชิงลึก (Data Journalism for
						Investigative
					</p>
					<p>
						Reporting) ที่จัดทำโดยทีมอาสาสมัคร ชมรมเครือข่ายนักสื่อสารข้อมูลเชิงลึกแห่งประเทศไทย (TDJ) พบว่า
					</p>
					<p>
						ที่ผ่านมา
						<span className="font-bold text-[#FFEB52]"> รัฐบาลไทยใช้งบประมาณ กว่า 40,000 ล้านบาท </span>
						กับการสร้างเขื่อนป้องกัน ตลิ่งในฐานะ
					</p>
					<p>
						<span className="font-bold text-[#FFEB52]">‘ทางเลือกหลัก’</span> โดยเฉพาะในช่วงปี 2558 ถึง
						2567ที่มีโครงการก่อสร้างเขื่อนป้องกันตลิ่ง กว่า 500
					</p>
					<p>โครงการใน 92 ตำบล ทั่ว 8 จังหวัดริมโขง</p>
				</motion.div>
			</div>
		</motion.div>
	);
}
