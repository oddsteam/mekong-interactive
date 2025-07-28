"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FirstSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.3, once: false });

	return (
		<section ref={sectionRef} className="h-screen snap-start">
			<motion.video
				autoPlay
				loop
				muted
				playsInline
				className="fixed top-0 left-0 w-screen h-screen object-cover z-[-10]"
			>
				<source src="/videos/mekong-video-1.mp4" type="video/mp4" />
			</motion.video>

			<motion.div
				className="h-screen flex flex-col items-center justify-end text-center text-white"
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: -100 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<div className="max-w-5xl leading-relaxed">
					<p className="font-ibm text-xl sm:text-3xl">
						<span className="text-[#FFEB52] font-bold">ความผันผวนของลำน้ำโขง</span>
						<br />
						และปัญหาการพังทลายของตลิ่งที่เกิดจากการกัดเซาะของน้ำ
						<br />
						กำลังก่อผลกระทบต่อชีวิตผู้คนจำนวนมากใน
						<span className="text-[#FFEB52] font-bold"> 8 จังหวัดของไทย</span>
					</p>
				</div>
			</motion.div>
		</section>
	);
}
