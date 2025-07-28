import { useRef } from "react";

export default function NinthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<section
			ref={sectionRef}
			className="h-screen relative w-full bg-[#171918] text-white flex flex-col justify-end items-center snap-start bg-[url('/images/wave.png')] bg-top bg-no-repeat"
		>
			<div className="text-white font-bold font-ibm text-6xl text-center pb-10">
				น้ำโขงผันผวน ตลิ่งพัง <span className="text-[#FFEB52]">ชีวิตทลาย</span>
			</div>
		</section>
	);
}
