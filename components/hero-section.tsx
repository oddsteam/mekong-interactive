"use client";

import Image from "next/image";
import ScrollingDownSvg from "./icons/scrolling-down-icon";

const TitleText = () => (
	<div className="absolute top-[6.5%] w-full flex flex-col items-center text-center px-4 z-20">
		<div className="font-pridi text-[#494B2F] text-[60px] font-medium mb-3 tracking-[0.05em] scale-x-[0.95] scale-y-[0.95]">
			ตำน้ำพริกละลาย
		</div>

		<div className="font-oswald text-[#494B2F] font-semibold text-[180px] leading-none tracking-[0.32em] scale-y-[1.2] scale-x-[1.2] translate-x-[35px]">
			MEKONG
		</div>

		<div className="font-ibm text-[#494B2B] font-bold text-[32px] mt-12 tracking-[0.1em] scale-x-[0.95]">
			สำรวจความคุ้มค่าเขื่อนป้องกันตลิ่ง 4 หมื่นล้าน <br />
			“คำตอบจากรัฐ” กับ “คำถามจากชุมชน”
		</div>
	</div>
);

export default function HeroSection() {
	return (
		<section className="relative h-screen snap-start">
			<Image src="/images/mekong.png" alt="Mekong River" fill className="object-cover object-top" />
			<Image src="/images/cloud.png" alt="Cloud" fill className="object-cover object-top" priority />
			<TitleText />
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2">
				<div className="flex flex-col items-center gap-2">
					<ScrollingDownSvg />
					<span className="font-ibm text-white font-bold text-[32px] tracking-[0.1em] scale-x-[0.95]">
						Scroll down
					</span>
				</div>
			</div>
		</section>
	);
}
