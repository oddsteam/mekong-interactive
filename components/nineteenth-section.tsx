import MoneySvg from "./icons/money-svg";
import { useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ui/progress-bar";
import FlagSvg from "./icons/flag-svg";

type SectionData = {
	budget: string;
	description: string;
	location: string;
	province: string;
	numberOfProjects: number;
	LengthOfTheRiverbank: number;
	LengthOfCompletedRiverbank: number;
	numberOfMoney: number;
};

const sections: SectionData[] = [
	{
		budget: "1,675,205,600 บาท",
		description: "~ 133,147 บาท/เมตร",
		location: "ตำบลบุฮม, อำเภอเชียงคาน",
		province: "จังหวัดเลย",
		numberOfProjects: 20,
		LengthOfTheRiverbank: 29.63,
		LengthOfCompletedRiverbank: 13.09,
		numberOfMoney: 16,
	},
	{
		budget: "1,487,093,500 บาท",
		description: "~ 130,007.05 บาท/เมตร ",
		location: "ตำบลหนองเดิ่น, อำเภอบุ่งคล้า",
		province: "จังหวัดบึงกาฬ",
		numberOfProjects: 14,
		LengthOfTheRiverbank: 15.32,
		LengthOfCompletedRiverbank: 11.44,
		numberOfMoney: 14,
	},
	{
		budget: "1,365,055,350 บาท",
		description: "~ 110,310.37 บาท/เมตร",
		location: "ตำบลริมโขง, อำเภอเชียงของ",
		province: "จังหวัดเชียงราย",
		numberOfProjects: 14,
		LengthOfTheRiverbank: 21.42,
		LengthOfCompletedRiverbank: 12.4,
		numberOfMoney: 13,
	},
	{
		budget: "1,207,398,890 บาท",
		description: "~ 120,004.46 บาท/เมตร",
		location: "ตำบลบึงกาฬ, อำเภอเมืองบึงกาฬ",
		province: "จังหวัดบึงกาฬ",
		numberOfProjects: 12,
		LengthOfTheRiverbank: 11.99,
		LengthOfCompletedRiverbank: 10.31,
		numberOfMoney: 12,
	},
	{
		budget: "1,160,099,000 บาท",
		description: "~ 126,022.08 บาท/เมตร",
		location: "ตำบลท่าดอกคำ, อำเภอบึงโขงหลง",
		province: "จังหวัดบึงกาฬ",
		numberOfProjects: 12,
		LengthOfTheRiverbank: 14.62,
		LengthOfCompletedRiverbank: 9.13,
		numberOfMoney: 11,
	},
];

function MoneyRow({ numberOfMoney = 0 }: { numberOfMoney?: number }) {
	const iconsPerRow = 10;
	const rows = Math.ceil(numberOfMoney / iconsPerRow);

	return (
		<>
			{Array.from({ length: rows }).map((_, rowIdx) => {
				const start = rowIdx * iconsPerRow;
				const end = Math.min(start + iconsPerRow, numberOfMoney);
				const iconsInThisRow = end - start;
				return (
					<div key={rowIdx} className="font-ibm text-2xl flex gap-2">
						{Array.from({ length: iconsInThisRow }).map((_, i) => (
							<MoneySvg key={i} className="inline-block w-8 h-8 mr-2" />
						))}
					</div>
				);
			})}
		</>
	);
}

function SectionCard({ data }: { data: SectionData }) {
	const [hovered, setHovered] = useState(false);

	return (
		<motion.div
			className="relative w-full p-8 flex justify-center items-center gap-8 mt-8 transition-colors rounded-lg"
			animate={{
				y: hovered ? 0 : -10,
				backgroundColor: hovered ? "#424342" : "rgba(0,0,0,0)",
			}}
			transition={{ duration: 0.2 }}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
		>
			<div className="font-ibm w-fit">
				<p className="font-bold text-4xl text-[#FFEB52]">{data.budget}</p>
				<p className="text-xl text-[#FFEB52]">{data.description}</p>
				<p className="text-xl mt-4">{data.location}</p>
				<p className="font-bold text-xl">{data.province}</p>
				<p className="text-base">(จำนวน {data.numberOfProjects} โครงการ)</p>
			</div>
			<div className="flex flex-col justify-start items-start gap-4">
				<div>
					<MoneyRow numberOfMoney={data.numberOfMoney} />
				</div>
				<div className="flex flex-col items-center w-full gap-1">
					<div className="w-full flex flex-col items-end gap-2">
						<div className="flex gap-1 justify-end items-end">
							<p className="font-ibm text-base text-[#F5F3F0">
								ความยาวครอบคลุม <span className="font-bold text-xl">{data.LengthOfTheRiverbank}/</span>
								{data.LengthOfTheRiverbank} km
							</p>
							<FlagSvg />
						</div>
						<ProgressBar
							hovered={hovered}
							progress={parseFloat(
								((data.LengthOfCompletedRiverbank / data.LengthOfTheRiverbank) * 100).toFixed(2)
							)}
							prefix="ทำไปแล้ว "
						/>
					</div>
					<p className="font-ibm text-sm text-[#F5F3F0] mt-9">*ความยาวของตลิ่งทั้งหมด วัดผ่าน Google Map</p>
				</div>
			</div>
			{/* budget amount */}
			<motion.div
				initial={false}
				animate={{
					opacity: hovered ? 1 : 0,
					y: hovered ? 0 : -10,
					pointerEvents: hovered ? "auto" : "none",
				}}
				transition={{ duration: 0.2 }}
				className="absolute top-0 right-0 z-30 bg-[#252625] text-white rounded-bl-lg font-ibm font-bold text-base px-4 py-2"
			>
				<MoneySvg className="inline-block w-8 h-8" /> = 100,000,000 บาท
			</motion.div>
		</motion.div>
	);
}

export default function NineteenthSection() {
	return (
		<section className="h-auto snap-start bg-[#171918] text-white flex flex-col justify-center items-center w-full text-center py-16">
			<div className="w-fit font-ibm text-white">
				<div className="font-ibm font-bold text-6xl leading-normal">
					5 พื้นที่ที่ใช้งบประมาณในการสร้างเขื่อนป้องกันตลิ่ง
				</div>
				<div className="font-ibm font-bold text-6xl leading-normal">มากที่สุดตลอดระยะเวลา 10 ปี</div>
				{sections.map((data, idx) => (
					<SectionCard key={idx} data={data} />
				))}
				<div className="text-center text-3xl mt-8">
					<p>เมื่อคำนวณงบประมาณต่อความยาวของเขื่อนป้องกันตลิ่ง (หน่วยกิโลเมตร)</p>
					<p>โดยคำนวณจากงบประมาณสะสมเทียบกับความยาวของตลิ่งติดแม่น้ำโขงของพื้นที่นั้นๆ</p>
					<p>พบว่า พื้นที่ที่ได้รับงบประมาณสูงสุดใน 5 อันดับ คือตำบลบึงกาฬ อำเภอเมืองบึงกาฬ</p>
					<p>จังหวัดบึงกาฬ โดยคิดเป็นกิโลเมตรละ 100 ล้านบาท </p>
				</div>
				<div className="text-center text-3xl mt-8">
					<p>
						ทั้งนี้ บริเวณพื้นที่ดังกล่าว อยู่ในจุด <span className="text-[#FFEB52]">“ไข่แดง”</span>{" "}
						ของจังหวัดบึงกาฬ
					</p>
					<p>เหตุผลในการสร้างเขื่อนกั้นตลิ่งที่หลากหลายถูกหยิบยกขึ้นมามากว่าวัตถุประสงค์ในการป้อง</p>
					<p>กันพื้นที่จากระดับน้ำที่ผันผวน</p>
				</div>
			</div>
		</section>
	);
}
