"use client";

import { useState } from "react";
import Image from "next/image";

export default function ForthSection() {
	const [selectedYear, setSelectedYear] = useState("2018-2023");

	const handleYearFilter = (range: string) => {
		setSelectedYear(range);
	};

	const availableYearRanges = ["2018-2023", "2018", "2019", "2020", "2021", "2022", "2023"];

	return (
		<section className="w-screen bg-[#171918] text-white flex flex-col items-center justify-center px-4 py-10 space-y-12">
			<div className="h-screen flex flex-col items-center justify-center snap-start gap-3">
				<div className="font-ibm text-center text-lg text-gray-200 px-4">
					<p>
						การกักเก็บน้ำของเขื่อนต่าง ๆ ส่งผลอย่างชัดเจนต่อ
						<span className="font-medium text-[#FFEB52]"> ‘ปริมาณน้ำ’</span> ที่ไหลมาตามแม่น้ำ
					</p>
					และทำให้การเพิ่มหรือลดของระดับน้ำในบางฤดูกาล
					<span className="font-medium text-[#FFEB52]"> 'ไม่สอดคล้อง'</span> กับธรรมชาติ
					<p>เช่น ในช่วงฤดูแล้งก็อาจมีปริมาณน้ำมากได้หรือในช่วงฤดูฝนก็อาจจะมีน้ำน้อยได้</p>
					<p>ทั้งยังส่งผลต่อการเปลี่ยนแปลงของทิศทางการไหลของแม่น้ำอีกด้วย</p>
				</div>
				<div className="flex space-x-4">
					{availableYearRanges.map((year) => (
						<button
							key={year}
							onClick={() => handleYearFilter(year)}
							className={`px-4 py-2 rounded-lg ${
								selectedYear === year ? "bg-[#FFEB52] text-black" : "bg-gray-700 text-white"
							}`}
						>
							{year}
						</button>
					))}
				</div>
				<Image
					src={`/images/fishing-boats-mekong-river.png`}
					alt={`Graph showing water levels in the Mekong River for ${selectedYear}`}
					className="w-full h-1/2"
					width={800}
					height={400}
					style={{ objectFit: "cover" }}
				/>

				<div className="font-ibm text-center text-lg text-gray-200 px-4">
					<p>
						<span className="font-medium text-[#FFEB52]">ภาพถ่ายดาวเทียม</span>
						จากสำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (องค์การมหาชน) หรือ GISTDA
					</p>
					แสดงให้เห็นถึง
					<span className="font-medium text-[#FFEB52]">การเปลี่ยนแปลงทางกายภาพที่เกิดขึ้นกับลำน้ำโขง</span>
					ในบริเวณจังหวัดหนองคาย ระหว่างปี 2017 กับ 2023
				</div>
			</div>
			<div className="h-screen w-screen flex flex-col items-center justify-center snap-start">
				<div className="font-ibm text-center text-lg text-gray-200 px-4 mb-4">
					<p>
						ในขณะที่
						<span className="font-medium text-[#FFEB52]">ข้อมูลระดับน้ำ</span>
						จากเว็บไซต์ฐานข้อมูลคณะกรรมาธิการแม่น้ำโขง (Mekong River Commission: MRC)
					</p>
					ก็แสดงให้เห็นถึงความ
					<span className="font-medium text-[#FFEB52]">ผันผวนอย่างชัดเจน</span>
					ของระดับน้ำในลำน้ำโขงบริเวณจังหวัดหนองคาย ในช่วงเวลา 10 ปีที่ผ่านมา
					<p>สะท้อนถึงความเปลี่ยนแปลงอันผิดปกติซึ่งมีที่มาจากเขื่อนกักเก็บน้ำดังกล่าว</p>
				</div>

				<iframe
					src="https://flo.uri.sh/visualisation/24453139/embed"
					title="Interactive or visual content"
					className="flourish-embed-iframe w-full md:w-3/4 h-[600px]"
					sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
				/>
			</div>
		</section>
	);
}
