import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ThailandMapSvg from "./icons/thailand-map";

export default function ForthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	const fishermanOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<section ref={sectionRef} className="relative h-[200vh] w-screen snap-start bg-black">
			<div className="sticky top-0 h-screen w-screen z-0">
				<motion.div className="relative h-full w-full">
					{/* Background Image */}
					<Image
						src="/images/by-the-mekong-at-sunset.png"
						alt="Fishing river"
						fill
						className="object-cover"
					/>

					{/* Fisherman fades out */}
					<motion.div
						className="absolute bottom-0 right-0 w-3/6 z-10"
						style={{ opacity: fishermanOpacity }}
						initial={{ opacity: 1 }}
						transition={{ duration: 1, ease: "easeInOut" }}
					>
						<Image src="/images/fisherman.png" alt="Fisherman" width={880} height={640} />
					</motion.div>
				</motion.div>
			</div>

			<div className="absolute inset-0 z-20 flex items-center justify-center h-screen pointer-events-none snap-start">
				<div className="flex flex-col items-center text-white font-ibm text-6xl leading-relaxed font-semibold text-center">
					<div>
						สำหรับคนไทย
						<motion.span
							className="font-ibm text-8xl font-bold text-[#FFEB52] mt-6 drop-shadow-md inline-block"
							// animate={{
							// 	scale: [1, 1.3, 1],
							// 	rotate: [0, 5, -5, 5, 0],
							// 	textShadow: [
							// 		"0 0 8px #FFEB52",
							// 		"0 0 20px #FFEB52",
							// 		"0 0 8px #FFEB52",
							// 		"0 0 20px #FFEB52",
							// 		"0 0 8px #FFEB52",
							// 	],
							// }}
							// transition={{
							// 	duration: 1,
							// 	repeat: Infinity,
							// 	repeatType: "loop",
							// 	ease: "easeInOut",
							// }}
						>
							“แม่น้ำโขง”
						</motion.span>
					</div>
					<p className="mt-4">
						ถือเป็นแม่น้ำสายสำคัญที่หล่อเลี้ยงชีวิต <br />
						ผู้คนใน <span className="text-[#FFEB52]">8 จังหวัด</span> ริมแม่น้ำ
					</p>
				</div>
			</div>

			<div className="absolute z-20 h-screen w-screen snap-start flex items-end">
				<ThailandMapSvg />
				<div className="absolute top-24 right-24 flex flex-col items-start justify-start text-white font-ibm leading-relaxed font-semibold text-balance">
					<div className="mt-4 text-6xl">
						มีพื้นที่ตลอดแนวชายฝั่งแม่น้ำรวม
						<br />
						ทั้งหมดถึง <span className="text-[#FFEB52] text-[98px]">958 กิโลเมตร</span>
					</div>
				</div>
			</div>
		</section>
	);
}
