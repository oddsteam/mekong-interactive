import { useRef } from "react";
import Image from "next/image";

export default function TenthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<section
			ref={sectionRef}
			className="h-screen relative w-full bg-[#171918] text-white flex flex-col justify-center items-center snap-start"
		>
			<div className="flex justify-between bg-[#494B2F] w-3/4 h-3/4">
				<Image
					src="/images/fishing-boats-mekong-river-side-view.png"
					alt="fishing-boats-mekong-river-side-view"
					className="object-cover "
					width={455}
					height={733}
				/>
				<div>
					<div className="font-ibm text-3xl font-normal text-white p-10 text-balance">
						<span className="font-bold">หนึ่งในปัจจัย </span>
						ที่ส่งผลให้เกิดความผันผวน ของระดับน้ำในแม่น้ำโขงมาจากการกักเก็บ
						หรือการปล่อยน้ำของเขื่อนในลำน้ำโขง เช่น
						เขื่อนจีนซึ่งทำให้ระดับน้ำต่ำกว่าที่ควรจะเป็นตามธรรมชาติและทำให้ตลิ่งพังทลาย
					</div>
					<div className="font-ibm text-3xl font-normal text-white p-10 text-balance">
						นอกจาก<span className="font-bold">ตลิ่งที่พังทลาย </span> ชีวิตของผู้คนที่
						อาศัยทำมาหากินริมโขงจำนวนไม่น้อย ก็กำลังพังทลายจากความผันผวนของ ระดับน้ำเช่นเดียวกัน
						หลายคนต้องละทิ้ง วิถีชีวิตริมแม่น้ำและออกไปดิ้นรน ภายในเมืองเพื่อหาเลี้ยงชีพ
					</div>
				</div>
			</div>
		</section>
	);
}
