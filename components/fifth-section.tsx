"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// Animation Variants
const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.5 },
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

// Reusable motion item
const MekongFeatureItem = ({ src, alt, label }: { src: string; alt: string; label: React.ReactNode }) => (
	<motion.div variants={itemVariants} className="flex flex-col items-center">
		<Image
			src={src}
			alt={alt}
			width={230}
			height={230}
			loading="eager"
			priority
			quality={10}
			className="rounded-full object-cover aspect-square"
		/>
		<p className="mt-4 text-[24px] text-center">{label}</p>
	</motion.div>
);

export default function FifthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.3, once: false });

	return (
		<motion.div
			ref={sectionRef}
			className="h-screen w-full bg-[#171918] text-white flex flex-row justify-center items-center gap-12 snap-start"
		>
			{/* Left Text Content */}
			<div className="max-w-md mr-4 leading-relaxed">
				<h2 className="font-ibm text-[54px] font-normal">
					ประวัติศาสตร์และ <br />
					วิถีชีวิตของคนไทยที่เกี่ยวโยงและพึ่งพา <br />
					<span className="text-[#FFEB52] font-bold">“แม่น้ำโขง”</span>
				</h2>

				<div className="mt-4">
					<Image src="/images/arrow-right.png" alt="arrow" width={1000} height={40} />
				</div>
			</div>

			{/* Right Feature Items */}
			<motion.div
				className="font-pridi font-light flex flex-col justify-center items-center gap-10"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				<div className="flex flex-row items-center gap-8">
					<MekongFeatureItem src="/images/transportation.jpg" alt="Transportation" label="การคมนาคม" />
					<MekongFeatureItem src="/images/routes-riverside.jpg" alt="Trade Routes" label="เส้นทางค้าขาย" />
					<MekongFeatureItem src="/images/mekong-fishing.jpg" alt="Mekong Fishing" label="การประมง" />
				</div>

				<div className="flex flex-row gap-8">
					<MekongFeatureItem
						src="/images/agriculture-natural.jpg"
						alt="Agriculture by the River"
						label="เกษตรริมน้ำ"
					/>
					<MekongFeatureItem
						src="/images/border-line.jpg"
						alt="Border Line"
						label={
							<>
								เส้นแบ่งพรมแดน
								<br />
								ธรรมชาติ
							</>
						}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
