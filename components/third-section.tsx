import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ThirdSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.3, once: false });

	return (
		<section ref={sectionRef} className="snap-center w-screen flex items-center">
			<div className="flex flex-col items-center justify-center h-[35vh] bg-[#171918] text-center text-white w-screen">
				<div className="max-w-9xl">
					<p className="font-pridi text-4xl font-light leading-[1.5]">
						งบมหาศาลที่ถูกเทลงไป <br />
						ส่งผลกระทบต่อ
						<motion.span
							className="font-normal text-[#FFEB52]"
							style={{ opacity: isInView ? 1 : 0 }}
							animate={{ opacity: isInView ? 1 : 0 }}
							transition={{ duration: 2, ease: "easeInOut" }}
						>
							ชีวิตผู้คนริมโขง
						</motion.span>
						อย่างไรบ้าง <br />
						และคุ้มค่าหรือไม่เมื่อเทียบกับผลลัพธ์ที่ได้กลับมา
					</p>
				</div>
			</div>
		</section>
	);
}
