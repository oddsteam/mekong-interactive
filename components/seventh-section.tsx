import { useRef } from "react";

export default function SeventhSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<section
			ref={sectionRef}
			className="h-screen relative w-full bg-[#171918] text-white flex flex-col justify-center items-center align-middle gap-10 snap-start bg-[url('/images/big-mekong-problem.png')] bg-cover bg-center"
		>
			<div className="w-4/6 text-center flex flex-col gap-6">
				<p className="text-[#FFEB52] font-bold font-ibm text-6xl text-center leading-[5rem]">
					หนึ่งในปัญหาใหญ่ที่เกิดจากความผันผวน ของระดับน้ำในแม่น้ำโขง
				</p>
				<span>
					<p className="font-ibm font-normal text-3xl">
						นอกจากสิ่งแวดล้อมและผลกระทบต่อชีวิตของชุมชนริมแม่น้ำคือ
					</p>
					<p className="font-ibm font-bold text-3xl text-[#FFEB52]">
						พื้นที่ริมตลิ่งที่พังทลายจากการถูกน้ำกัดเซาะ
					</p>
				</span>

				<span className="font-ibm font-normal text-3xl">
					ขณะที่<span className="text-[#FFEB52] font-bold">การคุกคามทรัพยากรธรรมชาติในแม่น้ำ</span>
					<br />
					เช่น <span className="text-[#FFEB52] font-bold"> การทำเหมืองดูดทรายในแม่น้ำ</span>
					เพื่อนำไปขายทั้งแบบถูกกฎหมายและผิดกฎหมาย ซ้ำเติมการพังทลายของตลิ่งให้รุนแรงและรวดเร็วมากยิ่งขึ้น
				</span>
			</div>

			<div className="absolute bottom-4 right-1/2 translate-x-1/2 font-ibm font-light">
				Photo by : Andy Ball, University of Southampton
			</div>
		</section>
	);
}
