import MoneySvg from "./icons/money-svg";
import { useState } from "react";
import { motion } from "framer-motion";

type SectionData = {
	budget: string;
	location: string;
	province: string;
	LengthOfTheRiverbank: number;
	budgetPerKm: string;
	numberOfMoney: number;
};

const sections: SectionData[] = [
	{
		budget: "1,675,205,600 บาท",
		location: "ตำบลบุฮม, อำเภอเชียงคาน",
		province: "จังหวัดเลย",
		LengthOfTheRiverbank: 29.63,
		budgetPerKm: "56,537,482.28 บาท",
		numberOfMoney: 16,
	},
	{
		budget: "1,487,093,500 บาท",
		location: "ตำบลหนองเดิ่น, อำเภอบุ่งคล้า",
		province: "จังหวัดบึงกาฬ",
		LengthOfTheRiverbank: 15.32,
		budgetPerKm: "97,068,766.32 บาท",
		numberOfMoney: 14,
	},
	{
		budget: "1,365,055,350 บาท",
		location: "ตำบลริมโขง, อำเภอเชียงของ",
		province: "จังหวัดเชียงราย",
		LengthOfTheRiverbank: 21.42,
		budgetPerKm: "63,728,074.23 บาท",
		numberOfMoney: 13,
	},
	{
		budget: "1,207,398,890 บาท",
		location: "ตำบลบึงกาฬ, อำเภอเมืองบึงกาฬ",
		province: "จังหวัดบึงกาฬ",
		LengthOfTheRiverbank: 11.99,
		budgetPerKm: "100,700,491.20 บาท",
		numberOfMoney: 12,
	},
	{
		budget: "1,160,099,000 บาท",
		location: "ตำบลท่าดอกคำ, อำเภอบึงโขงหลง",
		province: "จังหวัดบึงกาฬ",
		LengthOfTheRiverbank: 14.62,
		budgetPerKm: "7,935,013.68 บาท",
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
			className="relative w-full p-8 flex justify-start items-center gap-8 mt-8 transition-colors rounded-lg"
			animate={{
				y: hovered ? 0 : -10,
				backgroundColor: hovered ? "#424342" : "rgba(0,0,0,0)",
			}}
			transition={{ duration: 0.2 }}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
		>
			<div className="font-ibm">
				<p className="font-bold text-4xl text-[#FFEB52]">{data.budget}</p>
				<p className="text-xl">{data.location}</p>
				<p className="font-bold text-xl">{data.province}</p>
			</div>
			<div className="flex flex-col justify-start items-start gap-4 w-full">
				<div>
					<MoneyRow numberOfMoney={data.numberOfMoney} />
				</div>
				<div className="flex flex-col items-start w-full">
					<p className="font-ibm text-base">
						ความยาวของตลิ่ง (วัดผ่าน Google Map)
						<span className="font-bold text-xl"> {data.LengthOfTheRiverbank} km</span>
					</p>
					<div className="flex items-center">
						<div className="w-4 h-4 bg-white rounded-full"></div>
						<div
							className="border-t-2 border-dashed border-white"
							style={{
								flexGrow: 1,
								width: `${data.LengthOfTheRiverbank * 25}px`,
								minWidth: "20px",
							}}
						></div>
						<div className="w-4 h-4 bg-white rounded-full"></div>
					</div>
					<p className="font-ibm text-base">
						งบประมาณต่อกิโลเมตร <span className="font-bold text-xl">{data.budgetPerKm}</span>
					</p>
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
				<div className="font-ibm font-bold text-6xl leading-normal">ตลอดระยะเวลา 10 ปีนี้มากที่สุด</div>
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
