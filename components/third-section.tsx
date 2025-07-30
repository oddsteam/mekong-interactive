import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ThirdSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.3, once: false });

	return (
		<section ref={sectionRef} className="snap-center h-screen w-screen flex items-center">
			<motion.div
				style={{ opacity: isInView ? 0.8 : 0 }}
				animate={{ opacity: isInView ? 0.8 : 0 }}
				transition={{ duration: 0.8 }}
				className="fixed top-0 left-0 w-screen h-screen bg-black z-[-9]"
			/>

			<div className="flex flex-col items-center justify-center h-[35vh] text-center text-white w-screen">
				<div className="max-w-9xl">
					<p className="font-nosansthai text-4xl font-light leading-[1.5]">
						งบมหาศาลที่ถูกเทลงไป <br />
						ส่งผลกระทบต่อ
						<span
							className="font-normal text-[#FFEB52]"
						>
							ชีวิตผู้คนริมโขง
						</span>
						อย่างไรบ้าง <br />
						และคุ้มค่าหรือไม่เมื่อเทียบกับผลลัพธ์ที่ได้กลับมา
					</p>
				</div>
			</div>
		</section>
	);
}
