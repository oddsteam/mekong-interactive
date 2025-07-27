import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { scale: 0, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { type: "spring", stiffness: 300, damping: 20 },
	},
};

export default function SixthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.3, once: false });

	return (
		<section
			ref={sectionRef}
			className="h-screen w-full bg-[#171918] text-white flex flex-row justify-center items-center gap-12 snap-start"
		>
			<div className="max-w-md mr-4 leading-relaxed">
				<div className="font-ibm text-[54px] font-normal">
					ประวัติศาสตร์และ <br />
					วิถีชีวิตของคนไทยที่เกี่ยวโยงและพึ่งพา <br />
					<p className="text-[#FFEB52] font-bold">“แม่น้ำโขง”</p>
				</div>

				<div className="mt-4">
					<Image src="/images/arrow-right.png" alt="arrow" width={1000} height={40} />
				</div>
			</div>

			<motion.div
				className="font-pridi font-light flex flex-col justify-center items-center gap-10"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				<div className="flex flex-row items-center gap-8">
					<motion.div variants={itemVariants} className="flex flex-col items-center">
						<Image
							src="/images/transportation.jpg"
							alt="Transportation"
							width={230}
							height={230}
							className="rounded-full object-cover aspect-square"
						/>
						<p className="mt-4 text-[24px] text-center">การคมนาคม</p>
					</motion.div>

					<motion.div variants={itemVariants} className="flex flex-col items-center">
						<Image
							src="/images/routes-riverside.jpg"
							alt="Trade Routes"
							width={230}
							height={230}
							className="rounded-full object-cover aspect-square"
						/>
						<p className="mt-4 text-[24px] text-center">เส้นทางค้าขาย</p>
					</motion.div>

					<motion.div variants={itemVariants} className="flex flex-col items-center">
						<Image
							src="/images/mekong-fishing.png"
							alt="Mekong Fishing"
							width={230}
							height={230}
							className="rounded-full object-cover aspect-square"
						/>
						<p className="mt-4 text-[24px] text-center">การประมง</p>
					</motion.div>
				</div>

				<div className="flex flex-row gap-8">
					<motion.div variants={itemVariants} className="flex flex-col items-center">
						<Image
							src="/images/agriculture-natural.jpg"
							alt="Agriculture by the River"
							width={230}
							height={230}
							className="rounded-full object-cover aspect-square"
						/>
						<p className="mt-4 text-[24px] text-center">เกษตรริมน้ำ</p>
					</motion.div>

					<motion.div variants={itemVariants} className="flex flex-col items-center">
						<Image
							src="/images/border-line.jpg"
							alt="Border Line"
							width={230}
							height={230}
							className="rounded-full object-cover aspect-square"
						/>
						<p className="mt-4 text-[24px] text-center">
							เส้นแบ่งพรมแดน
							<br />
							ธรรมชาติ
						</p>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
