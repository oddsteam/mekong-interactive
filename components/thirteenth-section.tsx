"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const images = Array.from({ length: 10 }, (_, i) => `/images/${i + 1}.png`);

const ImageStack = () => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { amount: 0.3 });
	const [visibleCount, setVisibleCount] = useState(0);

	useEffect(() => {
		let intervalId: NodeJS.Timeout | null = null;

		if (isInView) {
			setVisibleCount(0);
			intervalId = setInterval(() => {
				setVisibleCount((prev) => {
					if (prev >= images.length) {
						if (intervalId) clearInterval(intervalId);
						return prev;
					}
					return prev + 1;
				});
			}, 250);
		} else {
			setVisibleCount(0);
		}

		return () => {
			console.log("Cleanup interval");

			if (intervalId) clearInterval(intervalId);
		};
	}, [isInView]);

	return (
		<motion.div ref={containerRef} className="relative h-screen snap-start bg-[#171918]">
			<div className="absolute inset-0 z-10 font-ibm font-bold text-5xl text-white text-center flex flex-col items-center justify-center">
				<p>วิกฤตน้ำผันผวนในแม่น้ำโขง</p>
				<p>ยังนำมาซึ่งภัยพิบัติมากมายจนถึงปัจจุบัน</p>
			</div>

			<div className="absolute inset-0 flex items-center justify-center">
				<div className="relative w-full h-full overflow-hidden">
					<AnimatePresence>
						{images.slice(0, visibleCount).map((src, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
								exit={{ opacity: 0, display: "none" }}
								className="absolute w-full h-full flex items-center justify-center"
								style={{ zIndex: index + 11 }}
							>
								<Image
									src={src}
									alt={`Image ${index + 1}`}
									width={700}
									height={700}
									priority={index === 0}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
};

export default ImageStack;
