"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "./ui/count-up";

export default function SecondSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0.5, 0.7, 0.88], [1, 1, 0]);
	const isInView = useInView(sectionRef, { amount: 0.3, once: false });

	return (
		<section ref={sectionRef} className="h-screen snap-start">
			<motion.div
				style={{ opacity: isInView ? 0.7 : 0 }}
				animate={{ opacity: isInView ? 0.7 : 0 }}
				transition={{ duration: 0.8 }}
				className="fixed top-0 left-0 w-screen h-screen bg-black z-[-9]"
			/>

			<motion.div
				style={{ opacity: opacity }}
				className="flex flex-col items-center justify-center text-center text-white h-screen font-nosansthai"
			>
				<p className="text-4xl font-normal mb-6">ส่งผลให้รัฐบาลใช้งบประมาณไปมากกว่า</p>
				<p className="text-[100px] font-bold text-[#FFEB52] mb-4">
					<CountUp from={30_000_000_000} to={40_000_000_000} duration={2} separator="," prefix="" suffix=" ฿" />
				</p>
				<p className="text-3xl font-normal mt-1">ไปกับโครงการสร้างเขื่อนป้องกันตลิ่งตลอดทศวรรษที่ผ่านมา</p>
			</motion.div>
		</section>
	);
}
