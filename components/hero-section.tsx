"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { SectionContext } from "@/lib/section-context";

type BackgroundImageProps = {
	src: string;
	alt: string;
	zIndex: string;
	style?: React.CSSProperties | { [key: string]: MotionValue };
};

const BackgroundImage = ({ src, alt, zIndex, style = {} }: BackgroundImageProps) => (
	<motion.div style={style} className={`fixed inset-0 ${zIndex}`}>
		<Image src={src} alt={alt} fill className="object-cover" priority />
	</motion.div>
);

type TitleTextProps = {
	opacity: MotionValue<number>;
	y: MotionValue<number>;
};

const TitleText = ({ opacity, y }: TitleTextProps) => (
	<motion.h1 style={{ opacity, y }} className="flex-col">
		<div
			className="fixed w-screen text-center pt-36 z-10 pl-[0.25em] font-oswald font-semibold text-[10vw] sm:text-[10vw] md:text-[11vw] lg:text-[13vw] xl:text-[15vw] 2xl:text-[18vw] leading-[1] tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.25em] text-[#494B2F] mt-8"
			style={{
				maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
				WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
			}}
		>
			MEKONG
		</div>
		<div className="fixed w-screen left-0 flex justify-between px-24 mt-96 z-10">
			<p className="font-oswald font-semibold pl-[0.25em] text-[3vw] sm:text-[3vw] md:text-[4vw] lg:text-[5vw] xl:text-[6vw] 2xl:text-[7vw] text-[#A1AC5F]">
				ตำน้ำพริก
			</p>
			<p className="font-oswald font-semibold pr-[0.25em] text-[3vw] sm:text-[3vw] md:text-[4vw] lg:text-[5vw] xl:text-[6vw] 2xl:text-[7vw] text-[#A1AC5F]">
				ละลายโขง
			</p>
		</div>
	</motion.h1>
);

type QuoteProps = {
	side?: "left" | "right";
	opacity: MotionValue<number>;
	y: MotionValue<number>;
	lines: string[];
};

const Quote = ({ side = "left", opacity, y, lines }: QuoteProps) => (
	<motion.div
		style={{ opacity, y }}
		className={`fixed top-[6rem] ${
			side === "left" ? "left-0 z-0" : "right-0 z-20"
		} p-4 text-[#F5F3F0] text-2xl font-bold italic font-psl-ornanong-pro`}
	>
		<div className="flex items-start justify-center">
			<Image
				src="/images/double-quote.png"
				alt="Left Quote"
				width={24}
				height={24}
				className="mr-2 -rotate-180"
				priority
			/>
			<div className="flex flex-col items-center">
				{lines.map((line, idx) => (
					<p key={idx}>{line}</p>
				))}
			</div>
			<Image
				src="/images/double-quote.png"
				alt="Right Quote"
				width={24}
				height={24}
				className="ml-10 mt-14"
				priority
			/>
		</div>
	</motion.div>
);

type QuoteFooterProps = {
	opacity: MotionValue<number>;
	y: MotionValue<number>;
	lines: string[];
};

const QuoteFooter = ({ opacity, y, lines }: QuoteFooterProps) => (
	<motion.div
		style={{ opacity, y }}
		className="fixed bottom-[6rem] right-[6rem] p-4 z-20 text-[#F5F3F0] text-2xl font-bold italic font-psl-ornanong-pro"
	>
		<div className="flex items-start justify-center">
			<div className="flex flex-col items-center">
				{lines.map((line, idx) => (
					<p key={idx}>{line}</p>
				))}
			</div>
		</div>
	</motion.div>
);

export default function HeroSection() {
	const { containerRef } = useContext(SectionContext);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const secondBackgroundOpacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);
	const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 1.05]);
	const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, 2]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
	const titleY = useTransform(scrollYProgress, [0, 0.1, 0.2], [-90, -90, -100]);

	const useMakeTransform = (range: number[]) => [
		useTransform(scrollYProgress, range, [0, 1, 0]),
		useTransform(scrollYProgress, range, [-20, 0, -20]),
	];

	const [desc1Opacity, desc1Y] = useMakeTransform([0.15, 0.25, 0.4]);
	const [desc2Opacity, desc2Y] = useMakeTransform([0.4, 0.5, 0.65]);
	const [desc3Opacity, desc3Y] = useMakeTransform([0.65, 0.75, 0.9]);
	const [nameOpacity, nameY] = useMakeTransform([0.65, 0.75, 0.9]);

	return (
		<section className="min-h-[300vh] relative overflow-hidden">
			<BackgroundImage src="/images/mekong.png" alt="Mekong River" zIndex="-z-20" />
			<BackgroundImage
				src="/images/mekong-second-frame.png"
				alt="Mekong River Second Frame"
				zIndex="-z-10"
				style={{ opacity: secondBackgroundOpacity }}
			/>
			<TitleText opacity={titleOpacity} y={titleY} />
			<motion.div className="fixed inset-0 z-10" style={{ scale: imageScale, rotate: imageRotate }}>
				<Image src="/images/villager.png" alt="Villager" fill className="object-cover" priority />
			</motion.div>

			<Quote
				opacity={desc1Opacity}
				y={desc1Y}
				lines={[
					"ชาวบ้านริมฝั่งแม่น้ำโขงและปากแม่น้ำมูลหาปลาลำบากมาก",
					"นอกจากกระแสน้ำที่เปลี่ยนแปลงแล้ว ชุมชนฝั่งลาวมีการช็อตปลา",
					"และบางส่วนลักลอบเข้ามาช็อตปลาในฝั่งไทยด้วย ทำให้พันธุ์ปลาเป็นหมัน",
				]}
			/>

			<Quote
				side="right"
				opacity={desc2Opacity}
				y={desc2Y}
				lines={[
					"จากเดิมที่เคยมีชาวบ้านทำประมงกว่า 100 ครอบครัว",
					"ตอนนี้เหลือเพียง 10-20 ครอบครัวเท่านั้น",
					"ชุมชนต้องสูญเสียรายได้จนต้องออกไปหางานที่ต่างจังหวัด",
				]}
			/>

			<Quote
				opacity={desc3Opacity}
				y={desc3Y}
				lines={[
					"เกษตรริมโขงได้รับผลกระทบจากการระดับน้ำโขงขึ้นลงผิดปกติ",
					"หน้าแล้งทำ เกษตรได้เพียงครึ่งพื้นที่จากเดิม",
					"และบางครั้งน้ำขึ้นสูงทันทีทำให้ท่วมแปลงเกษตรเสียหายทั้งหมด",
				]}
			/>

			<QuoteFooter
				opacity={nameOpacity}
				y={nameY}
				lines={["สมปอง เวียงจันทร์", "ชาวบ้านริมแม่น้ำโขง จ.อุบลราชธานี"]}
			/>
		</section>
	);
}
